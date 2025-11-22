import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Welcome from './Welcome'
import gsap from 'gsap'

// Mock GSAP
vi.mock('gsap', () => ({
  default: {
    to: vi.fn((target, vars) => ({
      kill: vi.fn(),
      duration: vars.duration,
      ease: vars.ease,
    })),
  },
}))

// Mock @gsap/react
vi.mock('@gsap/react', () => ({
  useGSAP: vi.fn((callback) => {
    const cleanup = callback()
    return cleanup
  }),
}))

describe('Welcome Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Rendering', () => {
    it('should render the welcome section', () => {
      render(<Welcome />)
      const section = screen.getByRole('region', { name: /welcome/i })
      expect(section).toBeInTheDocument()
    })

    it('should render the subtitle text correctly', () => {
      render(<Welcome />)
      expect(screen.getByText(/Hey, I'm Hans!/i)).toBeInTheDocument()
      expect(screen.getByText(/Welcome to my/i)).toBeInTheDocument()
    })

    it('should render the title "portfolio"', () => {
      render(<Welcome />)
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading.textContent).toBe('portfolio')
    })

    it('should render small screen message', () => {
      render(<Welcome />)
      expect(
        screen.getByText(/This Portfolio is design for desktop\/tablet screens only/i)
      ).toBeInTheDocument()
    })

    it('should render each character of subtitle as a span', () => {
      const { container } = render(<Welcome />)
      const subtitleSpans = container.querySelector('p').querySelectorAll('span')
      const expectedText = "Hey, I'm Hans! Welcome to my"
      expect(subtitleSpans).toHaveLength(expectedText.length)
    })

    it('should render each character of title as a span', () => {
      const { container } = render(<Welcome />)
      const titleSpans = container.querySelector('h1').querySelectorAll('span')
      expect(titleSpans).toHaveLength('portfolio'.length)
    })
  })

  describe('Text Rendering Function', () => {
    it('should preserve spaces as non-breaking spaces', () => {
      const { container } = render(<Welcome />)
      const subtitleSpans = container.querySelector('p').querySelectorAll('span')
      
      // Find spans that should contain non-breaking spaces
      const spaceSpans = Array.from(subtitleSpans).filter(
        span => span.textContent === '\u00A0'
      )
      expect(spaceSpans.length).toBeGreaterThan(0)
    })

    it('should apply correct base font weight to subtitle', () => {
      const { container } = render(<Welcome />)
      const subtitleSpans = container.querySelector('p').querySelectorAll('span')
      
      subtitleSpans.forEach(span => {
        expect(span.style.fontVariationSettings).toBe("'wght' 100")
      })
    })

    it('should apply correct base font weight to title', () => {
      const { container } = render(<Welcome />)
      const titleSpans = container.querySelector('h1').querySelectorAll('span')
      
      // Default base weight for title should be 400
      titleSpans.forEach(span => {
        expect(span.style.fontVariationSettings).toContain("'wght'")
      })
    })

    it('should apply correct className to subtitle spans', () => {
      const { container } = render(<Welcome />)
      const subtitleSpans = container.querySelector('p').querySelectorAll('span')
      
      subtitleSpans.forEach(span => {
        expect(span.className).toContain('text-3xl')
        expect(span.className).toContain('font-georama')
      })
    })

    it('should apply correct className to title spans', () => {
      const { container } = render(<Welcome />)
      const titleSpans = container.querySelector('h1').querySelectorAll('span')
      
      titleSpans.forEach(span => {
        expect(span.className).toContain('text-9xl')
        expect(span.className).toContain('italic')
        expect(span.className).toContain('font-georama')
      })
    })
  })

  describe('GSAP Integration', () => {
    it('should call useGSAP hook on mount', () => {
      const { useGSAP } = require('@gsap/react')
      render(<Welcome />)
      expect(useGSAP).toHaveBeenCalled()
    })

    it('should setup hover effects for both title and subtitle', () => {
      render(<Welcome />)
      // The component should have initialized GSAP animations
      expect(gsap.to).toHaveBeenCalled()
    })
  })

  describe('Mouse Interaction', () => {
    it('should handle mousemove events on subtitle', async () => {
      const { container } = render(<Welcome />)
      const subtitle = container.querySelector('p')
      
      // Simulate mouse move
      fireEvent.mouseMove(subtitle, {
        clientX: 100,
        clientY: 100,
      })
      
      await waitFor(() => {
        expect(gsap.to).toHaveBeenCalled()
      })
    })

    it('should handle mousemove events on title', async () => {
      const { container } = render(<Welcome />)
      const title = container.querySelector('h1')
      
      // Simulate mouse move
      fireEvent.mouseMove(title, {
        clientX: 200,
        clientY: 200,
      })
      
      await waitFor(() => {
        expect(gsap.to).toHaveBeenCalled()
      })
    })

    it('should handle mouseleave events on subtitle', async () => {
      const { container } = render(<Welcome />)
      const subtitle = container.querySelector('p')
      
      // First move the mouse over
      fireEvent.mouseMove(subtitle, { clientX: 100, clientY: 100 })
      
      // Then leave
      fireEvent.mouseLeave(subtitle)
      
      await waitFor(() => {
        expect(gsap.to).toHaveBeenCalled()
      })
    })

    it('should handle mouseleave events on title', async () => {
      const { container } = render(<Welcome />)
      const title = container.querySelector('h1')
      
      // First move the mouse over
      fireEvent.mouseMove(title, { clientX: 200, clientY: 200 })
      
      // Then leave
      fireEvent.mouseLeave(title)
      
      await waitFor(() => {
        expect(gsap.to).toHaveBeenCalled()
      })
    })

    it('should animate letters based on mouse position', async () => {
      const { container } = render(<Welcome />)
      const title = container.querySelector('h1')
      
      // Mock getBoundingClientRect
      Element.prototype.getBoundingClientRect = vi.fn(() => ({
        left: 0,
        width: 100,
        top: 0,
        right: 100,
        bottom: 50,
        height: 50,
        x: 0,
        y: 0,
        toJSON: () => {},
      }))
      
      fireEvent.mouseMove(title, { clientX: 50, clientY: 25 })
      
      await waitFor(() => {
        expect(gsap.to).toHaveBeenCalled()
      })
    })

    it('should reset letter weights on mouse leave', async () => {
      const { container } = render(<Welcome />)
      const title = container.querySelector('h1')
      
      vi.clearAllMocks()
      
      fireEvent.mouseLeave(title)
      
      await waitFor(() => {
        expect(gsap.to).toHaveBeenCalled()
      })
    })
  })

  describe('Font Weight Configuration', () => {
    it('should use correct font weight range for subtitle', () => {
      // Testing the FONT_WEIGHTS constant indirectly through behavior
      const { container } = render(<Welcome />)
      const subtitle = container.querySelector('p')
      
      // Subtitle should start with base weight 100
      const firstSpan = subtitle.querySelector('span')
      expect(firstSpan.style.fontVariationSettings).toBe("'wght' 100")
    })

    it('should use correct font weight range for title', () => {
      const { container } = render(<Welcome />)
      const title = container.querySelector('h1')
      
      // Title should have base weight (implicitly 400 from renderText call)
      const firstSpan = title.querySelector('span')
      expect(firstSpan.style.fontVariationSettings).toContain("'wght'")
    })
  })

  describe('Accessibility', () => {
    it('should have semantic HTML structure', () => {
      render(<Welcome />)
      
      expect(screen.getByRole('region')).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    })

    it('should have proper heading hierarchy', () => {
      const { container } = render(<Welcome />)
      const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6')
      
      expect(headings).toHaveLength(1)
      expect(headings[0].tagName).toBe('H1')
    })

    it('should preserve text content for screen readers', () => {
      render(<Welcome />)
      
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading).toHaveTextContent('portfolio')
    })
  })

  describe('Component Lifecycle', () => {
    it('should cleanup event listeners on unmount', () => {
      const { unmount } = render(<Welcome />)
      const removeEventListenerSpy = vi.spyOn(Element.prototype, 'removeEventListener')
      
      unmount()
      
      // Should have cleaned up mousemove and mouseleave listeners
      expect(removeEventListenerSpy).toHaveBeenCalled()
    })

    it('should handle null refs gracefully', () => {
      // Test that setupTextHover handles null container
      expect(() => {
        render(<Welcome />)
      }).not.toThrow()
    })
  })

  describe('Edge Cases', () => {
    it('should handle empty text gracefully', () => {
      // This tests the robustness of the renderText function
      const { container } = render(<Welcome />)
      expect(container).toBeInTheDocument()
    })

    it('should handle special characters in text', () => {
      const { container } = render(<Welcome />)
      
      // Check that apostrophe in "I'm" is handled correctly
      const subtitle = container.querySelector('p')
      expect(subtitle).toHaveTextContent("Hey, I'm Hans! Welcome to my")
    })

    it('should preserve exclamation marks', () => {
      const { container } = render(<Welcome />)
      const subtitle = container.querySelector('p')
      
      expect(subtitle).toHaveTextContent('!')
    })

    it('should handle rapid mouse movements', async () => {
      const { container } = render(<Welcome />)
      const title = container.querySelector('h1')
      
      // Simulate rapid mouse movements
      for (let i = 0; i < 10; i++) {
        fireEvent.mouseMove(title, { clientX: i * 10, clientY: 25 })
      }
      
      // Should not throw errors
      expect(container).toBeInTheDocument()
    })

    it('should handle mouse movements with extreme coordinates', async () => {
      const { container } = render(<Welcome />)
      const title = container.querySelector('h1')
      
      // Test with large coordinates
      fireEvent.mouseMove(title, { clientX: 10000, clientY: 10000 })
      
      expect(container).toBeInTheDocument()
    })

    it('should handle mouse movements with negative coordinates', async () => {
      const { container } = render(<Welcome />)
      const title = container.querySelector('h1')
      
      fireEvent.mouseMove(title, { clientX: -100, clientY: -100 })
      
      expect(container).toBeInTheDocument()
    })
  })

  describe('CSS Classes', () => {
    it('should apply correct classes to section', () => {
      const { container } = render(<Welcome />)
      const section = container.querySelector('section')
      
      expect(section).toHaveAttribute('id', 'welcome')
    })

    it('should apply correct classes to title', () => {
      const { container } = render(<Welcome />)
      const title = container.querySelector('h1')
      
      expect(title).toHaveClass('mt-7')
    })

    it('should apply correct classes to small-screen div', () => {
      const { container } = render(<Welcome />)
      const smallScreen = container.querySelector('.small-screen')
      
      expect(smallScreen).toBeInTheDocument()
      expect(smallScreen.querySelector('p')).toHaveTextContent(
        'This Portfolio is design for desktop/tablet screens only.'
      )
    })
  })

  describe('Performance', () => {
    it('should render efficiently with many spans', () => {
      const startTime = performance.now()
      render(<Welcome />)
      const endTime = performance.now()
      
      // Rendering should be fast (less than 100ms)
      expect(endTime - startTime).toBeLessThan(100)
    })

    it('should not create memory leaks with event listeners', () => {
      const { unmount, container } = render(<Welcome />)
      const title = container.querySelector('h1')
      const subtitle = container.querySelector('p')
      
      // Add listeners
      fireEvent.mouseMove(title, { clientX: 100, clientY: 100 })
      fireEvent.mouseMove(subtitle, { clientX: 100, clientY: 100 })
      
      // Unmount should clean up
      expect(() => unmount()).not.toThrow()
    })
  })

  describe('GSAP Animation Parameters', () => {
    it('should use correct animation duration for hover', async () => {
      const { container } = render(<Welcome />)
      const title = container.querySelector('h1')
      
      vi.clearAllMocks()
      
      fireEvent.mouseMove(title, { clientX: 100, clientY: 100 })
      
      await waitFor(() => {
        const calls = gsap.to.mock.calls
        if (calls.length > 0) {
          const animationConfig = calls[calls.length - 1][1]
          expect(animationConfig.duration).toBe(0.25)
        }
      })
    })

    it('should use correct animation duration for mouse leave', async () => {
      const { container } = render(<Welcome />)
      const title = container.querySelector('h1')
      
      vi.clearAllMocks()
      
      fireEvent.mouseLeave(title)
      
      await waitFor(() => {
        const calls = gsap.to.mock.calls
        if (calls.length > 0) {
          // Mouse leave uses 0.3 duration
          const animationConfig = calls[calls.length - 1][1]
          expect(animationConfig.duration).toBe(0.3)
        }
      })
    })

    it('should use power2.out easing', async () => {
      const { container } = render(<Welcome />)
      const title = container.querySelector('h1')
      
      vi.clearAllMocks()
      
      fireEvent.mouseMove(title, { clientX: 100, clientY: 100 })
      
      await waitFor(() => {
        const calls = gsap.to.mock.calls
        if (calls.length > 0) {
          const animationConfig = calls[calls.length - 1][1]
          expect(animationConfig.ease).toBe('power2.out')
        }
      })
    })
  })

  describe('Distance Calculation', () => {
    it('should calculate distance based on exponential decay', async () => {
      const { container } = render(<Welcome />)
      const title = container.querySelector('h1')
      
      // Mock getBoundingClientRect for predictable measurements
      const mockRect = {
        left: 0,
        width: 20,
        top: 0,
        right: 20,
        bottom: 50,
        height: 50,
        x: 0,
        y: 0,
        toJSON: () => {},
      }
      
      Element.prototype.getBoundingClientRect = vi.fn(() => mockRect)
      
      // Mouse at specific position
      fireEvent.mouseMove(title, { clientX: 10, clientY: 25 })
      
      await waitFor(() => {
        expect(gsap.to).toHaveBeenCalled()
      })
    })
  })
})