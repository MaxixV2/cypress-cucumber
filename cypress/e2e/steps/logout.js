const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");
const { LoginPage } = require("../pages/login.page");
import { getTestData } from "../../support/before";
import { InventoryPage } from "../pages/inventory.page";


const loginPage = new LoginPage;
const inventoryPage = new InventoryPage;
const testData = getTestData();

Given('User is logged in', () => {
    cy.login(testData.username, testData.password);
})

When('User logs out', () => {
    inventoryPage.clickMenuBtn();
    inventoryPage.clickLogoutBtn();
})

Then('User should be redirected to login page', () => {
    loginPage.getLoginBtn().should('be.visible');
})