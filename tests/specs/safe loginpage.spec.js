const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const HomePage = require('../pages/HomePage');

test('Login and verify home page', async ({ page }) => {
  // ✅ Test logs mein bhi password nahi dikhega
  console.log('🚀 Starting login test...');
  
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  await loginPage.goToLoginPage();
  
  // ✅ Password yahan log nahi ho raha
  await loginPage.login('admin@juice-shop.com', 'admin123');
  
  await expect(homePage.accountButton).toBeVisible();
  
  console.log('✅ Test completed successfully!');
});