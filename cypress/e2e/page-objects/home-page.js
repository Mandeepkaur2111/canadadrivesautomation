class HomePage{
    open() {
        cy.visit('https://shop.canadadrives.ca/cars/bc');
    }

    get provinceDropdown() {
        return cy.get('.container .province-dropdown__province-menu');
    }

    get provinceSelector() {
        return cy.get('.container .province-dropdown__list > :nth-child(9)');
    }

    get filterButton() {
        return cy.get('.filter-button');
    }

    get makeModelFilter() {
        return cy.get('.v-card [data-v-1747d0aa=""][data-v-a8657188=""] > .v-expansion-panel-header');
    }

    get dodgeSelector() {
        return cy.get('.make_modelpanel > :nth-child(8) > .v-expansion-panel-header');
    }

    get grandCaravanSelector() {
        return cy.get(':nth-child(5) .v-label > :nth-child(1) .font-weight-medium');
    }

    get filterResult() {
        return cy.get('.vehicle-filters-mobile__apply > .v-btn');
    }

    get sortDropdown() {
        return cy.get('[style="display: flex; flex: 1 1 0%; align-items: center;"] .v-select__selection');
    }

    get priceSort() {
        return cy.get('.v-list-item__content');
    }

    get signInButton() {
        return cy.get('[data-testid="test_tool-bar-signIn"]');
    }

    get createAccount() {
        return cy.get('#handle-sign-in-toggle-button');
    }

    get firstName() {
        return cy.get('#create-account-first-name');
    }

    get lastName() {
        return cy.get('#create-account-last-name');
    }

    get emailId() {
        return cy.get('#create-account-email');
    }

    get password() {
        return cy.get('#create-account-password');
    }

    get createAccountButton() {
        return cy.get('#create-account-button');
    }

    get favouriteOne() {
        return cy.get(':nth-child(1) > .vehicle-card > .d-block');
    }

    get favouriteTwo() {
        return cy.get(':nth-child(5) > :nth-child(2) > .vehicle-card > .d-block');
    }

    get favouriteThree() {
        return cy.get(':nth-child(5) > :nth-child(3) > .vehicle-card > .d-block');
    }

    get favourites() {
        return cy.get('[data-testid="test_tool-bar-FavIcon"]');
    }

    get availableDodge() {
        return cy.get('.vehicle-grid > :nth-child(3) .v-card__text');
    }

    get startPurchase() {
        return cy.get('.desktop-start-purchase-column .v-btn__content');
    }

    get calculateDelivery() {
        return cy.get('[data-testid="test__vehicle-price-cards-0"] > .v-card__text');
    }

    get addressInput() {
        return cy.get('#street_address');
    }

    get deliverCost() {
        return cy.get('.delivery__cost');
    }

    get deliveryPickupButton() {
        return cy.get('.delivery-pickup__buttons .v-btn__content');
    }

    get selectWarranty() {
        return cy.get('[data-testid="test__vehicle-price-cards-1"]');
    }

    get warrantyPeriodDropdown() {
        return cy.get('.v-select__slot');
    }

    get warrantyPeriod() {
        return cy.contains('48 months');
    }

    get warrantyConfirm() {
        return cy.get('.warranty-options__save-and-confirm-btn');
    }

    get downpayment() {
        return cy.get('[data-testid="test__vehicle-price-down-payment"]');
    }
}

export default new HomePage();