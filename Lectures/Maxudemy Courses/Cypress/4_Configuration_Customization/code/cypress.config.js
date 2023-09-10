import { defineConfig } from "cypress";

export default defineConfig({
  /**
   * @Desc Videos and Screenshots
   */
  //video - cnfigures whther video shuld be created when you run yur test
  //videosFolder - where video should be stored
  //screenshotOnRunFailure
  //screenshotsFolder

  /**
   * @timeout
   * 
   * use intellisense to see different types of timeout. there are timeouts to 
   *  wait for browser to load page, or to go back and forward
   *  wait fro api to give response
   *  wait for DOM query to timeout
   */
  //defaultCommandTimeout
  
  e2e: {
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      /**
       * @Desc
       * On allows us to listen to some events inside our test
       * and execute some code outisde browser where test runs.
       * 
       * use intellisense to see which kind of events you can listen to.
       * 
       * And this task feature can be a very useful feature especially when it comes to things like storing some data
        in a file, preparing a database for our testing environment.Then being able to run tasks like this with help of
        the task method and registering them here can be very useful.
       */
      on('task', {
        seedDatabase() {
          //run your nodejs code
          //e.g edit a file here
          return 3;
        }
      })
    },
  },
});
