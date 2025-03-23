# To test dapp with metamask on sepolia network using an automation framework and incorporated with BDD (Cucumber)

## Table of Contents

- [Description](#description)
- [Requirements](#requirements)
  - [Test Folder Structure](#test-folder-structure)
  - [Notes](#notes)
- [To Run Test](#to-run-test)
- [Discussion](#discussion)


## Description

- This is an end2end test for a dapp application
- The test framework used is Synpress build on cypress framework and incorporated with cucumber tool

## Requirements

- Clone the project from the git repo
- To run with Node.js
    - Install node
    - Run `npm install` to install all packages
    - Run `npm run build` to build the app

### Test Folder Structure

- The test is in the `e2e` folder
- The `test_steps` contains the test features and the scripts
- The `page_object` folder is for the page object model define pattern
- Test report is in the `reports` folder in the root directory

### Notes

- There were conflicts between `CommonJS` modules in the dapp files and `ESModules` in the test files. To resolve this, the dapp files were updated to use `ESModules` standard in their import statement in several of its files.
- Secret are kept in the `constants/constants.js file`. Reason being that, for some reason that is still under investigation, secrets stored in `.env` are not being pull despite the installation of `dotenv` module. There was an error locating dotenv modules. There could be several factors to this. If it works for you, then change the variables imported in `01-app-access.js` and `03-deposit-erc20-token.js` to point to the `.env` file. 
- Kindly put only test wallet and address secrets in this file and never put a wallet or address that contains real tokens that you have.
- The wallet or address account in `constants.js` or in the `.env` file should have `SepoliaETH` in it.
- There are explicit time wait added in some of the steps. These are needed because the blockchain at times take time to process transactions and for it to reflect in the wallet. 
- Note also that for the last test, the max token amount was not inputted in the input field. The reason is that, for some reason if all the token is inputted in the field, there might still be some fractions of token left in the wallet and the validation will fail as the wallet value will not be zero. To counter this, a fraction is inputted in the input field.
- The test secrets in the `constants.js` file was removed after the github action was ran successfully. Kindly put a test `acccountAddress` and `walletPrivateKey` in the file or use the `.env` if it works for you.


## To run test

- Start the app by runing `npm run start` in a terminal.
- To run the test
  - Update or replace the cypress script in package.json to: `"test:e2e": "npx cypress run --browser chrome --headed --reporter cypress-mochawesome-reporter"`. The option `--browser chrome` is needed to run the test locally in a chrome browser. It is not needed during github actions as it is already defined in the `main.yml` file.
  - Start the test by runing `npm run test:e2e` in a separate terminal.
- Report will be generated in `reports` folder
    - Open the `mochawesome` html in the broswer to view the report.
    - Each of the test file will have it's own report. The reports can be merge using some other packages. You can try it out.
- Github actions
  - Github actions is define in the `github/workflows/main.yml` file. This is automatically invoke for every push in the CI/CD pipeline.

## Discussion

The test is sufficient as an assessment to test the skill of a QA personnel. 

The following aspect can also be considered for testing
- Edge and boundary cases such as testing over or below the limit of the app token in the wallet address to see if transfer would fail.
- Fuzzer test on the app contract API should be considered.
- GraphQL testing on the API.
- Testing for other token will valid token address
- Verifying the values of the token amount deposited.
- Verifying that the arrow counter in the input field is working

Challenges
- There was ESModule conflicts between some files in cypress and the dapp. This was resolved as explained above. 
- There are challenges using some other framework to incorporate BDD (Cucumber)

Further Information
- For any further information or assistant, do not hesitatee to contact me on pathfindertimothy@gmail.com 