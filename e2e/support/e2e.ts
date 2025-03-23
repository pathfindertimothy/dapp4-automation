// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
// import "@synthetixio/synpress/support";
// Import Synpress commands for MetaMask
import { synpressCommandsForMetaMask } from '@synthetixio/synpress/cypress/support'
import 'cypress-mochawesome-reporter/register';

// Handle uncaught exceptions
Cypress.on('uncaught:exception', () => {
  // returning false here prevents Cypress from failing the test
  return false
})

// Initialize Synpress commands
// synpressCommandsForMetaMask()

// run before each test
before(() => {
  synpressCommandsForMetaMask() 
})