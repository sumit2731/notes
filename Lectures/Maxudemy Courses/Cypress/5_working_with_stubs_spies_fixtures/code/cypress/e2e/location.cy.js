/// <reference types="cypress" />

describe("share location", () => {
  let spyObject;
  beforeEach(() => {
    console.log("Inside then");
    cy.clock();
    /**
     * Loads the json from provided file and converts it into js bjevt
     */
    cy.fixture("user-location.json").as("userLocation");
    /**
     * We cannot stub window object outside because because this window object, which is built into the browser
      and made available by the browser, is not available here when executed as code like this.

      Keep in mind that what we're doing here with Cypress is we're giving Cypress instructions,
      which it then queues up so that it creates a queue  of to-do steps, and then those steps are executed
      at a later point of time. However, with this code here, I'm directly trying to access the window object

      when I give Cypress that instruction.At this point of time, though, the tests are not running yet
      and the window object will not be available yet, or at least, not the window object sof the website I'm trying to test.

      This is one way of spying or stubbing some proeprty/method on window object, 
      second way is - https://github.com/cypress-io/cypress-example-recipes/blob/master/examples/stubbing-spying__window-fetch/cypress/e2e/spy-on-fetch-spec.cy.js
     */
    cy.visit("/").then((win) => {
      cy.get("@userLocation").then((userLocation) => {
        cy.stub(win.navigator.geolocation, "getCurrentPosition")
          .as("getUserPosition")
          .callsFake((cb) => {
            setTimeout(() => {
              cb(userLocation);
            }, 100);
          });
      });
      cy.stub(win.navigator.clipboard, "writeText")
        .as("saveToClipBoard")
        .resolves();

        cy.spy(win.localStorage, 'setItem').as('storeLocation')
        spyObject = cy.spy(win.localStorage, 'getItem').as('getStoredLocation');
    });

 
  });
  it("should fetch the user location", () => {
    console.log("clicking on element");
    cy.get('[data-cy="get-loc-btn"]').click();
    console.log("Doing assertion");
    cy.get("@getUserPosition").should("have.been.called");

    cy.get('[data-cy="get-loc-btn"]').should("be.disabled");
    cy.get('[data-cy="actions"]').should("contain", "Location fetched"); // contains("LOcation Fetched")
  });

  it("should share the location url", () => {
    cy.get('[data-cy="name-input"]').type("John Doe");
    cy.get('[data-cy="get-loc-btn"]').click();
    cy.get('[data-cy="share-loc-btn"]').click();
    cy.get("@saveToClipBoard").should("have.been.called");
    cy.get("@userLocation").then((userLocation) => {
      const {latitude, longitude} = userLocation.coords;
      
      cy.get("@saveToClipBoard").should(
        "have.been.calledWithMatch",
        new RegExp(`${latitude}.*${longitude}.*${encodeURI("John Doe")}`)
      );

      cy.get("@storeLocation").should(
        "have.been.calledWithMatch",
        /John Doe/,
        new RegExp(`${latitude}*.${longitude}*.${encodeURI('John Doe')}`)
        )
    });

    cy.get('[data-cy="share-loc-btn"]').click();
    cy.get('@getStoredLocation').should('have.been.called');

    cy.get('[data-cy="info-message"]').should('be.visible');
    cy.get('[data-cy="info-message"]').should('have.class','visible');
    cy.tick(2000);
    cy.get('[data-cy="info-message"]').should('not.be.visible');
    
  });
});
