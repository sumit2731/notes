/// <reference types="Cypress" />

describe('Auth', ()=> {
    beforeEach(() => {
        cy.task('seedDatabase');
    });
    it('should signup', () => {
        cy.visit('/signup');
        /**
         * because there sometimes can a bug with this application and Cypress where it fails to type into the first field of the form,
            if you don't click into it first.
         */
        //filling the form and clicking on submit form
        cy.get('[data-cy="auth-email"]').click();
        cy.get('[data-cy="auth-email"]').type('test2@example.com');
        cy.get('[data-cy="auth-password"]').type('testpassword');
        cy.get('[data-cy="auth-submit"]').click();

        //assertions
        cy.location('pathname').should('eq', '/takeaways');
        /**
         * How to know which proeprties exist, click on get step in cypess app and you will see
         * 
         * note- cookies are also cleared between tests
         */
        cy.getCookie('__session').its('value').should('not.be.empty')
    })

    it('should login',() => {
        //executing login command defimned in cypress/support/command.js
        cy.login();
    });

    it('should logout',() => {
        cy.login();
        cy.contains('Logout').click();
        cy.location('pathname').should('equal', '/')
        cy.getCookie('__session').its('value').should('be.empty')
    })
});