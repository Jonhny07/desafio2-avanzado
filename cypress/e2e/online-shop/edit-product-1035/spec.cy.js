const directorioName = __dirname.replaceAll("\\", "/");

const module = directorioName.split(/[/]/)[2];
const scenarioName = directorioName
  .slice(directorioName.lastIndexOf("/") + 1)
  .split("-")
  .slice(0, -1)
  .join("-");
const testCaseId = directorioName.split(/[-]/).pop();

import { ProductsPage, productsPage } from "../../../support/page/productsPage";
describe(`${scenarioName} - ${module}`, () => {
  const productsPage = new ProductsPage();
  before(() => {
    cy.login(Cypress.env().usuario, Cypress.env().password);
    cy.visit("");
  });
  it("Deberia permitir al usuario editar un producto", () => {
    cy.fixture(`${module}/${scenarioName}-${testCaseId}/data`).then((data) => {
      cy.eliminarProducto(data.product.id);
      cy.crearProducto(data.product);
      cy.editarProducto(data.product.id, data.product2);

      productsPage.clickOnlineShopButton();
      productsPage.valSearchType();
      productsPage.valSearchEnter(`${data.product.id} {enter}`).wait(2000);

      productsPage.clickButtonEdit(data.product.id);

      productsPage.valueProductName(data.product2.name);

      productsPage.valueProductPrice(data.product2.price);

      productsPage.valueProductImg(data.product2.img);

      productsPage.clickEditCancel();
    });
  });
});
