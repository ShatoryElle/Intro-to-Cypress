class LoginPage {
  elements = {
    emailInput: () => cy.get('#signinEmail'),
    passwordInput: () => cy.get('#signinPassword'),
    loginBtn: () => cy.contains('Login'),
  };

  login(email, password) {
    this.elements.emailInput().type(email);
    this.elements.passwordInput().type(password, { sensitive: true });
    this.elements.loginBtn().click();
  }
}

export default new LoginPage();
``