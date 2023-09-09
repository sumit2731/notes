/// <reference types="Cypress" />


describe('tasks management', () => {
    it('should open and close the new task modal', () => {
        cy.visit('http://192.168.1.7:5173/');
        cy.contains('Add Task').click();
        /**
         * By default cypress clicks on middle of found element. here it reports that found element is covered by some element.
         * by default cypress tries to click on center of given element, here center of backdrop is behind our modal, hence error.
         * later in course we will ssee how to chnage coordinates which cypress chooses to click.here we used force: true
         * to tell cypress to still click the element even if it things that this element is behind some other element.
         */
        cy.get('.backdrop').click({force: true});
        cy.get('.backdrop').should('not.exist');
        cy.get('.modal').should('not.exist');

        cy.contains('Add Task').click();
        cy.contains('Cancel').click();
        cy.get('.backdrop').should('not.exist');
        cy.get('.modal').should('not.exist');
    })


    it('should crete the Tasks', () => {
        cy.visit('http://192.168.1.7:5173/');
        cy.contains('Add Task').click();
        cy.get('#title').type('New Task');
        cy.get('#summary').type('Some Description')
        cy.get('.modal').contains('Add Task').click();

        cy.get('.backdrop').should('not.exist');
        cy.get('.modal').should('not.exist');

        cy.get('.task').should('have.length',1);
        cy.get('.task h2').contains('New Task');
        cy.get('.task p').contains('Some Description');
    });


    it('should validate user input', () => {
        cy.visit('http://192.168.1.7:5173/');
        cy.contains('Add Task').click();
        cy.get('.modal').contains('Add Task').click();
        cy.contains('Please provide values');
    });

    it('should filter tasks', () => {
        cy.visit('http://192.168.1.7:5173/');
        cy.contains("Add Task").click();

        //creating a new task
        cy.get('#title').type("New Task");
        cy.get('#summary').type("Some Description");
        cy.get('#category').select("urgent");
        cy.get('.modal').contains('Add Task').click();

        //task should be displayed
        cy.get(".task").should("have.length",1);

        //filter the tasks to moderate

        cy.get('#filter').select("moderate");
        cy.get('.task').should('have.length',0);

        //filter task to urgent - should display added task

        cy.get("#filter").select("urgent");
        cy.get(".task").should("have.length",1);

        //filter task to all - should display 1 task
        cy.get("#filter").select("all");
        cy.get(".task").should("have.length",1);

    });


    it('should add multiple tasks', () => {
        cy.visit('http://192.168.1.7:5173/');

        //create first task
        cy.contains("Add Task").click();
        cy.get('#title').type("task1");
        cy.get('#summary').type("description1");
        cy.get('.modal').contains('Add Task').click();

        //create second task
        cy.contains("Add Task").click();
        cy.get('#title').type("task2");
        cy.get('#summary').type("description2");
        cy.get('.modal').contains('Add Task').click();

        //searching tasks
        cy.get('.task').should('have.length',2);
        cy.get('.task').eq(0).contains('task1');
        cy.get('.task').eq(1).contains('task2');

    });
});