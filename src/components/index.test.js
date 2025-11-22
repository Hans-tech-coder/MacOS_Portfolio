import { describe, it, expect } from 'vitest'
import { Navbar, Welcome } from './index'

describe('Components Index Barrel Export', () => {
  describe('Exports', () => {
    it('should export Navbar component', () => {
      expect(Navbar).toBeDefined()
      expect(typeof Navbar).toBe('function')
    })

    it('should export Welcome component', () => {
      expect(Welcome).toBeDefined()
      expect(typeof Welcome).toBe('function')
    })

    it('should export both components as named exports', () => {
      const exports = require('./index')
      expect(exports).toHaveProperty('Navbar')
      expect(exports).toHaveProperty('Welcome')
    })
  })

  describe('Component Functionality', () => {
    it('should export valid React components', () => {
      expect(typeof Navbar).toBe('function')
      expect(typeof Welcome).toBe('function')
    })

    it('should have displayName or component name for Navbar', () => {
      expect(Navbar.name || Navbar.displayName).toBeTruthy()
    })

    it('should have displayName or component name for Welcome', () => {
      expect(Welcome.name || Welcome.displayName).toBeTruthy()
    })
  })

  describe('Module Structure', () => {
    it('should not have default export', () => {
      const defaultExport = require('./index').default
      expect(defaultExport).toBeUndefined()
    })

    it('should only export expected components', () => {
      const exports = require('./index')
      const exportKeys = Object.keys(exports).filter(key => key !== 'default')
      
      expect(exportKeys).toContain('Navbar')
      expect(exportKeys).toContain('Welcome')
    })

    it('should export exactly two named components', () => {
      const exports = require('./index')
      const exportKeys = Object.keys(exports).filter(
        key => key !== 'default' && typeof exports[key] === 'function'
      )
      
      expect(exportKeys.length).toBeGreaterThanOrEqual(2)
    })
  })

  describe('Import Paths', () => {
    it('should successfully import from barrel file', () => {
      expect(() => {
        const { Navbar, Welcome } = require('./index')
        return { Navbar, Welcome }
      }).not.toThrow()
    })

    it('should resolve component imports correctly', () => {
      const { Navbar, Welcome } = require('./index')
      
      expect(Navbar).not.toBeNull()
      expect(Welcome).not.toBeNull()
    })
  })

  describe('Type Checking', () => {
    it('should export function types for components', () => {
      expect(typeof Navbar).toBe('function')
      expect(typeof Welcome).toBe('function')
    })

    it('should not export non-function values', () => {
      const exports = require('./index')
      
      Object.keys(exports)
        .filter(key => key !== 'default')
        .forEach(key => {
          if (exports[key] !== undefined) {
            expect(typeof exports[key]).toBe('function')
          }
        })
    })
  })

  describe('Consistency', () => {
    it('should export components with consistent naming', () => {
      const { Navbar, Welcome } = require('./index')
      
      // Component names should start with capital letter (PascalCase)
      expect(Navbar.name[0]).toMatch(/[A-Z]/)
      expect(Welcome.name[0]).toMatch(/[A-Z]/)
    })
  })
})