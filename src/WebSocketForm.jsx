import { useState } from "react";

export default function WebSocketForm() {
  const [webSocketID, setWebSocketID] = useState("");

  function handleClick() {
    if (webSocketID.length === 0) {
      return;
    }

    const url = `https://backdo.site/gen/front_end/devtools_app?ws=localhost:9222/devtools/page/${webSocketID}`;

    window.open(url, "_blank");
  }

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="flex flex-row gap-2"
    >
      <label className="input w-xl">
        <span className="label">localhost:9222/devtools/page/</span>
        <input
          type="text"
          placeholder="ID"
          value={webSocketID}
          onChange={(event) => setWebSocketID(event.target.value)}
        />
      </label>
      <button
        className="btn btn-accent"
        onClick={handleClick}
      >
        Get Started
      </button>
    </form>
  );
}
