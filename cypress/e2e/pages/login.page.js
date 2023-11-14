const usernameInput = '[data-test="username"]';
const passwordInput = '[data-test="password"]';
const loginBtn = '[data-test="login-button"]';
const errorMsg = '[data-test="error"]';

exports.LoginPage = class LoginPage {

    getUsernameInput() {
        return cy.get(usernameInput);
    }

    getPasswordInput() {
        return cy.get(passwordInput);
    }

    getLoginBtn() {
        return cy.get(loginBtn);
    }

    clickLoginBtn() {
        cy.get(loginBtn).click();
    }

    getErrorMsg() {
        return cy.get(errorMsg);
    }
}