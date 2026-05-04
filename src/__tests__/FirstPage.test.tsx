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

  it("renders with correct background colors and layout", () => {
    const { container } = render(<FirstPage />);

    const mainContainer = container.querySelector("#home");
    const contentCard = container.querySelector(".bg-\\[\\#2d3142\\]");

    expect(mainContainer?.className).toContain("bg-[#4f5d75]");
    expect(contentCard).toBeTruthy();
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

    const wrapper = container.querySelector("#home .max-w-7xl");
    expect(wrapper).toBeTruthy();
  });

  it("applies hover animation class to main content card", () => {
    const { container } = render(<FirstPage />);

    const contentCard = container.querySelector(".hover\\:scale-\\[1\\.01\\]");
    expect(contentCard).toBeTruthy();
  });
});
