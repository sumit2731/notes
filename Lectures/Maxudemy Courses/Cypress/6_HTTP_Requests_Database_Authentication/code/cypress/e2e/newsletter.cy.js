/// <reference types="Cypress" />


describe('Newsletter',() => {
    
    beforeEach(() => {
        cy.task('seedDatabase')
    });
    
    it('should dislay a success message',() => {
        /**
         * see cy.intercepts in commands.txt
         * 
         * If we do not pass third arument then we do not block api call , then just add a spy over outgoing requests.using only this setup we can add spy to
         * check some http requests were sent or not.
         * here we want to block it,and provide a dummy response so that we do not make api call to backend. so we provide third argument which is mocked 
         * response of API call
         */
        //cy.intercept('POST','/newsletter*')
        /**
         * we can also save the intercepted api call in a alias so that later we can wat to get response from this api call before goibg ahead with test
         * 
         * also note that in same test you can intercept same call with diffrenet reponses multiple times. 
         * 
         * 
         * to learn more about intercepting see this link - 
         */
        cy.intercept('POST','/newsletter*',{status: 201}).as('subscribe');
        cy.visit('/');
        cy.get('[data-cy="newsletter-email"]').type("test@example.com");
        cy.get('[data-cy="newsletter-submit"]').click();
        /**
         * here we are waiting for this request to be sent and intercepted
         * next instruction will only be called when cypresshas blocked and stubbed this h5tp request
         * 
         * 
         * see this link to understand how you can wait for request mulgiple times -
         * https://github.com/cypress-io/cypress-example-recipes/blob/7d2f665830e967a4df35f5b2d53a32e28d6e1467/examples/stubbing-spying__window-fetch/cypress/e2e/stub-fetch-spec.cy.js#L63]
         */
        cy.wait('@subscribe');
        cy.contains("Thanks for signing up");
    });

    it('should display validation errors',() => {
        cy.intercept('POST','/newsletter*',{message: 'Email exisis already'}).as('subscribe');
        cy.visit('/');
        cy.get('[data-cy="newsletter-email"]').type("test@example.com");
        cy.get('[data-cy="newsletter-submit"]').click();
        cy.wait('@subscribe');
        cy.contains("Email exisis already");
    })

    it('should successfully create a new contact', () => {

        /**
         * Here we are making a direct API call to test our API end point.cy.request makes direct call to backend withour=t using fronted.
         * there are diffrent ways to make request, in max opinion passing a config object is most easiest one. ther are many properties to 
         * configure this request
         * 
         * 
         * then method can be used to access the subject of the command in front of the then method.
         */
        cy.request({
            method: 'POST',
            url: '/newsletter',
            body: {email: 'test@example.com'},
            form: true
        }).then(res => {
            expect(res.status).to.eq(201);
        });
    })
})