# Testing Guide

This directory contains the test setup and utilities for the MacOS Portfolio project.

## Test Framework

- **Vitest**: Fast unit test framework for Vite projects
- **React Testing Library**: Testing utilities for React components
- **jsdom**: DOM implementation for Node.js

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode (default)
npm test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

## Test Structure

- `setup.js`: Global test setup and configuration
- Component tests are located next to their respective components
- Test files follow the naming convention: `*.test.jsx` or `*.test.js`

## Writing Tests

Tests should cover:
1. Component rendering
2. User interactions
3. Edge cases and error handling
4. Accessibility
5. Integration between components

## Test Coverage

The project aims for high test coverage across:
- Component rendering and lifecycle
- User interactions (clicks, hovers, form inputs)
- State management
- Edge cases and error boundaries
- Accessibility features