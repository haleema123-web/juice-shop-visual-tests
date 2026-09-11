const { test, expect } = require('@playwright/test');

test('Login page visual', async ({ page }) => {
  console.log('🚀 Login page visual test...');
  
  await page.goto('http://localhost:3000/#/login');
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(2000);
  
  // Welcome popup close karo
  const popup = page.locator('mat-dialog-container');
  if (await popup.isVisible().catch(() => false)) {
    await page.keyboard.press('Escape');
    await page.waitForTimeout(1000);
  }
  
  // Cookie banner close karo
  const cookieBtn = page.locator('a.cc-btn.cc-dismiss');
  if (await cookieBtn.isVisible().catch(() => false)) {
    await cookieBtn.click();
    await page.waitForTimeout(1000);
  }

  await expect(page).toHaveScreenshot('login-page.png', {
    fullPage: true,
    mask: [
      page.locator('mat-toolbar .mat-badge-content'),
    ],
    maskColor: '#FF00FF',
    maxDiffPixelRatio: 0.01,
  });
  
  console.log('✅ Login page screenshot captured!');
});