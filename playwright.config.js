const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,

  // ✅ FLAKINESS CONTROL (CI mein)
  retries: process.env.CI ? 2 : 0,          // CI mein 2 retries
  workers: process.env.CI ? 1 : undefined,  // CI mein 1 worker (parallel issues avoid)
  fullyParallel: false,
  forbidOnly: !!process.env.CI,

  // ✅ Reporter
  reporter: process.env.CI
    ? [['html'], ['github']]
    : 'html',

  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  // ✅ Visual Testing Settings
  expect: {
    toHaveScreenshot: {
      animations: 'disabled',      // Animations freeze
      caret: 'hide',               // Cursor blink hide
      maxDiffPixelRatio: 0.01,     // 1% tolerance
    },
  },
});