const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  
  // ✅ CI mein flakiness control
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  fullyParallel: false,
  
  // ✅ Reporter
  reporter: process.env.CI ? [['html'], ['github']] : 'html',
  
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  expect: {
    toHaveScreenshot: {
      animations: 'disabled',
      caret: 'hide',
      maxDiffPixelRatio: 0.01,
    },
  },
});