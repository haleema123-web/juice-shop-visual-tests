const { test, expect } = require('@playwright/test');

test('tampered login page — simulate attack', async ({ page }) => {
  await page.goto('http://localhost:3000/#/login');
  await page.waitForTimeout(2000);
  await page.keyboard.press('Escape');
  await page.waitForTimeout(1000);

  // ✅ Attack simulate karo — email field ke upar fake text add karo
  await page.evaluate(() => {
    const fakeOverlay = document.createElement('div');
    fakeOverlay.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: red;
      color: white;
      padding: 20px;
      font-size: 24px;
      z-index: 9999;
    `;
    fakeOverlay.textContent = '⚠️ FAKE FORM - Enter your password here';
    document.body.appendChild(fakeOverlay);
  });

  // Screenshot — yeh baseline se different hoga
  await expect(page).toHaveScreenshot('login-page-tampered.png');
});