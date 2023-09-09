/// <reference types="Cypress" />

describe('template spec', () => {
  it('should render the main image', () => {
    cy.visit('http://192.168.1.7:5173/')
    /**
     * get takes any css selector. it finds all matches
     */
    cy.get('.main-header img');
  })
  
  it('should dislay the page title', () => {
    cy.visit('http://192.168.1.7:5173/');
    /**
     * Finds a element and see if it has some specific text
     * 
     * if ypu want to find any element with given text - cy.contains("sample text")
     */
    cy.get('h1').contains("My Cypress Course Tasks");
    /**
     * Should adds a explicit expectation. should takes a string
     */
    //explicit expectations start with should
    cy.get('h1').should('have.length',1)
  })
})