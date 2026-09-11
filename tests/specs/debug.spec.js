const { test, expect } = require('@playwright/test');

test('debug login', async ({ page }) => {
  await page.goto('http://localhost:3000/#/login');
  await page.waitForTimeout(2000);
  
  console.log('=================================');
  console.log('URL before login:', page.url());
  
  // Fill karo
  await page.locator('#email').fill('admin@juice-sh.op');
  await page.locator('#password').fill('admin123');
  
  // Check karo ke values gayi hain
  const emailValue = await page.locator('#email').inputValue();
  const passwordValue = await page.locator('#password').inputValue();
  console.log('Email value:', emailValue);
  console.log('Password length:', passwordValue.length);
  
  // Login click karo
  await page.locator('#loginButton').click();
  await page.waitForTimeout(5000);
  
  console.log('URL after login:', page.url());
  console.log('=================================');
  
  // Page ka kuch text dekho
  const bodyText = await page.locator('body').innerText();
  console.log('Page text (first 300 chars):');
  console.log(bodyText.substring(0, 300));
  console.log('=================================');
});