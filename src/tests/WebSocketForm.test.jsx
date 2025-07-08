import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { expect, test, vi } from "vitest";
import WebSocketForm from "../components/WebSocketForm";

const open = vi.fn();
vi.stubGlobal('open', open);

const WEBSOCKET_ID="8693A0BB7F4A2A68F1B6EF454C7A6288"
const URL = `https://backdo.site/gen/front_end/devtools_app?ws=localhost:9222/devtools/page/${WEBSOCKET_ID}`;

test("입력창이 비워져 있을 경우, Get Started 버튼을 클릭하면 open이 호출되지 않는다", async () => {
  const { unmount } = render(<WebSocketForm />);
  const user = userEvent.setup();

  await user.click(screen.getByRole("button", {name: "Get Started"}));

  expect(open).not.toHaveBeenNthCalledWith(1, URL, "_blank");

  unmount();
});

test("입력창에 WEBSOCKET_ID를 입력한 경우, Get Started 버튼을 클릭하면 디버거가 배포된 주소로 open이 호출된다", async () => {
  const { unmount } = render(<WebSocketForm />);
  const user = userEvent.setup();

  await user.type(screen.getByRole("textbox", {name: "WebSocket ID"}), WEBSOCKET_ID);
  await user.click(screen.getByRole("button", {name: "Get Started"}));

  expect(open).toHaveBeenNthCalledWith(1, URL, "_blank");

  unmount();
});
