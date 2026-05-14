class RegistrationPage {
  elements = {
    nameInput: () => cy.get('#signupName'),
    lastNameInput: () => cy.get('#signupLastName'),
    emailInput: () => cy.get('#signupEmail'),
    passwordInput: () => cy.get('#signupPassword'),
    repeatPasswordInput: () => cy.get('#signupRepeatPassword'),
    registerBtn: () => cy.contains('Register'),
  };

  typeName(name) {
    this.elements.nameInput().type(name);
  }

  typeLastName(lastName) {
    this.elements.lastNameInput().type(lastName);
  }

  typeEmail(email) {
    this.elements.emailInput().type(email);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password, { sensitive: true });
  }

  typeRepeatPassword(password) {
    this.elements.repeatPasswordInput().type(password, { sensitive: true });
  }

  clickRegister() {
    this.elements.registerBtn().click();
  }
}

export default new RegistrationPage();