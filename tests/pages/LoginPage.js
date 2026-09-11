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
    await this.page.goto('http://localhost:3000/#/login');
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForTimeout(1500);
  }

  // ✅ Welcome popup close karo (agar hai)
  async closeWelcomePopupIfPresent() {
    const popup = this.page.locator('mat-dialog-container');
    if (await popup.isVisible().catch(() => false)) {
      console.log('⚠️ Welcome popup detected — closing...');
      await this.page.keyboard.press('Escape');
      await this.page.waitForTimeout(1000);
    }
  }

  async enterEmail(email) {
    await this.emailInput.waitFor({ state: 'visible', timeout: 10000 });
    await this.emailInput.fill(email);
  }

  async enterPassword(password) {
    await this.passwordInput.waitFor({ state: 'visible', timeout: 10000 });
    await this.passwordInput.fill(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
    await this.page.waitForURL(url => !url.href.includes('/login'), { timeout: 15000 });
  }

  async login(email, password) {
    // ✅ Step 1: Popup close karo
    await this.closeWelcomePopupIfPresent();
    
    // ✅ Step 2: Form fill karo
    await this.enterEmail(email);
    await this.enterPassword(password);
    
    // ✅ Step 3: Login click
    await this.clickLoginButton();
  }

  async getErrorMessageText() {
    await this.errorMessage.waitFor({ state: 'visible', timeout: 5000 });
    return await this.errorMessage.textContent();
  }
}

module.exports = LoginPage;