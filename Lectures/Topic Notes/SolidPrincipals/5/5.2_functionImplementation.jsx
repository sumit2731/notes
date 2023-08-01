// High-level module
const UserList = ({ dataSource }) => {
    const users = dataSource.getUsers();
  
    return (
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  };
  
  // Low-level module
  const API = () => {
    const getUsers = () => {
      // get users from API
    };
  
    return { getUsers };
  };
  
  // Low-level module
  const Database = () => {
    const getUsers = () => {
      // get users from database
    };
  
    return { getUsers };
  };