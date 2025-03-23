export default class HomePageObject {
    elements = {
        connectToSepoliaButton: () => cy.get('[data-test="MetaMaskConnector__Button__connect"]'),
        erc20TokenInputField: () => cy.get('[data-test="InputAddress__Input__addressValue"]'),
        accountAddress: () => cy.get('[data-test="MetaMaskConnector__Div__connect"]'),
        inputAddresssubmitButton: () => cy.get('[data-test="InputAddress__Button__submit"]'),
        tokenBalance: () => cy.get('[data-test="TokenBalance__Div__balanceAmount"]'),
        depositInputFiled: () => cy.get('[data-test="DepositToken__Input__depositAmount"]'),
        depositButton: () => cy.get('[data-test="DepositToken__Button__deposit"]'),
        approveToken: () => cy.get('#approveTokens'),
        errorMessage: () => cy.get('[data-test="MetaMaskConnector__Div__error"]'),
        pageBody: () => cy.get('body'),
        exampleTokenLink: () => cy.get('[data-test="InputAddress__Span__exampleTokenLink"]'),
        errorDepositInputField: () => cy.get('[data-test="DepositToken__Div__error"]'),
        mintMoreTokenlink: () => cy.get('[data-test="TokenBalance__Div__getMoreExampleTokensAction"]')
    }

    pageUrl() {
        cy.visit("/")
    }

    clickConnectToSepolia() {
        this.elements.connectToSepoliaButton().click()
    }

    typeAddress(address) {
        this.elements.erc20TokenInputField().type(address)
    }

    clickTheSubmitButton() {
        this.elements.inputAddresssubmitButton().click()
    }

    typeDepositAmount(depositAmount) {
        this.elements.depositInputFiled().type(depositAmount)
    }

    clickTheDepositButton() {
        this.elements.depositButton().click()
    }

    pageBodyShouldContain(txt1, txt2) {
        this.elements.pageBody().should(txt1, txt2)
    }
    
    pageBodyShouldNotContain(txt1, txt2) {
        this.elements.pageBody().should(txt1, txt2)
    }
    clickExampleTokenLink() {
        this.elements.exampleTokenLink().click()
    }

    clickMintMoreTokenLink() {
        this.elements.mintMoreTokenlink().click()
    }

    accountAddressShouldContain(txt1, txt2) {
        this.elements.accountAddress().should(txt1, txt2)
    }

}