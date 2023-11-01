/// <reference types="Cypress" />

describe("contact form", () => {
  it("should submit the form", () => {
    cy.visit("http://localhost:5173/about");
    //filling form
    cy.get('[data-cy="contact-input-message"]').type("Hello World");
    cy.get('[data-cy="contact-input-name"]').type("John Doe");
    cy.get('[data-cy="contact-input-email"]').type("test@example.com");
    //asserting on button
    cy.get('[data-cy="contact-btn-submit"]').contains("Send Message");
    cy.get('[data-cy="contact-btn-submit"]').should(
      "not.have.attr",
      "disabled"
    );

    //same line above with chaining
    cy.get('[data-cy="contact-btn-submit"]')
      .contains("Send Message")
      .should("not.have.attr", "disabled");

    //same as above but using and instead of should, readibilty wise and looks better
    cy.get('[data-cy="contact-btn-submit"]')
      .contains("Send Message")
      .and("not.have.attr", "disabled");

    cy.get('[data-cy="contact-btn-submit"]').click();
    cy.get('[data-cy="contact-btn-submit"]').contains("Sending...");
    cy.get('[data-cy="contact-btn-submit"]').should("have.attr", "disabled");
    cy.get('[data-cy="contact-btn-submit"]').should("be.disabled");
  });
  it("should submit the form - using alias", () => {
    cy.visit("http://localhost:5173/about");
    //filling form
    cy.get('[data-cy="contact-input-message"]').type("Hello World");
    cy.get('[data-cy="contact-input-name"]').type("John Doe");
    cy.get('[data-cy="contact-input-email"]').type("test@example.com");

    //using alias - see cypress command notes
    cy.get('[data-cy="contact-btn-submit"]')
      .as("submitBtn")
      .contains("Send Message")
      .should("not.have.attr", "disabled");

    cy.get("@submitBtn").click();
    cy.get("@submitBtn").contains("Sending...");
    cy.get("@submitBtn").should("have.attr", "disabled");
    cy.get("@submitBtn").should("be.disabled");
  });
  it("should submit the form - using then to get access object returned by command", () => {
    cy.visit("http://localhost:5173/about");
    //filling form
    cy.get('[data-cy="contact-input-message"]').type("Hello World");
    cy.get('[data-cy="contact-input-name"]').type("John Doe");
    cy.get('[data-cy="contact-input-email"]').type("test@example.com");

    //using alias - see cypress command notes
    cy.get('[data-cy="contact-btn-submit"]')
      .as("submitBtn")
      .contains("Send Message")
      .should("not.have.attr", "disabled");

    /**
     * IN callback to then, first argument is wrapper around element selected. it gives access to selected dom element and you can
     *  even modify it and get get attributes values from it
     *
     * el is subject of method you had before then. when we use get, this subject is wrapper object around matched DOM element or
     * DOM elements. later we will see other use cases where subject you are getting in callback is not a DOM element but some other
     * kind of data
     *
     * el is DOM element as js returns you,but it gives to more access to different properties, DOM element might have.
     * you can also get direct (even more)access to actual DOM elemnts by using el[0] or el[1]
     */
    cy.get('[data-cy="contact-btn-submit"]').then((el) => {
      //el.addClass, el.hasClass
      /**
       *  you do no longer have access to the should method.Instead here you can use an alternative way of defining your
       *      assertionsto see kinds of methods that can be called on expectation,see docs - https://docs.cypress.io/guides/references/assertions
       *
       * then vs should which one should be used -
       *  https://docs.cypress.io/api/commands/should#Differences
       *  https://docs.cypress.io/api/commands/then#__docusaurus_skipToContent_fallback
       *
       */
      expect(el.text()).to.contain("Send Message");
      expect(el.attr("disabled")).to.be.undefined;
    });

    cy.get("@submitBtn").click();
    cy.get("@submitBtn").contains("Sending...");
    cy.get("@submitBtn").should("have.attr", "disabled");
    cy.get("@submitBtn").should("be.disabled");
  });

  it("Should submit form with enter", () => {
    cy.visit("http://localhost:5173/about");
    //filling form
    cy.get('[data-cy="contact-input-message"]').type("Hello World");
    cy.get('[data-cy="contact-input-name"]').type("John Doe");

    cy.get('[data-cy="contact-btn-submit"]')
      .contains("Send Message")
      .should("not.have.attr", "disabled");

    //filling email and pressing enter
    cy.get('[data-cy="contact-input-email"]').type("test@example.com{enter}");

    cy.get('[data-cy="contact-btn-submit"]').contains("Sending...");
    cy.get('[data-cy="contact-btn-submit"]').should("have.attr", "disabled");
    cy.get('[data-cy="contact-btn-submit"]').should("be.disabled");
  });

  it("should validate the form input", () => {
    cy.visit("http://localhost:5173/about");
    //clicking on button without filling form
    cy.get('[data-cy="contact-btn-submit"]').click();
    cy.get('[data-cy="contact-btn-submit"]').then((el) => {
      expect(el).to.not.have.attr("disabled");
      expect(el.text()).to.not.equal("Sending...");
    });

    /**
     * @way 1 - this fails when we use "npx cypress run". when such things happen you need to change the way show you write
     *  your asesrtion and select the element. For example instead of selecting the parent via .parent(), method we can add
     *  data-cy attribute on parent.sometime some elemnts are not selected in headeless mode and using unique selectors like
     *  this can fix the issue. but here it did not solved our issue.
     *
     *  here problem is we are selecting class on parent dynamically and then fails to give me that element correctly.
     *
     *  so we switch to using should assertions, as they are more stable.so use should wherever possible
     *
     *
     * focus out from text field without filling anything
     * and then asseting that its parent will contain the invalid woolrd in class, as rest of clasname is generated dynamically
     */
    // cy.get('[data-cy="contact-input-message"]').focus().blur();
    // cy.get('[data-cy="contact-input-message"]').parent().then(el => {
    //     expect(el.attr('class')).to.contain('invalid')
    // })

    // //doing same for name
    // cy.get('[data-cy="contact-input-name"]').focus().blur();
    // cy.get('[data-cy="contact-input-name"]').parent().then(el => {
    //     expect(el.attr('class')).to.contain('invalid')
    // })

    // //doing same for email
    // cy.get('[data-cy="contact-input-email"]').focus().blur();
    // cy.get('[data-cy="contact-input-email"]').parent().then(el => {
    //     expect(el.attr('class')).to.contain('invalid')
    // })

    /**
     * @way 2 - using should
     */
    cy.get('[data-cy="contact-input-message"]').focus().blur();
    cy.get('[data-cy="contact-input-message"]')
      .parent()
      .should(($el) => {
        expect($el.attr("class")).to.contain("invalid");
      });

    /**
     * @way 3 - using should
     *
     * should returns something, it returns a value that makes sense for the assertion you ran before.
     * here when we look for attribute. next assertion receives the value of that attribute.
     *
     * Now value returned via should depends upon what kind of assertions you are passing to should.
     * In most cases should yields same subject it was given. in some cases it returns something else and attibute
     * assertion is prominent examples
     */

    cy.get('[data-cy="contact-input-name"]').focus().blur();
    cy.get('[data-cy="contact-input-name"]')
      .parent()
      .should("have.attr", "class")
      .should("contain", "invalid"); // .should('match', '/invalid/')  this matches regular expression
  });
});
