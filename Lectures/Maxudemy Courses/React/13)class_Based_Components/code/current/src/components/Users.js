import { useState,Component}  from 'react';
import User from './User';

import classes from './Users.module.css';



// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

class Users extends Component {
  /**
   * @Desc Constructor is used to define the state. In class Based Components state is always a object. its name also needs
   * to be the 'state'. name is not upto you. so we have one state  object which groups all pieces of state togather. 
   * To change the state you have to call setState function.
   */
  constructor () {
    super();
    this.state = {
      showUsers: true
    };
  }

  componentDidUpdate() {
    if(this.props.users.length === 0) {
      throw new Error('No User Provided');
    }
  }
  toggleUsersHandler () {
    //this.state.showUsers = false; //not
    /**
     * This obect will  merge with the new state with existing state, it will not overwrite the existing state.
     * useStae hook overwrites the existing state with new argument.
     * 
     * if you want to derive the new state from existing state then pass function to setState isntead of object.
     * this function should always return a object. this object will ve merged with current state to get new State.
     */
    this.setState(curState => ({
      showUsers: !curState.showUsers
    }));
  }
  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return (
      <div className = {classes.users}>
        <button onClick = {this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;
