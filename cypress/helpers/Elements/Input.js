import BaseElement from "./BaseElement";

export default class Input extends BaseElement {
  constructor(selector) {
    super(selector);
  }

  type(text) {
    this.element.clear().type(text);
  }
}