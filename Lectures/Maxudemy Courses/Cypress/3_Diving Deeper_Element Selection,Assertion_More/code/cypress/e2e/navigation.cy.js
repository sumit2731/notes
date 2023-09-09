/// <reference types="Cypress" />

describe('page navigation', () => {
    it('should navigate between pages',() => {
        cy.visit("http://localhost:5173/");

        //go to /about page
        cy.get('[data-cy="header-about-link"]').click();
        cy.location('pathname').should('equal','/about');

        //go back
        cy.go('back');
        cy.location('pathname').should('equal','/');

        //click on /about link
        cy.get('[data-cy="header-about-link"]').click();
        //click on /home link
        cy.get('[data-cy="header-home-link"]').click();

        cy.location('pathname').should('equal','/')
    })
});