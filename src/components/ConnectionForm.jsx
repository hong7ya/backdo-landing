export default function ConnectionForm({ mode, onModeChange }) {
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
      className="grid gap-4 rounded-box border border-base-300 bg-base-100 p-6 text-base-content"
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
              onChange={(event) => onModeChange(event.target.value)}
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
              onChange={(event) => onModeChange(event.target.value)}
              className="radio radio-primary"
            />
            Node.js
          </label>
        </div>
      </fieldset>
      <div className="fieldset">
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
            연결
          </button>
        </div>
        <p
          id="port-help"
          className="fieldset-label"
        >
          터미널에 안내된 디버깅 포트를 직접 입력하세요.
        </p>
      </div>
      <p className="text-sm">
        먼저 서버에서 <code>npm run start:{mode}</code>를 실행하세요.
        {mode === "node" &&
          " 사용자 프로젝트에서도 안내된 Node 명령을 실행하세요."}{" "}
        선택한 모드와 같은 포트로 대상을 준비해야 합니다. 포트 입력만으로 실행
        대상이 생성되지는 않습니다. 자세한 순서는 Guide에서 확인하세요.
      </p>
    </form>
  );
}
