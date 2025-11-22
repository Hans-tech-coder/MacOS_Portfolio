import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

// Mock the components
vi.mock('#components', () => ({
  Navbar: () => <nav data-testid="navbar">Navbar</nav>,
  Welcome: () => <section data-testid="welcome">Welcome</section>,
}))

describe('App Component', () => {
  describe('Rendering', () => {
    it('should render without crashing', () => {
      expect(() => render(<App />)).not.toThrow()
    })

    it('should render main element', () => {
      const { container } = render(<App />)
      const main = container.querySelector('main')
      expect(main).toBeInTheDocument()
    })

    it('should render Navbar component', () => {
      render(<App />)
      expect(screen.getByTestId('navbar')).toBeInTheDocument()
    })

    it('should render Welcome component', () => {
      render(<App />)
      expect(screen.getByTestId('welcome')).toBeInTheDocument()
    })

    it('should render both Navbar and Welcome components', () => {
      render(<App />)
      expect(screen.getByTestId('navbar')).toBeInTheDocument()
      expect(screen.getByTestId('welcome')).toBeInTheDocument()
    })
  })

  describe('Component Order', () => {
    it('should render Navbar before Welcome', () => {
      const { container } = render(<App />)
      const main = container.querySelector('main')
      const children = Array.from(main.children)
      
      expect(children[0]).toHaveAttribute('data-testid', 'navbar')
      expect(children[1]).toHaveAttribute('data-testid', 'welcome')
    })
  })

  describe('Structure', () => {
    it('should have exactly one main element', () => {
      const { container } = render(<App />)
      const mains = container.querySelectorAll('main')
      expect(mains).toHaveLength(1)
    })

    it('should have two direct children in main', () => {
      const { container } = render(<App />)
      const main = container.querySelector('main')
      expect(main.children).toHaveLength(2)
    })
  })

  describe('Accessibility', () => {
    it('should use semantic HTML with main element', () => {
      const { container } = render(<App />)
      expect(container.querySelector('main')).toBeInTheDocument()
    })

    it('should provide proper document structure', () => {
      const { container } = render(<App />)
      const main = container.querySelector('main')
      
      // Main should be at root level
      expect(main.parentElement).toBe(container.firstElementChild)
    })
  })

  describe('Integration', () => {
    it('should properly integrate Navbar and Welcome components', () => {
      render(<App />)
      
      // Both components should be present
      const navbar = screen.getByTestId('navbar')
      const welcome = screen.getByTestId('welcome')
      
      expect(navbar).toBeInTheDocument()
      expect(welcome).toBeInTheDocument()
    })

    it('should render children in correct DOM hierarchy', () => {
      const { container } = render(<App />)
      const main = container.querySelector('main')
      
      expect(main.querySelector('[data-testid="navbar"]')).toBeInTheDocument()
      expect(main.querySelector('[data-testid="welcome"]')).toBeInTheDocument()
    })
  })

  describe('Edge Cases', () => {
    it('should handle multiple renders', () => {
      const { rerender } = render(<App />)
      
      expect(() => {
        rerender(<App />)
        rerender(<App />)
      }).not.toThrow()
    })

    it('should maintain component structure after rerender', () => {
      const { rerender } = render(<App />)
      
      rerender(<App />)
      
      expect(screen.getByTestId('navbar')).toBeInTheDocument()
      expect(screen.getByTestId('welcome')).toBeInTheDocument()
    })
  })

  describe('Component Exports', () => {
    it('should export App as default', () => {
      expect(App).toBeDefined()
      expect(typeof App).toBe('function')
    })

    it('should be a valid React component', () => {
      expect(() => render(<App />)).not.toThrow()
    })
  })
})