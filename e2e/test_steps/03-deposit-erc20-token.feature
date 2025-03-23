Feature: Deposit ERC20 tokens

  Scenario: The user try to deposit a ERC20 token with an empty balance
    Given A user with metamask installed connected to sepolia network
    When the user accesses the app page
    Then the user enters the address '0xCD85B9a767eF2277E264A4B9A14a2deACAB82FfB' in the input address field
    Then the user clicks the submit button
    Then the page shows the token balance '0'
    Then the deposit input shows an error
    Then the deposit button is not visible

  Scenario: The user mint example token using the web application
    Given A user with metamask installed connected to sepolia network: case2
    When the user accesses the app page: case2
    Then the user clicks the example token link
    Then the user clicks the Mint more tokens link
    Then the user accepts the transaction
    Then the deposit button is visible

  Scenario: The user deposit example token
    Given A user with metamask installed connected to sepolia network: case3
    When the user accesses the app page: case3
    Then the user clicks the example token link
    Then the deposit button is visible
    Then the user enter the max amount of tokens in the amount field
    Then the user clicks the deposit button
    Then the user approve the deposit
    Then the page shows the token balance 0
