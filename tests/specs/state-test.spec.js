const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const HomePage = require('../pages/HomePage');
const testData = require('../../fixtures/test-data');

test('Login with fixture data', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  
  // ✅ Fixtures se data lo
  const user = testData.users.admin;
  
  console.log(`🔐 Logging in as: ${user.email}`);
  
  await loginPage.goToLoginPage();
  await loginPage.login(user.email, user.password);
  
  // ✅ UI se state check
  const isLoggedIn = await homePage.isLoggedIn();
  expect(isLoggedIn).toBe(true);
  
  console.log(`✅ ${user.role} logged in successfully!`);
});