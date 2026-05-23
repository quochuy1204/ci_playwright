# Home Page Title Verification Test Plan

## Application Overview

This test plan covers verification of the Playwright home page title. The tests ensure that the page loads with the correct title and validates title content matches expected patterns.

## Test Scenarios

### 1. Home Page Title Verification

**Seed:** `tests/seed.spec.ts`

#### 1.1. Verify home page has correct page title

**File:** `tests/home-page-title.spec.ts`

**Steps:**
  1. Navigate to the Playwright home page at https://playwright.dev/
    - expect: The page should load successfully
    - expect: The browser tab should display the page title
  2. Inspect the page title
    - expect: The page title should be exactly 'Fast and reliable end-to-end testing for modern web apps | Playwright'
  3. Verify the title contains key marketing terms
    - expect: The title should contain 'Playwright'
    - expect: The title should contain 'end-to-end testing'
    - expect: The title should contain 'web apps'

#### 1.2. Verify home page title contains 'Playwright' text

**File:** `tests/home-page-title.spec.ts`

**Steps:**
  1. Navigate to the Playwright home page
    - expect: The page should load successfully
  2. Check that the page title matches the pattern /Playwright/
    - expect: The title should contain the word 'Playwright'
    - expect: The regex match should succeed

#### 1.3. Verify main heading is visible on home page

**File:** `tests/home-page-title.spec.ts`

**Steps:**
  1. Navigate to the Playwright home page at https://playwright.dev/
    - expect: The page should load successfully
  2. Locate the main heading element
    - expect: The heading 'Playwright enables reliable web automation for testing, scripting, and AI agents.' should be visible on the page
  3. Verify the heading is a level 1 (h1) element
    - expect: The heading should be a primary heading (h1)
    - expect: The text should exactly match the main value proposition

#### 1.4. Verify page title updates remain consistent on reload

**File:** `tests/home-page-title.spec.ts`

**Steps:**
  1. Navigate to the Playwright home page
    - expect: The page should load and display the correct title
  2. Reload the page using browser refresh
    - expect: The page should reload successfully
    - expect: The page title should remain the same after reload
  3. Verify title consistency
    - expect: The title should still contain 'Playwright'
    - expect: The title should still contain 'end-to-end testing'
