import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import HomePageObject from '../../page_object/homePage'
import { constantVariable } from '../../constants/constants'
import 'cypress-mochawesome-reporter/register'
// import 'dotenv/config'


const homePageObject = new HomePageObject()

Given("A user with metamask installed connected to sepolia network", () => {
    cy.importWalletFromPrivateKey('c606859a03f42ec18a5a9fa6749540d7fe2d9fed4efee168736a47443337bc56')
    cy.getAccountAddress().should('eq', '0x861aba8D241fB0ddd8d2Ed2E5B2925E160B056e3')
    homePageObject.pageUrl()
    cy.connectToDapp()
    homePageObject.clickConnectToSepolia() 
})

When("the user accesses the app page", () => {
    const targetNetwork = 'Sepolia'
    cy.switchNetwork(targetNetwork, true).then(() => {
        cy.getNetwork().should('eq', targetNetwork)
    })
})

Then("the page shows the account address", () => {
    const txt = constantVariable.accountAddress.toLowerCase()
    homePageObject.accountAddressShouldContain('have.text', `Connected as: ${txt}`)
})

Then("the page shows the input address field", () => {
    homePageObject.elements.erc20TokenInputField().should('be.visible')
})

Then("the page doesn't show a network error message", () => {
    homePageObject.pageBodyShouldNotContain('not.contain', 'Invalid chain id')
})

Given('A user with metamask installed connected to mainnet network', () => {
    const targetNetwork = 'Ethereum Mainnet'
    cy.switchNetwork(targetNetwork, true).then(() => {
        cy.getNetwork().should('eq', targetNetwork)
    })
})

When('the user accesses the app page with the wallet', () => {
    homePageObject.pageUrl()
})

Then('the page shows a network error message', () => {
    homePageObject.elements.errorMessage().should('contain.text', 'Invalid chain id')
})

Given('A user with metamask installed connected to eth mainnet network', () => {
    cy.switchNetwork('Ethereum Mainnet', true).then(() => {
        cy.getNetwork().should('eq', 'Ethereum Mainnet')
    })
    cy.wait(2000)
})

When('the user accesses the dapp page', () => {
    homePageObject.pageUrl()
})

Then('the user clicks the switch network button to confirm', ()=> {
    homePageObject.clickConnectToSepolia() 
    cy.switchNetwork('Sepolia', true).then(() => {
        cy.getNetwork().should('eq', 'Sepolia')
    })
    cy.wait(2000)
})

Then("the page shows the input address field of the dapp", () => {
    homePageObject.elements.erc20TokenInputField().should('be.visible')
})

Then("the page does not show a network error message", () => {
    // cy.get('body').should('not.contain', 'Invalid chain id')
    homePageObject.pageBodyShouldNotContain('not.contain', 'Invalid chain id')
    cy.wait(2000)
})