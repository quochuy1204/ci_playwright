# Page Title Test Plan

## Application Overview

Comprehensive test plan to verify the web application's page title behavior across static loads, navigation, dynamic updates, localization, and edge cases.

## Test Scenarios

### 1. Page Title Verification

**Seed:** `tests/seed.spec.ts`

#### 1.1. Home page title — Static (happy path)

**File:** `tests/page-title/static-home.spec.ts`

**Steps:**
  1. Start with a fresh browser session. Navigate to '/' and wait for full load.
    - expect: Page loads successfully (HTTP 200).
    - expect: The document.title equals 'Expected Home Title'.
    - expect: A <title> element exists in <head> and its text equals document.title.

#### 1.2. Title updates on navigation (SPA)

**File:** `tests/page-title/navigation.spec.ts`

**Steps:**
  1. Start fresh, navigate to '/'. Click the UI link to 'About' (or programmatically navigate to '/about').
    - expect: Navigation completes and relevant view is visible.
    - expect: document.title changes to 'About - Expected Home Title' within 2 seconds.
    - expect: The <title> element text matches document.title after navigation.

#### 1.3. Dynamic title set after async load

**File:** `tests/page-title/dynamic.spec.ts`

**Steps:**
  1. Start fresh, navigate to '/async-title'. Wait for network idle and for the async content marker (e.g., '#content') to appear.
    - expect: document.title updates to 'Data Loaded - Expected Home Title' within 5 seconds of page load.
    - expect: No JavaScript errors relevant to title setting are present in the console.

#### 1.4. Missing / empty title handling

**File:** `tests/page-title/empty.spec.ts`

**Steps:**
  1. Start fresh, navigate to '/no-title' (page variant intentionally omits or clears the <title> element).
    - expect: document.title is an empty string.
    - expect: Either no <title> element exists in <head>, or a <title> element exists but its text is empty.
    - expect: No uncaught errors occur during load related to title handling.

#### 1.5. Long title preservation

**File:** `tests/page-title/long.spec.ts`

**Steps:**
  1. Start fresh, navigate to '/long-title' where the title contains a very long string (e.g., 400 characters).
    - expect: document.title equals the full 400-character string (exact match).
    - expect: The DOM <title> element text contains the full string (no truncation in DOM).

#### 1.6. Special characters and localization (i18n)

**File:** `tests/page-title/i18n.spec.ts`

**Steps:**
  1. Run separate fresh sessions for language variants: '/?lang=ja', '/?lang=ar', and '/?lang=emoji'.
    - expect: For each locale, document.title equals the expected localized string.
    - expect: Titles preserve non-Latin scripts, RTL content, and emoji (exact match).
    - expect: No encoding or rendering errors occur in the title text.

#### 1.7. Title uniqueness across routes (accessibility)

**File:** `tests/page-title/unique.spec.ts`

**Steps:**
  1. Start fresh, visit '/' and capture title. Then navigate to '/about' and capture title.
    - expect: Each visited route's title is non-empty.
    - expect: Titles for different routes are not identical (helps orientation for assistive tech).

#### 1.8. Server-side rendered (SSR) title present in HTML

**File:** `tests/page-title/ssr.spec.ts`

**Steps:**
  1. Perform an HTTP GET for '/' (no JS execution) and parse the returned HTML to extract the <title>. Then load the page in the browser and compare.
    - expect: The server response HTML contains a <title> element with the expected text.
    - expect: After client load, document.title equals the server-provided title unless intentionally changed client-side.
