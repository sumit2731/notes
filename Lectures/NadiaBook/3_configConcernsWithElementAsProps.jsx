//KeyPoints -

/*     
    When a component renders another component, the configuration of which is controlled by props, we can pass the entire component 
        element as a prop instead, leaving the configuration concerns to the consumer. 
        
*/          const Button = ({ icon }) => {
                return <button>Submit {icon}</button>;
            };
            
            // large red Error icon
            <Button icon={<Error color="red" size="large" />} />;
/* 
    If a component that has elements as props is rendered conditionally, then even if those elements are created outside of the 
        condition, they will only be rendered when the conditional component is rendered. 
*/
        const App = () => {
            // footer will be rendered only when the dialog itself renders // after isDialogOpen is set to "true"
            const footer = <Footer />;
        return isDialogOpen ? 
            ( <ModalDialog footer={footer} />) 
            : null; };
/* 
    1)If we need to provide default props to the element from props, we can use the cloneElement function for that.
    2)This pattern, however, is very fragile. It's too easy to make a mistake there, so use it only for very simple cases. 

*/

