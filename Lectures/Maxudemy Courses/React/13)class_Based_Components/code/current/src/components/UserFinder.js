import { Fragment, useState, useEffect, Component } from 'react';
import classes from './UserFinder.module.css';
import Users from './Users';
import UsersContext from '../store/users-context';
import ErrorBoundary from './ErrorBundary';

const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
  ];

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
        
//         <div className = {classes.finder}>
//             <input type='search' onChange={searchChangeHandler} />
//         </div>
      
//         <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

class UserFinder extends Component {
    /**
     * @Desc Here we are saying that this component should have acces to this context. now we can access context via this.context.
     * If there are two contexts which should be connected to one at the same component, this would simply not be an option, you 
     * would have to find some other work around like wrapping it in a another component or anything like that.
     */
    static contextType = UsersContext;
    constructor() {
        super();
        this.state = {
            searchTerm: '',
            filteredUsers: []
        }
    }

    searchChangeHandler(event) {
        
        this.setState({
            searchTerm: event.target.value
        });
    }

    componentDidMount() {
        this.setState({
            filteredUsers: this.context.users
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.searchTerm !== this.state.searchTerm) {
            this.setState({
                filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm))
            });
        }
    }
    
    render() {
        
        return (
            <Fragment>
        
                <div className = {classes.finder}>
                    <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                </div>

                <ErrorBoundary>
                    <Users users={this.state.filteredUsers} />
                </ErrorBoundary>
            </Fragment>
        );
    }
}

export default UserFinder;