const firstNameInput = '[data-test="firstName"]';
const lastNameInput = '[data-test="lastName"]';
const postalCodeInput = '[data-test="postalCode"]';
const continueBtn = '[data-test="continue"]';
const finishBtn = '[data-test="finish"]';
const errorMsg = '[data-test="error"]';

exports.CheckoutPage = class CheckoutPage {

    getFirstNameInput() {
        return cy.get(firstNameInput);
    }

    getLastNameInput() {
        return cy.get(lastNameInput);
    }

    getPostalCodeInput() {
        return cy.get(postalCodeInput);
    }

    clickContinueBtn() {
        cy.get(continueBtn).click();
    }

    clickFinishBtn() {
        cy.get(finishBtn).click();
    }

    getSuccessfullCheckoutMsg() {
        return cy.contains('Thank you for your order!');
    }

    getErrorMsg() {
        return cy.get(errorMsg);
    }
}