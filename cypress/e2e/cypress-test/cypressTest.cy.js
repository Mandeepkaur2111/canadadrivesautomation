/// <reference types="cypress" />
//import '@testing-library/cypress/add-commands'
import homePage from '../page-objects/home-page'

describe('Scenario for purchasing a vehicle', () => {
  it('Scenario for purchasing a vehicle.spec', () => {
    const randomNumber = () => Cypress._.random(0, 1e6)
    const id = randomNumber()
    
    //More wait times added only for representation and better visibility of steps.

    //step 1 visit 'https://shop.canadadrives.ca/cars/bc'
    homePage.open()

    //step 2 Select Ontario Province
    /* Not able to use select command for dropdown handling because there are no 'options' and 'values' in the html
    in either of the 2 dropdowns for selecting province */
    homePage.provinceDropdown.should('contain', 'BC').click();
    cy.wait(2000)
    homePage.provinceSelector.filter(':contains("Ontario")').click() //filter option used as per requirement
    cy.wait(2000)
    
    //step 3 Filter Dodge - Grand Caravan vehicles using Make/Model filter
    homePage.filterButton.click();
    cy.wait(2000)
    //cy.get('.vehicle-filters-mobile .vehicle-filters').filter(':contains("Make & Model")').click();
    /* 
    filter options do not work with this sections as any filter opens the color tab.
    */
    homePage.makeModelFilter.should('contain','Make & Model').click();
    cy.wait(2000)
    homePage.dodgeSelector.should('contain', 'Dodge').click();
    cy.wait(2000)
    homePage.grandCaravanSelector.should('contain', 'Grand Caravan').click();
    cy.wait(2000)
    homePage.filterResult.should('contain', 'Show Results').click();
    cy.wait(2000)

    //step 4 Sort price from Low to High
    homePage.sortDropdown.should('contain', 'Featured').click();
    cy.wait(2000)
    homePage.priceSort.contains('Price: Low to High').click();
    cy.wait(2000)

    //step 5.1 Signup for an account 
    homePage.signInButton.should('contain', 'Sign In').click();
    cy.wait(2000)
    homePage.createAccount.should('contain', 'Create Account').click();
    cy.wait(2000)
    homePage.firstName.type('MyFirstName');
    cy.wait(1000);
    homePage.lastName.type('MyLastName');
    cy.wait(1000);
    homePage.emailId.type(`myemailaccount${id}@gmail.com`);
    cy.wait(1000);
    homePage.password.type('myPassword@123');
    cy.wait(1000);
    homePage.createAccountButton.should('contain', 'Create Account').click();
    cy.wait(5000)

    //step 5.2 Favourite 3 Dodge - Grand Caravan vehicles
    homePage.favouriteOne.click();
    cy.wait(1000);
    homePage.favouriteTwo.click();
    cy.wait(1000);
    homePage.favouriteThree.click();
    cy.wait(3000);

    //step 6 Pick an available Dodge - Grand Caravan vehicle
    homePage.favourites.click();
    homePage.availableDodge.click();
    cy.wait(2000);

    //step 7 Click on Get Started
    homePage.startPurchase.should('contain', 'Start Purchase').click();
    cy.wait(2000);

    //step 8 In Calculate delivery, Enter Toronto Address
    homePage.calculateDelivery.should('contain', 'Delivery or Pick Up').click();
    cy.wait(1000);
    homePage.addressInput.type('288').wait(2000).type(' Bremner').wait(2000).type(' Blvd').wait(1000).type('{enter}')
    /* Auto generating address show incorrect addresses in automation. 
    So was forced to add waits in between 288 Bremner Blvd */
    cy.wait(5000);
    homePage.deliverCost.should('contain', '$0')
    cy.wait(1000)
    homePage.deliveryPickupButton.should('contain', 'Save and Confirm').click();
    cy.wait(2000);

    //step 9 Select 48 Months warranty
    homePage.selectWarranty.should('contain', 'Select Warranty').click();
    cy.wait(2000);
    homePage.warrantyPeriodDropdown.click();
    cy.wait(1000)
    homePage.warrantyPeriod.click();
    cy.wait(1000)
    homePage.warrantyConfirm.should('contain', 'Save and Confirm').click();
    cy.wait(2000);
  
    // step 10 Enter $500 in the Down Payment text box
    homePage.downpayment.type('50000');
  })
})
