# Playwright Project

This repository contains Playwright test scripts for end-to-end browser automation.

## Getting Started

### Requirements

- Node.js 18+ or newer
- npm or yarn

### Install dependencies

```bash
npm install
```

or

```bash
yarn install
```

## Running Tests

### Run all tests

```bash
npx playwright test
```

### Run a specific test file

```bash
npx playwright test tests/example.spec.ts
```

### Run tests in headed mode

```bash
npx playwright test --headed
```

### Generate HTML report

```bash
npx playwright show-report
```

## Project Structure

- `tests/` - Test files for Playwright scenarios
- `playwright.config.ts` - Playwright configuration
- `package.json` - Project scripts and dependencies

## Common Scripts

```json
{
  "scripts": {
    "test": "npx playwright test",
    "test:headed": "npx playwright test --headed",
    "report": "npx playwright show-report",
    "install:browsers": "npx playwright install"
  }
}
```

## Notes

- Keep test selectors stable and use page locators when possible.
- Use fixtures and test hooks for common setup/teardown.
- Run `npx playwright install` after installing dependencies to ensure browsers are available.
