import GaragePage from '../helpers/Page Objects/GaragePage';
import ExpensesPage from '../helpers/Page Objects/ExpensesPage';

describe('Homework API + UI', () => {

  it('Login + Garage + API + Expenses flow', () => {
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

    cy.intercept('POST', '/api/cars').as('createCar');

    GaragePage.addCar('BMW', 'X5', '10000');

    cy.wait('@createCar').then((interception) => {
      expect(interception.response.statusCode).to.eq(201);

      const carId = interception.response.body.data.id;
      cy.wrap(carId).as('carId');
    });

    cy.get('.car-item').should('be.visible');

    cy.get('@carId').then((carId) => {
      cy.request('/api/cars').then((response) => {
        expect(response.status).to.eq(200);

        const ids = response.body.data.map(car => car.id);
        expect(ids).to.include(carId);
      });
    });

    cy.get('@carId').then((carId) => {
      cy.request({
        method: 'POST',
        url: '/api/expenses',
        body: {
          carId: carId,
          mileage: 11000,
          liters: 20,
          totalCost: 1000,
          reportedAt: new Date().toISOString()
        }
      }).then((response) => {
        expect([200, 201]).to.include(response.status);
      });
    });

    cy.contains('a', 'Fuel expenses').click();

    cy.contains('11000').should('exist');
    cy.contains('1000').should('exist');
  });

});
