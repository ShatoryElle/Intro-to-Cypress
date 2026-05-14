import BaseElement from "../Elements/BaseElement";

export default class InventoryPage {

  cardItem(itemName) {
    return new BaseElement(".inventory_item", itemName);
  }

  get title() {
    return new BaseElement(".title");
  }
}