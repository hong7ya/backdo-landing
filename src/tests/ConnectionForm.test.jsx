import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

import ConnectionForm from "../components/ConnectionForm";

describe("디버깅 대상 연결", () => {
  beforeEach(() => {
    vi.stubEnv(
      "VITE_BACKDO_FRONTEND_URL",
      "https://backdo.site/gen/front_end/"
    );
    vi.spyOn(window, "open").mockReturnValue(null);
  });

  it.each([
    {
      mode: "DOM",
      button: "DOM 연결",
      port: "9222",
      entry: "inspector.html",
    },
    {
      mode: "Console (Chrome)",
      button: "Console 연결",
      port: "9333",
      entry: "devtools_app.html",
    },
    {
      mode: "Node.js",
      button: "Node.js 연결",
      port: "9339",
      entry: "js_app.html",
    },
  ])(
    "$mode에서 입력한 포트로 해당 DevTools를 연다",
    async ({ mode, button, port, entry }) => {
      const user = userEvent.setup();
      render(<ConnectionForm />);

      // DOM은 탭을 선택하지 않아도 바로 연결할 수 있어야 한다.
      if (mode !== "DOM") {
        await user.click(screen.getByRole("tab", { name: mode }));
      }
      await user.type(
        screen.getByRole("spinbutton", { name: /터미널에 안내된 포트로 연결/ }),
        port
      );
      await user.click(screen.getByRole("button", { name: button }));

      expect(window.open).toHaveBeenCalledExactlyOnceWith(
        `https://backdo.site/gen/front_end/${entry}?port=${port}`,
        "_blank",
        "noopener,noreferrer"
      );
    }
  );

  it.each([
    { description: "빈 포트", port: "" },
    { description: "범위를 벗어난 포트", port: "65536" },
  ])(
    "$description로는 연결하지 않고 수정 후 연결할 수 있다",
    async ({ port }) => {
      const user = userEvent.setup();
      render(<ConnectionForm />);
      const input = screen.getByRole("spinbutton", {
        name: /터미널에 안내된 포트로 연결/,
      });
      if (port) {
        await user.type(input, port);
      }

      await user.click(screen.getByRole("button", { name: "DOM 연결" }));

      expect(input).toBeInvalid();
      expect(window.open).not.toHaveBeenCalled();

      await user.clear(input);
      await user.type(input, "9222");
      await user.click(screen.getByRole("button", { name: "DOM 연결" }));

      expect(window.open).toHaveBeenCalledExactlyOnceWith(
        "https://backdo.site/gen/front_end/inspector.html?port=9222",
        "_blank",
        "noopener,noreferrer"
      );
    }
  );
});
