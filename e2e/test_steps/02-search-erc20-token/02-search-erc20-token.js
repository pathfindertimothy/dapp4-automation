import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import HomePageObject from '../../page_object/homePage'
import 'cypress-mochawesome-reporter/register'

const homePageObject = new HomePageObject()

Given("A user with metamask installed connected to sepolia network", () => {
    cy.switchNetwork('Ethereum Mainnet', true).then(() => {
        cy.getNetwork().should('eq', 'Ethereum Mainnet')
    })

    cy.switchNetwork('Sepolia', true).then(() => {
        cy.getNetwork().should('eq', 'Sepolia')
    })
    cy.wait(2000)
})

When("the user accesses the app page", () => {
    homePageObject.pageUrl()
    cy.getNetwork().should('eq', 'Sepolia')
})

Then("the user enters the address {string} in the input address field", (address) => {
    homePageObject.typeAddress(address)
})

Then("the user clicks the submit button", () => {
    homePageObject.clickTheSubmitButton()
})

Then("the page shows the address balance for the selected token", () => {
    homePageObject.elements.tokenBalance().should(($p) => {
        expect($p).not.to.be.empty
    })
})

Then("the page shows the table of the deposit history for the selected token", () => {
    homePageObject.pageBodyShouldContain('contain', 'Transaction')
    homePageObject.pageBodyShouldContain('contain', 'Depositor')
    homePageObject.pageBodyShouldContain('contain', 'Token address')
    homePageObject.pageBodyShouldContain('contain', 'Amount')
})

// the below commented steps will be automatically taken from the first BDD test in this file since they are the same

// Given("A user with metamask installed connected to sepolia network: case2", () => {
//     cy.switchNetwork('Ethereum Mainnet', true).then(() => {
//         cy.getNetwork().should('eq', 'Ethereum Mainnet')
//     })

//     cy.switchNetwork('Sepolia', true).then(() => {
//         cy.getNetwork().should('eq', 'Sepolia')
//     })
//     cy.wait(2000)
// })

// When("the user accesses the app page: case2", () => {
//     homePageObject.pageUrl()
//     cy.getNetwork().should('eq', 'Sepolia')
// })

Then("the user enters the address {string} in the address input field", (address) => {
    homePageObject.typeAddress(address)
})

Then("the submit button is disabled", () => {
    homePageObject.elements.inputAddresssubmitButton().should('have.attr', 'disabled')
})

// the below commented steps will be automatically taken from the first BDD test in this file since they are the same

// Given("A user with metamask installed connected to sepolia network: case3", () => {
//     cy.switchNetwork('Ethereum Mainnet', true).then(() => {
//         cy.getNetwork().should('eq', 'Ethereum Mainnet')
//     })

//     cy.switchNetwork('Sepolia', true).then(() => {
//         cy.getNetwork().should('eq', 'Sepolia')
//     })
//     cy.wait(2000)
// })

// When("the user accesses the app page: case3", () => {
//     homePageObject.pageUrl()
//     cy.getNetwork().should('eq', 'Sepolia')
// })

Then("the user clicks the example token link", () => {
    homePageObject.clickExampleTokenLink()
})

Then("the page shows the address balance for the select ERC20 token", () => {
    homePageObject.elements.tokenBalance().should(($p) => {
        expect($p).not.to.be.empty
    })
})

Then("the page shows the table of the deposit history for the selected ERC20 token", () => {
    homePageObject.pageBodyShouldContain('contain', 'Transaction')
    homePageObject.pageBodyShouldContain('contain', 'Depositor')
    homePageObject.pageBodyShouldContain('contain', 'Token address')
    homePageObject.pageBodyShouldContain('contain', 'Amount')
})