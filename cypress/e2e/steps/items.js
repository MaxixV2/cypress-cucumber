const { Given, When, Then, And } = require("cypress-cucumber-preprocessor/steps");
import { getTestData } from "../../support/before";
import { CartPage } from "../pages/cart.page";
import { InventoryPage } from "../pages/inventory.page";


const inventoryPage = new InventoryPage;
const cartPage = new CartPage;
const testData = getTestData();

Given('User is logged in', () => {
    cy.login(testData.username, testData.password);
})

When('User adds item to cart', () => {
    inventoryPage.clickAddItemBtn();
    inventoryPage.clickCartBtn();
})

Then('User should see item in cart', () => {
    cartPage.getItemLbl().should('be.visible');
})

And('User removes item from cart', () => {
    cartPage.clickRemoveBtn();
    cartPage.clickBackBtn();
})

Then('User should see no Remove buttons', () => {
    cy.contains('Remove').should('not.exist');
})