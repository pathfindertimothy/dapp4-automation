# Test to connect DApp wth metamask on sepolia network

## Table of Contents

- [Description](#description)
- [Requirements](#requirements)
  - [Test Folder Structure](#test-folder-structure)
- [To Run Test](#to-run-test)
- [Discussion](#discussion)


## Description

- This is an end2end test for a dapp application which requires connecting to metamask on sepolia network to perform operations
- The test framework used is Synpress build on cypress framework and incorporated with cucumber

## Requirements

- Clone the project from the git repo
- To run with Node.js
    - Install node
    - Run `npm install` to install all packages
    - Run `npm run build` to build the app

### Test Folder Structure

- The test is in the `2e2` folder
- The `appPage` contains the test scripts while the `appPage.feature` contains the features
- The `page_object` folder is for the page object model define pattern
- Test report is in the `reports` folder in the root directory

## To run test

- Start the app by runing `npm run start`
- Start the test by runing `npm run e2e`
- Report will be seen in `reports` folder
    - Open the `mochawesome` html in the broswer to view the report

## Discussion

The test is sufficient as an accessment to test the skill of a QA personnel. 

Other aspect of to test for better quality would be
- edge and boundary cases such as testing over or below the limit of the app token in the wallet address to see if transfer would fail
- input validation for an incorrect token address in the token input field
- carrying out fuzzer test on the app contract API
- testing the selecting other token click
- verifying the values in the table is displayed and the token amount deposited
- verifying that the arrow counter in the input the deposit input box is working
- testing for error and negative testing

Challenge
- one challenge is concerning the sepoliaETH token used for gas fee which has a limit by most faucet providers. The gas fees amount is high and getting sepoliaETH to cove the fee is difficult.