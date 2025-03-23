import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import HomePageObject from '../../page_object/homePage'
import { constantVariable } from '../../constants/constants'
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

Then("the page shows the token balance {string}", (balance) => {
    homePageObject.elements.tokenBalance().should('have.text', 0)
})

Then("the deposit input shows an error", () => {
    homePageObject.elements.errorDepositInputField().should('have.text', constantVariable.depositInputFieldErrorMsg)
})

Then("the deposit button is not visible", () => {
    homePageObject.pageBodyShouldNotContain('not.have.text', 'Deposit')
})

// Scenario: The user mint example token using the web application
Given("A user with metamask installed connected to sepolia network: case2", () => {
    cy.switchNetwork('Ethereum Mainnet', true).then(() => {
        cy.getNetwork().should('eq', 'Ethereum Mainnet')
    })

    cy.switchNetwork('Sepolia', true).then(() => {
        cy.getNetwork().should('eq', 'Sepolia')
    })
    cy.wait(2000)
})

When("the user accesses the app page: case2", () => {
    homePageObject.pageUrl()
    cy.getNetwork().should('eq', 'Sepolia')
})

Then("the user clicks the example token link", () => {
    homePageObject.clickExampleTokenLink()
})

Then("the user clicks the Mint more tokens link", () => {
    homePageObject.clickMintMoreTokenLink()
    cy.confirmTransaction()
    homePageObject.clickMintMoreTokenLink()
})

Then("the user accepts the transaction", () => { 
    cy.confirmTransaction()
    cy.wait(15000)
})

Then("the deposit button is visible", () => {
    homePageObject.elements.depositButton().should('have.text', 'Deposit')
})

//  Scenario: The user deposit example token
Given("A user with metamask installed connected to sepolia network: case3", () => {
    cy.switchNetwork('Ethereum Mainnet', true).then(() => {
        cy.getNetwork().should('eq', 'Ethereum Mainnet')
    })

    cy.switchNetwork('Sepolia', true).then(() => {
        cy.getNetwork().should('eq', 'Sepolia')
    })
    cy.wait(2000)
})

When("the user accesses the app page: case3", () => {
    homePageObject.pageUrl()
    cy.getNetwork().should('eq', 'Sepolia')
})

Then('the user enter the max amount of tokens in the amount field', () => {
    homePageObject.typeDepositAmount(50)
})

Then('the user clicks the deposit button', () => {
    homePageObject.clickTheDepositButton()
    cy.confirmTransaction()
    cy.approveTokenPermission()
    cy.wait(2000)
    homePageObject.clickTheDepositButton()
})

Then('the user approve the deposit', () => {
    cy.confirmTransaction()
    cy.approveTokenPermission()
    cy.wait(15000)
})

Then('the page shows the token balance 0', () => {
    homePageObject.elements.tokenBalance().should('contain.text', '0')
})