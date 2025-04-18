import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, fireEvent, act } from '@testing-library/react';
import Navbar from '../components/Navbar';

// Mock next/navigation
const mockPathname = vi.fn();
vi.mock('next/navigation', () => ({
  usePathname: () => mockPathname()
}));

// Mock scrollIntoView
Element.prototype.scrollIntoView = vi.fn();

describe('Navbar', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    vi.clearAllMocks();
    mockPathname.mockReturnValue('/'); // Default to home page
    
    // Reset window scroll position
    global.window.scrollY = 0;
    
    // Mock getElementById for scroll behavior
    document.getElementById = vi.fn(() => ({
      scrollIntoView: vi.fn()
    })) as unknown as (elementId: string) => HTMLElement | null;
  });

  afterEach(() => {
    // Clean up after each test
    vi.clearAllMocks();
  });

  it('renders basic navigation elements', () => {
    const { container } = render(<Navbar />);
    
    const nav = container.querySelector('nav');
    expect(nav).toBeTruthy();
    expect(nav?.className).toContain('bg-[#2d3142]');
    expect(nav?.className).toContain('rounded-b-3xl');
    
    const homeButton = container.querySelector('button');
    expect(homeButton?.textContent).toBe('Home');
  });

  it('shows all navigation buttons on home page', () => {
    mockPathname.mockReturnValue('/');
    const { container } = render(<Navbar />);
    
    const buttons = container.querySelectorAll('button');
    expect(buttons.length).toBe(4); // Home, Brag, Projects, Contact
    
    const buttonTexts = Array.from(buttons).map(button => button.textContent);
    expect(buttonTexts).toEqual(['Home', 'Brag', 'Projects', 'Contact']);
  });

  it('shows only home button on non-home pages', () => {
    mockPathname.mockReturnValue('/some-other-page');
    const { container } = render(<Navbar />);
    
    const buttons = container.querySelectorAll('button');
    expect(buttons.length).toBe(1); // Only Home
    expect(buttons[0].textContent).toBe('Home');
  });

  it('handles scroll behavior correctly', async () => {
    const { container } = render(<Navbar />);
    const nav = container.querySelector('nav');

    // Initial state
    expect(nav?.className).not.toContain('-translate-y-full');

    // Simulate scrolling down
    await act(async () => {
      global.window.scrollY = 100;
      fireEvent.scroll(window);
      // Small delay to allow state update
      await new Promise(resolve => setTimeout(resolve, 50));
    });
    
    expect(nav?.className).toContain('-translate-y-full');

    // Simulate scrolling up
    await act(async () => {
      global.window.scrollY = 50;
      fireEvent.scroll(window);
      // Small delay to allow state update
      await new Promise(resolve => setTimeout(resolve, 50));
    });
    
    expect(nav?.className).not.toContain('-translate-y-full');
  });

  it('handles section navigation on home page', () => {
    mockPathname.mockReturnValue('/');
    const { container } = render(<Navbar />);
    
    const buttons = container.querySelectorAll('button');
    
    // Click each button and verify scrollIntoView is called
    buttons.forEach((button) => {
      fireEvent.click(button);
      expect(document.getElementById).toHaveBeenCalled();
    });
  });

  it('handles section navigation on non-home pages', () => {
    mockPathname.mockReturnValue('/some-other-page');

    // Mock window.location
    const originalLocation = { ...window.location };
    Object.defineProperty(window, 'location', {
      value: { ...originalLocation, href: '' },
      writable: true
    });
    
    const { container } = render(<Navbar />);
    
    const homeButton = container.querySelector('button');
    fireEvent.click(homeButton!);
    
    // Verify navigation attempt
    expect(window.location.href).toBe('/');

    // Restore original location
    Object.defineProperty(window, 'location', {
      value: originalLocation,
      writable: true
    });
  });

  it('applies correct styling to buttons', () => {
    const { container } = render(<Navbar />);
    
    const buttons = container.querySelectorAll('button');
    buttons.forEach(button => {
      expect(button.className).toContain('text-[#d8e2dc]');
      expect(button.className).toContain('hover:text-white');
      expect(button.className).toContain('transition-colors');
      expect(button.className).toContain('text-2xl');
    });
  });

  it('maintains navbar visibility when near top of page', async () => {
    const { container } = render(<Navbar />);
    const nav = container.querySelector('nav');

    await act(async () => {
      global.window.scrollY = 5;
      fireEvent.scroll(window);
      await new Promise(resolve => setTimeout(resolve, 50));
    });
    
    expect(nav?.className).not.toContain('-translate-y-full');
  });

  it('handles small scroll movements correctly', async () => {
    const { container } = render(<Navbar />);
    const nav = container.querySelector('nav');

    await act(async () => {
      global.window.scrollY = 3;
      fireEvent.scroll(window);
      await new Promise(resolve => setTimeout(resolve, 50));
    });
    
    expect(nav?.className).not.toContain('-translate-y-full');
  });
}); 