import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { LoginPage } from "../pages/login.page";
import { getTestData } from "../../support/before";
import { faker } from '@faker-js/faker';

const loginPage = new LoginPage;
const testData = getTestData();
const randomUsername = faker.internet.userName();
const randomPassword = faker.internet.password();

Given('User is located on login page', () => {
    cy.visit("/");
})

When('User logins with valid username and valid password', () => {
    loginPage.getUsernameInput().type(testData.username);
    loginPage.getPasswordInput().type(testData.password);
    loginPage.clickLoginBtn();
})

Then('User should be redirected to inventory page', () => {
    cy.url().should('contain', '/inventory');
})

When('User logs in with invalid username', () => {
    loginPage.getUsernameInput().type(randomUsername);
    loginPage.getPasswordInput().type(testData.password);
    loginPage.clickLoginBtn();
})

When('User logs in with invalid password', () => {
    loginPage.getUsernameInput().type(testData.username);
    loginPage.getPasswordInput().type(randomPassword);
    loginPage.clickLoginBtn();
})

Then('User should see an invalid credentials error message', () => {
    loginPage.getErrorMsg().should('contain', testData.invalidDataError);
})

When('User logs in with empty username', () => {
    loginPage.getPasswordInput().type(testData.password);
    loginPage.clickLoginBtn();
})

When('User logs in with empty password', () => {
    loginPage.getUsernameInput().type(testData.username);
    loginPage.clickLoginBtn();
})

Then('User should see an empty username error message', () => {
    loginPage.getErrorMsg().should('contain', testData.emptyUsernameError);
})

Then('User should see an empty password error message', () => {
    loginPage.getErrorMsg().should('contain', testData.emptyPasswordError);
})