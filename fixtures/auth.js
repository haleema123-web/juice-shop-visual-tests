class AuthHelper {
  constructor(page) {
    this.page = page;
  }

  async loginAs(email, password) {
    const LoginPage = require('../tests/pages/LoginPage');
    const loginPage = new LoginPage(this.page);
    await loginPage.goToLoginPage();
    await loginPage.login(email, password);

    return {
      isLoggedIn: true,
      user: email
    };
  }

  async getCookies() {
    return await this.page.context().cookies();
  }

  async setCookies(cookies) {
    await this.page.context().addCookies(cookies);
  }
}

module.exports = AuthHelper;