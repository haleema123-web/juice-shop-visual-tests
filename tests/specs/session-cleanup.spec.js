const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const HomePage = require('../pages/HomePage');

test.describe('Session Cleanup Tests', () => {

  // ✅ Har test se pehle fresh page
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.clearSession();
    await loginPage.goToLoginPage();
  });

  // ============================================
  // TEST 1: Admin Login (FIXED)
  // ============================================
  test('Admin login should work', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    
    console.log('🔐 Admin login test...');
    
    await loginPage.goToLoginPage();
    await loginPage.login('admin@juice-shop.com', 'admin123');
    
    const isLoggedIn = await homePage.isLoggedIn();
    expect(isLoggedIn).toBe(true);
    console.log('✅ Admin login successful!');
  });

  // ============================================
  // TEST 2: User Login (FIXED)
  // ============================================
  test('Standard user login should work', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    
    console.log('👤 User login test...');
    
    await loginPage.goToLoginPage();
    await loginPage.login('user@juice-shop.com', 'user123');
    
    const isLoggedIn = await homePage.isLoggedIn();
    expect(isLoggedIn).toBe(true);
    console.log('✅ User login successful!');
  });

  // ============================================
  // TEST 3: Multiple Users (FIXED)
  // ============================================
  test('Should login with different users', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    
    console.log('🔄 Testing multiple users...');
    
    // Admin login
    await loginPage.goToLoginPage();
    await loginPage.login('admin@juice-shop.com', 'admin123');
    expect(await homePage.isLoggedIn()).toBe(true);
    console.log('  ✅ Admin logged in');
    
    // Clear session
    await loginPage.clearSession();
    
    // User login
    await loginPage.goToLoginPage();
    await loginPage.login('user@juice-shop.com', 'user123');
    expect(await homePage.isLoggedIn()).toBe(true);
    console.log('  ✅ User logged in');
    
    console.log('✅ Multiple users test passed!');
  });
});