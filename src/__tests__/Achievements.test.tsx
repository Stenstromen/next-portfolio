/* eslint-disable @next/next/no-img-element */
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, fireEvent, act } from "@testing-library/react";
import Achievements from "../components/Achievements";
import { StaticImageData } from "next/image";

// Mock next/image
vi.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }: { src: StaticImageData; alt: string }) => (
    <img src={src.src} alt={alt} />
  ),
}));

// Mock requestAnimationFrame
let lastTimestamp = 0;
vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
  const timestamp = lastTimestamp + 16; // Simulate 16ms frame
  lastTimestamp = timestamp;
  return setTimeout(() => callback(timestamp), 0);
});

// Mock cancelAnimationFrame
vi.stubGlobal('cancelAnimationFrame', (id: number) => {
  clearTimeout(id);
});

// Mock getBoundingClientRect
const mockGetBoundingClientRect = () => ({
  width: 100,
  height: 100,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  x: 0,
  y: 0,
  toJSON: () => {},
});

describe("Achievements", () => {
  const mockBadges = [
    {
      id: "1",
      name: "Test Badge 1",
      imageUrl: { src: "/test1.png" } as StaticImageData,
      issuer: "Test Issuer 1",
      earnedDate: "2024-01-01",
      url: "https://test1.com",
    },
    {
      id: "2",
      name: "Test Badge 2",
      imageUrl: { src: "/test2.png" } as StaticImageData,
      issuer: "Test Issuer 2",
      earnedDate: "2024-01-02",
      url: "https://test2.com",
    },
  ];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders with default badges when none provided", () => {
    const { container } = render(<Achievements />);
    const badges = container.querySelectorAll("a");
    expect(badges.length).toBeGreaterThan(0);
  });

  it("renders provided badges", () => {
    const { container } = render(<Achievements badges={mockBadges} />);
    const badges = container.querySelectorAll("a");
    expect(badges.length).toBe(mockBadges.length * 2); // *2 because of infinite scroll
  });

  it("pauses scrolling on mouse enter", async () => {
    const { container } = render(<Achievements />);
    const scrollContainer = container.querySelector(".overflow-hidden");

    await act(async () => {
      fireEvent.mouseEnter(scrollContainer!);
      await new Promise((resolve) => setTimeout(resolve, 50));
    });

    const scrollDiv = container.querySelector(".flex") as HTMLElement;
    const initialTransform = scrollDiv?.style.transform;

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
    });

    expect(scrollDiv?.style.transform).toBe(initialTransform);
  });

  it("resumes scrolling on mouse leave", async () => {
    const { container } = render(<Achievements />);
    const scrollContainer = container.querySelector('.overflow-hidden');
    const scrollDiv = container.querySelector('.flex') as HTMLElement;
    
    // Mock scrollWidth for the scroll container
    Object.defineProperty(scrollDiv, 'scrollWidth', {
      value: 2000,
      writable: true
    });
    
    // Mock getBoundingClientRect for the scroll container
    vi.spyOn(scrollDiv, 'getBoundingClientRect').mockImplementation(mockGetBoundingClientRect);
    
    // Set initial scroll position
    scrollDiv.style.transform = 'translateX(-100px)';
    
    await act(async () => {
      fireEvent.mouseEnter(scrollContainer!);
      await new Promise(resolve => setTimeout(resolve, 50));
    });

    const initialTransform = scrollDiv.style.transform;
    
    await act(async () => {
      fireEvent.mouseLeave(scrollContainer!);
      // Wait for animation frame to update
      await new Promise(resolve => setTimeout(resolve, 50));
    });

    // Verify the transform has changed
    expect(scrollDiv.style.transform).not.toBe(initialTransform);
    // Verify it's a valid transform value (allowing for decimal numbers)
    expect(scrollDiv.style.transform).toMatch(/translateX\(-?\d+(\.\d+)?px\)/);
  });

  it("handles touch events correctly", async () => {
    const { container } = render(<Achievements />);
    const scrollDiv = container.querySelector(".flex") as HTMLElement;

    // Touch start
    await act(async () => {
      fireEvent.touchStart(scrollDiv!, {
        targetTouches: [{ clientX: 100 }],
      });
      await new Promise((resolve) => setTimeout(resolve, 50));
    });

    const initialTransform = scrollDiv?.style.transform;

    // Touch move
    await act(async () => {
      fireEvent.touchMove(scrollDiv!, {
        targetTouches: [{ clientX: 50 }],
      });
      await new Promise((resolve) => setTimeout(resolve, 50));
    });

    expect(scrollDiv?.style.transform).not.toBe(initialTransform);
  });

  it("applies correct styling to badge containers", () => {
    const { container } = render(<Achievements />);
    const badgeContainers = container.querySelectorAll("a");

    badgeContainers.forEach((container) => {
      expect(container.className).toContain("bg-[#2d3142]");
      expect(container.className).toContain("rounded-lg");
      expect(container.className).toContain("hover:scale-105");
    });
  });

  it("renders badge images with correct attributes", () => {
    const { container } = render(<Achievements badges={mockBadges} />);
    const images = container.querySelectorAll("img");

    images.forEach((img, index) => {
      const badgeIndex = index % mockBadges.length;
      expect(img.alt).toBe(mockBadges[badgeIndex].name);
      expect(img.src).toContain(mockBadges[badgeIndex].imageUrl.src);
    });
  });

  it("creates infinite scroll effect", () => {
    const { container } = render(<Achievements badges={mockBadges} />);
    const badges = container.querySelectorAll("a");
    expect(badges.length).toBe(mockBadges.length * 2);

    // Verify the badges are duplicated in order
    Array.from(badges).forEach((badge, index) => {
      const expectedIndex = index % mockBadges.length;
      const img = badge.querySelector("img");
      expect(img?.alt).toBe(mockBadges[expectedIndex].name);
    });
  });
});
