/// <reference types="Cypress" />

describe("Takeaways", () => {
  beforeEach(() => {
    cy.task("seedDatabase");
  });

  it("should display a list of fetched takeaways", () => {
    cy.visit("/");
    cy.get('[data-cy="takeaway-item"]').should("have.length", 2);
  });

  it("Should Add a new takeaway", () => {
    cy.intercept("POST", "/takeaways/new*", "success").as("createTakeaway");
    cy.login();
    cy.visit("/takeaways/new");
    cy.get('[data-cy="title"]').click();
    cy.get('[data-cy="title"]').type("TestTitle1");
    cy.get('[data-cy="body"]').type("TestBody1");
    cy.get('[data-cy="create-takeaway"]').click();
    /**
     * We can intercept for request as well for response, here we are intersted in what is being sent in request
     */
    cy.wait("@createTakeaway")
      .its("request.body")
      .should("match", /TestTitle1.*TestBody1/);
  });
});
