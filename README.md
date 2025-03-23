# QA Libre Challenge

## Table of Contents

- [Requirements](#requirements)
  - [Test Suite Structure](#test-suite-structure)
  - [Expectations](#expectations)
- [Project Information](#project-information)
  - [Example ERC20 Token](#example-erc20-token)
- [Local Environment Setup](#local-environment-setup)
  - [Run with Docker Compose](#run-with-docker-compose)
  - [Run with Node.js](#run-with-nodejs)

## Requirements

Fork this repository and create a comprehensive suite of end-to-end (e2e) tests for a decentralized application (DApp) that interacts with a smart contract on the Sepolia Testnet. The DApp consists of a smart contract and a Next.js frontend application. You can access the DApp from [https://qa-challange.netlify.app](https://qa-challange.netlify.app).

### Test Suite Structure

Organize this project as you prefer. Inside the folder `e2e` you will find the the feature files, which following the Gherkin syntax for behavior-driven development (BDD). Use the following existing feature files as a basis for this challenge:

- `01-app-access.feature`
- `02-search-erc20-token.feature`
- `03-deposit-erc20-token.feature`

### Expectations

- Test the connection to the user's wallet (e.g., MetaMask)
- Verify that the ERC20 token address input field works correctly
- Test the display of the current token balance
- Test the token transfer process from the wallet to the smart contract
- Execute the e2e tests using a GitHub Actions workflow
- Document how to run tests
- Be proactive in providing feedback in an MD document about this exercise and share your thoughts on what other aspects should be taken care of to ensure a good level of quality for a web application
- [Bonus] Display test results in an easily shareable format

## Project Information

This is a Next.js project that uses the Web3 library to interact with the MetaMask wallet and perform actions by calling smart contract methods.

To use this application, you need to:

1. Install MetaMask on your browser ([Download MetaMask](https://metamask.io/download/))
2. Connect MetaMask to the Sepolia testnet

## Add Sepolia network to MetaMask

Network Name: Sepolia
RPC URL: https://sepolia.infura.io/v3/
Chain ID: 11155111
Currency Symbol: SepoliaETH
Block Explorer URL (Optional): https://sepolia.etherscan.io

Get free ETH from these faucets:

- https://sepoliafaucet.com (connect with Alchemy)
- https://faucets.chain.link/sepolia

### Example ERC20 Token

The application allows interaction with ERC20 tokens deployed on the Sepolia testnet. For testing purposes, you can use our example ERC20 token deployed at:

```text
0x9982f9A3bA28c34aD03737745d956EC0668ea440
```

By selecting this token, the application will allow you to mint 100 tokens at a time.

## Local Environment Setup

### Run with Docker Compose

1. Open a terminal at the root path of this project
2. Execute the following command:

   ```bash
   docker-compose up -d
   ```

3. Access the application at [http://localhost:3000](http://localhost:3000) using your browser

### Run with Node.js

1. Open a terminal at the root path of this project
2. Execute the following commands:

   ```bash
   npm install
   npm run build && npm run start
   ```

3. Access the application at [http://localhost:3000](http://localhost:3000) using your browser

## Note:
- Test can be found in the e2e folder which includes a `README.md` file