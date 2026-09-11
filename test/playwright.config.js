module.exports = {
  testDir: './tests/specs',
  timeout: 30000,
  use: {
    headless: false,  // ✅ Browser dikhega
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
};