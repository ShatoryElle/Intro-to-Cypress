class GaragePage {
  get addCarButton() { return cy.get('button').contains('Add car'); }
  get carBrandSelect() { return cy.get('#addCarBrand'); }
  get carModelSelect() { return cy.get('#addCarModel'); }
  get carMileageInput() { return cy.get('#addCarMileage'); }
  get submitAddCarButton() { return cy.get('.modal-content').contains('button', 'Add'); }

  addCar(brand, model, mileage) {
    this.addCarButton.click({ force: true });
    this.carBrandSelect.select(brand);
    this.carModelSelect.select(model);
    this.carMileageInput.type(mileage);
    this.submitAddCarButton.click({ force: true });
  }
}
export default new GaragePage();