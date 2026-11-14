import { useRef, useState } from "react";

import Guide from "./Guide";

const MODES = [
  {
    value: "dom",
    label: "DOM",
    name: "DOM",
    entry: "inspector.html",
    port: 9222,
    instruction:
      "빈 페이지에서 시작합니다. Console에 DOM을 만들고 조작하는 JavaScript를 입력하고, 왼쪽 미리보기에서 결과를 확인하세요.",
  },
  {
    value: "console",
    label: "Console (Chrome)",
    name: "Console",
    entry: "devtools_app.html",
    port: 9222,
    instruction: "연결 후 열린 화면의 Console에 JavaScript를 입력하세요.",
  },
  {
    value: "node",
    label: "Node.js",
    name: "Node.js",
    entry: "js_app.html",
    port: 9229,
  },
];

export default function ConnectionForm() {
  const [mode, setMode] = useState(MODES[0].value);
  const tabRefs = useRef({});
  const modeIndex = MODES.findIndex(({ value }) => value === mode);
  const selectedMode = MODES[modeIndex];

  function handleTabKeyDown(event) {
    const nextIndex = {
      ArrowLeft: (modeIndex - 1 + MODES.length) % MODES.length,
      ArrowRight: (modeIndex + 1) % MODES.length,
      Home: 0,
      End: MODES.length - 1,
    }[event.key];

    if (nextIndex === undefined) {
      return;
    }

    event.preventDefault();
    const nextMode = MODES[nextIndex].value;
    setMode(nextMode);
    tabRefs.current[nextMode].focus();
  }

  function handleSubmit(event) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const url = new URL(
      selectedMode.entry,
      import.meta.env.VITE_BACKDO_FRONTEND_URL
    );

    url.searchParams.set("port", String(Number(form.get("port"))));

    window.open(url.href, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="min-w-0 text-base-content"
    >
      <div
        role="tablist"
        aria-label="디버깅 모드"
        className="tabs tabs-lift"
      >
        {MODES.map(({ value, label }) => (
          <button
            key={value}
            ref={(element) => {
              tabRefs.current[value] = element;
            }}
            id={`connection-tab-${value}`}
            type="button"
            role="tab"
            aria-selected={mode === value}
            aria-controls="connection-panel"
            tabIndex={mode === value ? 0 : -1}
            onClick={() => setMode(value)}
            onKeyDown={handleTabKeyDown}
            className={`tab font-semibold ${mode === value ? "z-10" : "text-base-content/80!"}`}
          >
            {label}
          </button>
        ))}
      </div>
      <div
        id="connection-panel"
        role="tabpanel"
        aria-labelledby={`connection-tab-${mode}`}
        className={`-mt-px grid min-w-0 gap-6 rounded-box border border-base-300 bg-base-100 p-4 sm:p-6 ${modeIndex === 0 ? "rounded-tl-none" : ""}`}
      >
        <Guide
          mode={mode}
          label={selectedMode.name}
        />
        <div className="fieldset gap-2 p-0 text-sm">
          <h3 className="text-base font-semibold">
            <label htmlFor="debugging-port">
              {mode === "node" ? "3" : "2"}. 터미널에 안내된 포트로 연결
            </label>
          </h3>
          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              id="debugging-port"
              name="port"
              type="number"
              min="1"
              max="65535"
              step="1"
              required
              placeholder={`예: ${selectedMode.port}`}
              aria-describedby="port-help"
              className="input w-full"
            />
            <button
              type="submit"
              className="btn btn-primary"
            >
              {selectedMode.name} 연결
            </button>
          </div>
          <p
            id="port-help"
            className="fieldset-label"
          >
            실행 중인 {selectedMode.name} 대상과 같은 포트를 입력하세요.
          </p>
          {selectedMode.instruction && <p>{selectedMode.instruction}</p>}
        </div>
      </div>
    </form>
  );
}
