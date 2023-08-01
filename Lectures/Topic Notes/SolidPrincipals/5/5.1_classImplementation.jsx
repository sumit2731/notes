// High-level module
class UserList {
  constructor(dataSource) {
    this.dataSource = dataSource;
    this.users = this.dataSource.getUsers();
  }

  render() {
    return (
      <ul>
        {this.users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }
}

// Low-level module
class API {
  getUsers() {
    // get users from API
  }
}

// Low-level module
class Database {
  getUsers() {
    // get users from database
  }
}
