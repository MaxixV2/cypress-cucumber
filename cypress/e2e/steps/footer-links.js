const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");
import { getTestData } from "../../support/before";
import { InventoryPage } from "../pages/inventory.page";

const inventoryPage = new InventoryPage;
const testData = getTestData();

Given('User is logged in', () => {
    cy.login(testData.username, testData.password);
})

When('User clicks Twitter footer link', () => {
    Cypress.on('fail', (error) => {
        if (!error.message.includes('DOM')) {
            throw error;
        }
    })
    inventoryPage.getTwitterLink().scrollIntoView();
    inventoryPage.clickTwitterLink();
})

Then('User should be redirected to saucedemo page on Twitter', () => {
    cy.url().should('contain', 'twitter.com/saucelabs');
})

When('User click Facebook footer link', () => {
    Cypress.on('fail', (error) => {
        if (!error.message.includes('DOM')) {
            throw error;
        }
    })
    inventoryPage.getFacebookLink().scrollIntoView();
    inventoryPage.clickFacebookLink();
})

Then('User should be redirected to saucedemo page on Facebook', () => {
    cy.url().should('contain', 'facebook.com/saucelabs');
})

When('User click Linkedin footer link', () => {
    Cypress.on('fail', (error) => {
        if (!error.message.includes('DOM')) {
            throw error;
        }
    })
    inventoryPage.getLinkedinLink().scrollIntoView();
    inventoryPage.clickLinkedinLink();
})

Then('User should be redirected to saucedemo page on Linkedin', () => {
    cy.url().should('contain', 'linkedin.com/company/sauce-labs');
})