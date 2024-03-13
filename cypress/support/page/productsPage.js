export class ProductsPage {
  constructor() {
    this.onlineShopButton = '[data-cy="onlineshoplink"]';
    this.searchType = '[data-cy="search-type"]';
    this.searchEnter = '[data-cy="search-bar"]';
    this.productName = '[data-cy="productName"]';
    this.productPrice = '[data-cy="productPrice"]';
    this.productImg = '[data-cy="productCard"]';
    this.buttonCancelEdit = '[data-cy="cancelEdit"]';
  }

  clickOnlineShopButton() {
    cy.get(this.onlineShopButton).click();
  }

  valSearchType() {
    cy.get(this.searchType).select("ID");
  }
  valSearchEnter(valor) {
    return cy.get(this.searchEnter).type(valor);
  }

  clickButtonEdit(valor) {
    return cy.get(`[data-cy="edit-${valor}"]`).click();
  }

  valueProductName(valor) {
    return cy
      .get(this.productName)
      .invoke("val")
      .then(function (producto) {
        expect(producto).to.be.equal(valor);
      });
  }
  valueProductPrice(valor) {
    cy.get(this.productPrice)
      .invoke("val")
      .then(function (producto) {
        expect(producto).to.be.equal(valor);
      });
  }
  valueProductImg(valor) {
    cy.get(this.productImg)
      .invoke("val")
      .then(function (producto) {
        expect(producto).to.be.equal(valor);
      })
      .wait(2000);
  }
  clickEditCancel(){
    cy.get(this.buttonCancelEdit).click()
  }
}
