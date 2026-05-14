import RegistrationPage from '../helpers/Page Objects/RegistrationPage';

describe('Homework', () => {

  it('Registration + Login flow', () => {

    const email = `test${Date.now()}@mail.com`;
    const password = 'Password1';

    cy.visit('/');

    cy.contains('Sign up').click();

    RegistrationPage.typeName('John');
    RegistrationPage.typeLastName('Doe');
    RegistrationPage.typeEmail(email);
    RegistrationPage.typePassword(password);
    RegistrationPage.typeRepeatPassword(password);

    RegistrationPage.clickRegister();

    cy.contains('Garage');

cy.get('.user-nav_toggle').click();
cy.contains('Logout').should('be.visible').click();

    cy.contains('Sign In').click();

    cy.get('#signinEmail').type(email);
    cy.get('#signinPassword').type(password, { sensitive: true });
    cy.contains('Login').click();

    cy.contains('Garage');
  });

});