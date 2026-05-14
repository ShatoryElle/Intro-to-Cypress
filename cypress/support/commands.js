import LoginPage from '../helpers/Page Objects/LoginPage';

Cypress.Commands.add('login', (email, password) => {
  cy.visit('/');
  cy.contains('Sign In').click();

  LoginPage.login(email, password);
});

Cypress.Commands.overwrite('type', (originalFn, element, text, options = {}) => {
  if (options.sensitive) {
    options.log = false;

    Cypress.log({
      $el: element,
      name: 'type',
      message: '*'.repeat(text.length),
    });
  }

  return originalFn(element, text, options);
});
