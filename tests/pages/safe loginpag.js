class LoginPage {
  constructor(page) {
    this.page = page;
  }

  // ============================================
  // 🔹 LOCATORS
  // ============================================
  get emailInput() {
    return this.page.locator('#email');
  }

  get passwordInput() {
    return this.page.locator('#password');
  }

  get loginButton() {
    return this.page.locator('#loginButton');
  }

  get errorMessage() {
    return this.page.locator('.error:visible');
  }

  // ============================================
  // 🔹 ACTIONS
  // ============================================

  async goToLoginPage() {
    console.log('🔹 Navigating to login page...');
    await this.page.goto('http://localhost:3000/#/login');
  }

  async enterEmail(email) {
    // ✅ Sirf email fill karo, log mat karo
    await this.emailInput.fill(email);
  }

  async enterPassword(password) {
    // ✅ Sirf password fill karo, log mat karo
    await this.passwordInput.fill(password);
  }

  async clickLoginButton() {
    console.log('🔐 Submitting login form...');
    await this.loginButton.click({ force: true });
    await this.page.waitForLoadState('networkidle');
    console.log('✅ Login form submitted');
  }

  // ✅ Combined login method - No password in logs!
  async login(email, password) {
    console.log('🔐 Attempting login...');
    
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickLoginButton();
    
    console.log('✅ Login attempt completed');
  }

  async getErrorMessageText() {
    const error = await this.errorMessage.textContent();
    console.log('❌ Error message:', error);
    return error;
  }
}

module.exports = LoginPage;