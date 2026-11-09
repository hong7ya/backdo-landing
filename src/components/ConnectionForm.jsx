import { useRef, useState } from "react";

import Guide from "./Guide";

const MODES = [
  { value: "console", label: "Console (Chrome)" },
  { value: "node", label: "Node.js" },
];

export default function ConnectionForm() {
  const [mode, setMode] = useState("console");
  const tabRefs = useRef({});
  const modeLabel = mode === "console" ? "Console" : "Node.js";

  function handleTabKeyDown(event) {
    const adjacentMode = mode === "console" ? "node" : "console";
    const nextMode = {
      ArrowLeft: adjacentMode,
      ArrowRight: adjacentMode,
      Home: "console",
      End: "node",
    }[event.key];
    if (!nextMode) return;
    event.preventDefault();
    setMode(nextMode);
    tabRefs.current[nextMode].focus();
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const entry = mode === "console" ? "devtools_app.html" : "js_app.html";
    const url = new URL(entry, import.meta.env.VITE_BACKDO_FRONTEND_URL);
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
        className={`-mt-px grid min-w-0 gap-6 rounded-box border border-base-300 bg-base-100 p-4 sm:p-6 ${mode === "console" ? "rounded-tl-none" : ""}`}
      >
        <Guide mode={mode} />
        <div className="fieldset gap-2 p-0 text-sm">
          <h3 className="text-base font-semibold">
            <label htmlFor="debugging-port">
              {mode === "console" ? "2" : "3"}. 터미널에 안내된 포트로 연결
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
              placeholder={mode === "console" ? "예: 9222" : "예: 9229"}
              aria-describedby="port-help"
              className="input w-full"
            />
            <button
              type="submit"
              className="btn btn-primary"
            >
              {modeLabel} 연결
            </button>
          </div>
          <p
            id="port-help"
            className="fieldset-label"
          >
            실행 중인 {modeLabel} 대상과 같은 포트를 입력하세요.
          </p>
          {mode === "console" && (
            <p>연결 후 열린 화면의 Console에 JavaScript를 입력하세요.</p>
          )}
        </div>
      </div>
    </form>
  );
}
