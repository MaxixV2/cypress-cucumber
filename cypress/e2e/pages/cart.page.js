const itemLbl = '.cart_item_label';
const backBtn = '[data-test="continue-shopping"]';
const checkoutBtn = '[data-test="checkout"]';

exports.CartPage = class CartPage {

    getItemLbl() {
        return cy.get(itemLbl);
    }

    clickRemoveBtn() {
        cy.contains('Remove').click();
    }

    clickBackBtn() {
        cy.get(backBtn).click();
    }

    clickCheckoutBtn() {
        cy.get(checkoutBtn).click();
    }
}