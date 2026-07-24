import { cleanup, render } from "@testing-library/react";
import { renderToString } from "react-dom/server";
import { afterEach, describe, expect, it } from "vitest";
import { useHydrated } from "../index";

function Probe() {
  return <span data-testid="v">{useHydrated() ? "hydrated" : "inert"}</span>;
}

afterEach(cleanup);

describe("useHydrated", () => {
  it("reads inert from the server snapshot", () => {
    // getServerSnapshot → false: the SSR markup must not assume the client.
    expect(renderToString(<Probe />)).toContain("inert");
  });

  it("reads hydrated once mounted on the client", () => {
    // getSnapshot → true: a jsdom mount is the client, post-hydration.
    const { getByTestId } = render(<Probe />);
    expect(getByTestId("v").textContent).toBe("hydrated");
  });
});
