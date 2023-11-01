// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("submitForm", () => {
  cy.get('form button[type="submit"]').click();
});

/**
 * Now a query is like a command, but one core difference is that it's a retryable function that can be retried
    by Cypress whilst it's, for example, waiting for the visibility of a certain element.

    Function retruned by query is retried by cypress
 */
Cypress.Commands.addQuery("getById", (id) => {
  const getFn = cy.now("get", `[data-cy="${id}"]`);
  return () => {
    return getFn();
  };
});
