import {useState} from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList  from './Components/Users/UsersList';


function App() {
  const [usersList, setUsersList] = useState([]);

  const AddUserHandler = (userName, userAge) => {
    setUsersList(prevUsers => [...prevUsers, {name: userName, age: userAge, id: Math.random().toString()}]);
  }
  return (
    <div>
      <AddUser onAddUser = {AddUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;
