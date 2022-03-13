import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greetings from './Greetings';
import Output from './Output';



describe('Greetings Component',() => {
    
    test('renders "hello world" as text', () => {
    
    
        /**
         * @Arrange - setup the test data,test conditions and test envirenment
         * here we render the component
         */
        render(<Greetings></Greetings>);
    
        /**
         * @Act - Run logic that should be tested(eg execute a function )
         *we do thing that we actually want to test. if we want to simulate a button lcick , we do that as a second step
         * 
         */
    
        //here nothing
    
       /**
        * @Assertion - we want to have a look at output that's visible in browser and then see if that mar=tches our expectations
        * here we want to have a have look at simulated DOM(made by render fucntion) and find a element. if it is found test is passed
        * otherwose it is failed
        */
       
       /**
        * screen gives us access to this virtual screen or simulated/virtual  DOM that is rendered./we use to find elements on screen.
        * for that we have 3 kinds of functions -
        * get - error if no element found
        * query - return null if no element found
        * find - Returns a Promise which resolves when an element is found which matches the given query. The promise is rejected if no element
        *  is found or if more than one element is found after a default timeout of 1000ms. If you need to find more than one element
        * 
        * https://testing-library.com/docs/queries/about/#screen
        */
       //exact: true means cases wnt be match and substrgs will also be matched
       //screen.getAllByText('Hello World', {exact: true});
       const helloWorldElement = screen.getByText('Hello World!');
       /**
        * expect is global function to hich we can pass our testing result valuethat can be anything a number, a string or DOM node.
        * and on result of this expect function we can call various matchers like tobeInTheDocument which check if HTML element is n document.
        * you can also check opposite of matcher by adding .not and then your matching functions
        */
       expect(helloWorldElement).toBeInTheDocument();
       
    });

    test('renders "good to see you" if button was not clicked', () => {
        render(<Greetings></Greetings>);
        let paragraphElement = screen.getByText('good to see you', {exact: false});
        expect(paragraphElement).toBeInTheDocument();
    });

    test('renders "Changed!" if button was clicked', () =>{
        render(<Greetings></Greetings>);
        let button = screen.getByText('Change Text!');
        /**
         * @UserEvent is object that helps us to trigger user events in this virtual screen.
         * userClick."eventName"
         */
        userEvent.click(button);
        let paragraphElement = screen.getByText('Changed');
        expect(paragraphElement).toBeInTheDocument();
    });
    
    test('does not render "good to see you" if button was clicked', () =>{
        render(<Greetings></Greetings>);
        let button = screen.getByText('Change Text!');
        /**
         * @UserEvent is object that helps us to trigger user events in this virtual screen.
         * userClick."eventName"
         */
        userEvent.click(button);
        let paragraphElement = screen.queryByText('good to see you', {exact: false});
        expect(paragraphElement).toBeNull();
    });
});