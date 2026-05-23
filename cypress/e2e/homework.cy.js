import GaragePage from '../helpers/Page Objects/GaragePage';
import ExpensesPage from '../helpers/Page Objects/ExpensesPage';

describe('Homework', () => {

  it('Login + Garage + Expenses flow', () => {
    const email = Cypress.env("userEmail");
    const password = Cypress.env("password");

    cy.visit('/', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto'
      }
    });

    cy.contains('button', 'Sign In').click();
    cy.get('#signinEmail').type(email);
    cy.get('#signinPassword').type(password, { sensitive: true });
    cy.contains('button', 'Login').click();
    cy.contains('Garage', { timeout: 10000 });
    GaragePage.addCar('BMW', 'X5', '10000');
    cy.get('.car-item').should('be.visible');
    cy.contains('a', 'Fuel expenses').click();
    ExpensesPage.addExpense('10500', '50', '2500');
    cy.get('.table').should('contain', '10500');
  });

});
