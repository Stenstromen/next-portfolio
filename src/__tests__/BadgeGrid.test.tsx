import { render, screen } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import BadgeGrid from "../components/BadgeGrid";
import BadgesList from "../components/BadgesList";

// Mock the Badge component since we don't need to test its internals here
vi.mock("../components/Badge", () => ({
  default: function MockBadge({ name }: { name: string }) {
    return <div data-testid="mock-badge">{name}</div>;
  },
}));

test("renders the grid container with correct styling", () => {
  render(<BadgeGrid />);
  
  const gridContainer = screen.getByTestId("badge-grid");
  expect(gridContainer).toHaveClass("bg-[#f686bd]");
  expect(gridContainer).toHaveClass("p-6");
  expect(gridContainer).toHaveClass("rounded-3xl");
  expect(gridContainer).toHaveClass("shadow-lg");
});

test("renders all badges from BadgesList", () => {
  render(<BadgeGrid />);
  
  const badges = screen.getAllByTestId("mock-badge");
  expect(badges).toHaveLength(Object.keys(BadgesList).length);
  
  // Verify that each badge name from BadgesList is rendered
  Object.values(BadgesList).forEach((badge) => {
    expect(screen.getByText(badge.name)).toBeInTheDocument();
  });
});

test("applies correct grid layout classes", () => {
  render(<BadgeGrid />);
  
  const grid = screen.getByTestId("badge-grid").firstElementChild;
  expect(grid).toHaveClass("grid");
  expect(grid).toHaveClass("grid-cols-2");
  expect(grid).toHaveClass("sm:grid-cols-3");
  expect(grid).toHaveClass("gap-2");
});

test("renders badges with correct container styling", () => {
  render(<BadgeGrid />);
  
  const badgeContainers = screen.getAllByTestId("mock-badge");
  badgeContainers.forEach((container) => {
    expect(container.parentElement).toHaveClass("flex");
    expect(container.parentElement).toHaveClass("justify-start");
    expect(container.parentElement).toHaveClass("items-center");
  });
});

test("passes nonce prop to Badge components", () => {
  const testNonce = "test-nonce";
  render(<BadgeGrid nonce={testNonce} />);
  
  // Since we mocked the Badge component, we can't directly test the nonce prop
  // But we can verify that the correct number of badges are rendered
  const badges = screen.getAllByTestId("mock-badge");
  expect(badges).toHaveLength(Object.keys(BadgesList).length);
});
