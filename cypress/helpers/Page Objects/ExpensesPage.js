class ExpensesPage {
  get addExpenseButton() { 
    return cy.contains('button', 'Add an expense'); 
  }

  get expenseMileageInput() { return cy.get('#addExpenseMileage'); }
  get expenseLitersInput() { return cy.get('#addExpenseLiters'); }
  get expenseCostInput() { return cy.get('#addExpenseTotalCost'); }

  get submitExpenseButton() { 
    return cy.get('.modal-content').contains('button', 'Add'); 
  }

  addExpense(mileage, liters, cost) {
    this.addExpenseButton.click();
    this.expenseMileageInput.clear().type(mileage);
    this.expenseLitersInput.type(liters);
    this.expenseCostInput.type(cost);
    this.submitExpenseButton.click({ force: true });
  }
}

export default new ExpensesPage();