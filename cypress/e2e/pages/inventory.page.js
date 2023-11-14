const burgerMenuBtn = '.bm-burger-button';
const logoutBtn = '#logout_sidebar_link';
const twitterLink = '[href="https://twitter.com/saucelabs"]';
const facebookLink = '[href="https://www.facebook.com/saucelabs"]';
const linkedinLink = '[href="https://www.linkedin.com/company/sauce-labs/"]';
const cartBtn = '.shopping_cart_link';

exports.InventoryPage = class InventoryPage {
    clickMenuBtn() {
        cy.get(burgerMenuBtn).click();
    }

    clickLogoutBtn() {
        cy.get(logoutBtn).click();
    }

    clickAddItemBtn() {
        cy.contains('Add to cart').click();
    }

    getTwitterLink() {
        return cy.get(twitterLink);
    }

    getFacebookLink() {
        return cy.get(facebookLink);
    }

    getLinkedinLink() {
        return cy.get(linkedinLink);
    }

    clickCartBtn() {
        cy.get(cartBtn).click();
    }

    clickTwitterLink() {
        cy.origin('https://twitter.com', () => {
            cy.on('uncaught:exception', (e) => {
                if (e.message.includes('T')) {
                    return false;
                }
            });

            cy.visit('https://twitter.com/saucelabs');
        });

    }

    clickFacebookLink() {
        this.getFacebookLink().invoke('removeAttr', 'target').click();
    }

    clickLinkedinLink() {
        this.getLinkedinLink().invoke('removeAttr', 'target').click();
    }
}