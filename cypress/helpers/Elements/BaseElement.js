export default class BaseElement {
  constructor(selector, text) {
    this.selector = selector;
    this.text = text;
  }

  get element() {
    return this.text 
      ? cy.contains(this.selector, this.text) 
      : cy.get(this.selector);
  }

  click() {
    this.element.click();
  }

  checkText(expectedText) {
    this.element.should("have.text", expectedText);
  }

  isVisible() {
    this.element.should("be.visible");
  }
}