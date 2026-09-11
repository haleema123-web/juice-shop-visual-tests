const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('Should show error with wrong password', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goToLoginPage();
  await loginPage.login('admin@juice-shop.com', 'wrongpassword');
  
  await expect(loginPage.errorMessage).toBeVisible();
  console.log('✅ Error message shown!');
});