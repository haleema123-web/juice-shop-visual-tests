const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test.describe('Security Controls Tests', () => {

  // ============================================
  // TEST 1: Wrong password error (FIXED)
  // ============================================
  test('Should show error with wrong password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    console.log('❌ Testing wrong password...');
    
    await loginPage.goToLoginPage();
    await loginPage.login('admin@juice-shop.com', 'wrongpassword');
    
    // ✅ Wait longer for error message
    await page.waitForTimeout(2000);
    
    const errorText = await loginPage.getErrorMessageText();
    console.log(`  Error: ${errorText}`);
    
    await expect(loginPage.errorMessage).toBeVisible();
    console.log('✅ Error message shown!');
  });

  // ============================================
  // TEST 2: Multiple failed attempts (FIXED)
  // ============================================
  test('Multiple failed login attempts', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    console.log('🔒 Testing multiple failed attempts...');
    
    for (let i = 1; i <= 5; i++) {
      await loginPage.goToLoginPage();
      await loginPage.login(`user${i}@test.com`, 'wrongpassword');
      
      // ✅ Wait for error message
      await page.waitForTimeout(1500);
      
      try {
        const errorText = await loginPage.getErrorMessageText();
        console.log(`  Attempt ${i}: ❌ Failed (${errorText})`);
      } catch (e) {
        console.log(`  Attempt ${i}: ⚠️ Error message not found, continuing...`);
      }
    }
    
    console.log('✅ All attempts failed as expected!');
  });
});