const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const HomePage = require('../pages/HomePage');

test('Login and verify home page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  // 1. Login page par jao
  await loginPage.goToLoginPage();
  
  // 2. Login karo
  await loginPage.login('admin@juice-shop.com', 'admin123');
  
  // 3. Home page verify karo
  await expect(homePage.accountButton).toBeVisible();
  
  console.log('✅ Login successful!');
});