describe('ДЗ 19.1. Cypress queries', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
  });

  it('Повинен знаходити всі кнопки навігації в хедері', () => {
    cy.get('header').within(() => {
      cy.contains('Home').should('be.visible');
      cy.contains('About').should('be.visible');
      cy.contains('Contacts').should('be.visible');
      cy.get('button').contains('Guest log in').should('be.visible');
      cy.get('button').contains('Sign In').should('be.visible');
    });
  });

  it('Повинен знаходити всі посилання та соцмережі у секції контактів і футері', () => {
    cy.get('.contacts').scrollIntoView().should('be.visible');

    cy.get('.contacts').within(() => {
      cy.get('a[href*="facebook.com"]').should('be.visible');
      cy.get('a[href*="t.me"]').should('be.visible');
      cy.get('a[href*="youtube.com"]').should('be.visible');
      cy.get('a[href*="linkedin.com"]').should('be.visible');
    });

    cy.get('.contacts').within(() => {
      cy.contains('ithillel.ua').should('be.visible');
      cy.contains('support@ithillel.ua').should('be.visible');
    });
  });
});
