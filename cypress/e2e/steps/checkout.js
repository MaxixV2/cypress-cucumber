const { Given, When, Then, And } = require("cypress-cucumber-preprocessor/steps");
import { getTestData } from "../../support/before";
import { CartPage } from "../pages/cart.page";
import { CheckoutPage } from "../pages/checkout.page";
import { InventoryPage } from "../pages/inventory.page";


const inventoryPage = new InventoryPage;
const checkoutPage = new CheckoutPage;
const cartPage = new CartPage;
const testData = getTestData();

Given('User is logged in', () => {
    cy.login(testData.username, testData.password);
})

When('User adds item to cart', () => {
    inventoryPage.clickAddItemBtn();
    inventoryPage.clickCartBtn();
})

And('User checks out with valid data', () => {
    cartPage.clickCheckoutBtn();
    checkoutPage.getFirstNameInput().type(testData.firstName);
    checkoutPage.getLastNameInput().type(testData.lastName);
    checkoutPage.getPostalCodeInput().type(testData.postalCode);
    checkoutPage.clickContinueBtn();
    checkoutPage.clickFinishBtn();
})

Then('User should be redirected to completed checkout page', () => {
    checkoutPage.getSuccessfullCheckoutMsg().should('be.visible');
})

And('User checks out with empty first name input', () => {
    cartPage.clickCheckoutBtn();
    checkoutPage.getLastNameInput().type(testData.lastName);
    checkoutPage.getPostalCodeInput().type(testData.postalCode);
    checkoutPage.clickContinueBtn();
})

Then('User should see an empty first name input error message', () => {
    checkoutPage.getErrorMsg().should('contain', testData.emptyFirstNameError);
})

And('User checks out with empty last name input', () => {
    cartPage.clickCheckoutBtn();
    checkoutPage.getFirstNameInput().type(testData.firstName);
    checkoutPage.getPostalCodeInput().type(testData.postalCode);
    checkoutPage.clickContinueBtn();
})

Then('User should see an empty last name input error message', () => {
    checkoutPage.getErrorMsg().should('contain', testData.emptyLastNameError);
})

And('User checks out with empty postal code input', () => {
    cartPage.clickCheckoutBtn();
    checkoutPage.getFirstNameInput().type(testData.firstName);
    checkoutPage.getLastNameInput().type(testData.lastName);
    checkoutPage.clickContinueBtn();
})

Then('User should see an empty postal code input error message', () => {
    checkoutPage.getErrorMsg().should('contain', testData.emptyPostalCodeError);
})