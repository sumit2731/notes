import {createAction, props} from "@ngrx/store";
import {User} from './model/user.model';

/*  
It receives couple of rguments only first one is mandatory which is type of action. this is valid action-
    export const login = createAction("");

Now instead of doing this we are going to define this action type string by following a very specific convention.
    
    So first at the beginning of the action type between square brackets we are going to define the source of the 
        action in the application.So we are going to define here, the place in the application where the action is getting 
        dispatched. So this means that in general we should not be dispatching the same action in multiple screens and 
        components of our application. For example,this action should only be dispatched by the login page and by no other 
        part of the application.

    export const login = createAction("[Login Page]");

So here between square brackets we simply put log in page which is the source of this action. This is going to be very useful 
    because later on we are going to have an action log and we would like to be able to identify just by looking at an action in 
    our action log where that action is coming from.

Now the second part of the action is going to be either the event or the command that the action corresponds to.
    So in this case this is an event that we are reporting to the store. We are informing the store that the user has 
    logged in

    export const login = createAction("[Login Page] User Login");

now after defining the mandatory action type we will also like to define in a type safe way the content of the payload of 
    the action.So here in our action definition we are going to add here a second argument which is a call to the utility
    function props from ngRx.So this function doesn't take any arguments but it does take here one generic parameter.
    So these generic parameter is the type of the payload associated to this action. so payload has only one proeprty 
    called user whose type is also called User.

    export const login = createAction("[Login Page] User Login", props<{user: User}>());

Now here is one important thing about this login constant that we have just defined. This is actually not the type 
    definition for the "User Login" action.Instead this is what is known as an "Action Creator".So "log in" is not the 
    definition of a class.It's actually a function that we need to call in order to create a new log in action.

We can see login is actually a function, it's an action creation function that we need to call by passing in the optional 
    payload of the action.so we create new action like this-

    const newLogInAction = login(
        {
            user: {id: 1,email: "test@angular-university.io"}
        }
    );

    it crate action, which is object like this-
    {
        type: "[Login Page] User Login"
        user: {id: 1, email: "test@angular-university.io"}
    }
*/
export const login = createAction("[Login Page] User Login", props<{user: User}>());

/* 
So these logout action will only be issued here by the top menu and nothing more.
And here on the second part we're going to simply report what has happened.
So the user has logged out.
So this is another example of an action which is actually an event we are reporting something that a
component knows that has happened locally.

So we know we have here two different actions that are related.So we would like to group these actions so that we can 
    access them all easily.We are going to do that just by using some plain typescript.
*/
export const logout = createAction("[Top Menu] Logout");