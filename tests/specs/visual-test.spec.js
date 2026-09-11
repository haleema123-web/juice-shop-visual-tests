const { test, expect } = require('@playwright/test');

test('Visual check - Login button', async ({ page }) => {
  // 1. Login page par jao
  await page.goto('http://localhost:3000/#/login');
  
  // 2. Login button dhoondho
  const button = page.locator('#loginButton');
  
  // 3. Button visible hai?
  await expect(button).toBeVisible({ timeout: 10000 });
  console.log('✅ Login button is visible!');
  
  // 4. Button ka color check karo
  const color = await button.evaluate(el => 
    getComputedStyle(el).backgroundColor
  );
  console.log(`📊 Button color: ${color}`);
  
  // 5. Button position check karo
  const box = await button.boundingBox();
  console.log(`📊 Button position: x=${box.x}, y=${box.y}`);
  
  console.log('✅ Visual check complete!');
});