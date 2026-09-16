import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import FirstPage from "../components/FirstPage";

vi.mock("../components/ScrollToTop", () => ({
  default: () => <div data-testid="scroll-to-top">Mock ScrollToTop</div>,
}));

describe("FirstPage", () => {
  beforeEach(() => {
    cleanup();
  });

  it("renders the main heading and subheadings", () => {
    const { container } = render(<FirstPage />);

    const heading = container.querySelector("h1");
    const subheading = container.querySelector("h2");
    const location = container.querySelector(".fade-in-left > p:last-of-type");

    expect(heading).toHaveTextContent(/Hello, I'm Filip/);
    expect(subheading).toHaveTextContent(/Platform engineer/);
    expect(subheading).toHaveTextContent(/Kubernetes/);
    expect(location).toHaveTextContent(/Based in Stockholm, Sweden/);
  });

  it("renders focus area labels", () => {
    const { getByText } = render(<FirstPage />);
    expect(getByText("Kubernetes")).toBeTruthy();
    expect(getByText("OpenTofu")).toBeTruthy();
  });

  it("renders with a full-height hero layout", () => {
    const { container } = render(<FirstPage />);

    const mainContainer = container.querySelector("#home");

    expect(mainContainer?.className).toContain("page-grid");
    expect(mainContainer?.className).toContain("min-h-[100svh]");
  });

  it("includes ScrollToTop component", () => {
    const { container } = render(<FirstPage />);
    const scrollToTop = container.querySelector(
      '[data-testid="scroll-to-top"]',
    );
    expect(scrollToTop).toBeTruthy();
  });

  it("uses constrained width wrapper for hero content", () => {
    const { container } = render(<FirstPage />);

    const wrapper = container.querySelector("#home .max-w-6xl");
    expect(wrapper).toBeTruthy();
  });

  it("renders a highlights panel", () => {
    const { container } = render(<FirstPage />);

    const highlights = container.querySelector("aside.hero-panel");
    expect(highlights).toBeTruthy();
  });
});
