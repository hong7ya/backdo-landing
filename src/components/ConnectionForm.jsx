import { useState } from "react";

import Guide from "./Guide";

export default function ConnectionForm() {
  const [mode, setMode] = useState("console");
  const modeLabel = mode === "console" ? "Console" : "Node.js";

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
      className="grid min-w-0 gap-6 rounded-box border border-base-300 bg-base-100 p-4 text-base-content sm:p-6"
    >
      <fieldset className="fieldset">
        <legend className="fieldset-legend">디버깅 모드</legend>
        <div className="flex flex-wrap gap-6">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="mode"
              value="console"
              checked={mode === "console"}
              onChange={(event) => setMode(event.target.value)}
              className="radio radio-primary"
            />
            Console (Chrome)
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="mode"
              value="node"
              checked={mode === "node"}
              onChange={(event) => setMode(event.target.value)}
              className="radio radio-primary"
            />
            Node.js
          </label>
        </div>
      </fieldset>
      <Guide mode={mode} />
      <div className="fieldset border-t border-base-300 pt-4">
        <h3 className="text-base font-semibold">
          {mode === "console" ? "2" : "3"}. 터미널에 안내된 포트로 연결
        </h3>
        <label
          className="fieldset-legend"
          htmlFor="debugging-port"
        >
          디버깅 포트
        </label>
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
          준비한 {modeLabel} 대상의 디버깅 포트를 입력하세요. 포트 입력만으로
          실행 대상이 생성되지는 않습니다.
        </p>
        {mode === "console" && (
          <p className="text-sm">
            연결 후 열린 화면의 Console에 JavaScript를 입력하세요.
          </p>
        )}
      </div>
    </form>
  );
}
