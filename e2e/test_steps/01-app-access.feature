Feature: The application works only with the Sepolia network

    Scenario: The user accesses the page with Metamask connected to Sepolia network
        Given A user with metamask installed connected to sepolia network
        When the user accesses the app page
        Then the page shows the account address
        Then the page shows the input address field
        Then the page doesn't show a network error message

    Scenario: The user accesses the page with Metamask connected to Mainnet network
        Given A user with metamask installed connected to mainnet network
        When the user accesses the app page with the wallet
        Then the page shows a network error message

    Scenario: The user accesses the page with Metamask connected to Mainnet network and uses the switch network button
        Given A user with metamask installed connected to eth mainnet network
        When the user accesses the dapp page
        And the user clicks the switch network button to confirm
        Then the page shows the input address field of the dapp
        Then the page does not show a network error message