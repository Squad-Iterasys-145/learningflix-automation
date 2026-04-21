export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#loginbtn');
  }

  async navigate() {
    await this.page.goto(process.env.BASE_URL);
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
  }

  async btnlogin() {
    await this.loginButton.click();
  }
}