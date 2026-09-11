class HomePage {
  constructor(page) {
    this.page = page;
  }

  get accountButton() {
    return this.page.locator('#navbarAccount');
  }

  async isLoggedIn() {
    return await this.accountButton.isVisible();
  }
}

module.exports = HomePage;