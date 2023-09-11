import { defineConfig } from 'cypress';

import { seed } from './prisma/seed-test';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      /**
       * And then also very important at the end you should return null here
        because you have to return a value from inside your task methods
        for this cy.task call here to succeed
       */
      on('task', {
        async seedDatabase() {
          await seed();
          return null;
        }
      })
    },
  },
});
