import useUsers from "./hooks/useUsers";
import userService from "./services/user-service";
import type { User } from "./services/user-service";

const UserList = () => {
  const { users, error, loader, setUsers, setError } = useUsers();
  // https://jsonplaceholder.typicode.com/users

  const deleteUser = (user: User) => {
    // user
    const originalUsers = [...users];

    setUsers(users.filter((u) => u.id != user.id));

    userService.delete(user).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    console.log("Add user");
    const originalUsers = [...users];
    const newUser = { id: 0, name: "John" };
    setUsers([newUser, ...users]);
    // call the API
    userService
      .add(newUser)
      .then((res) => {
        console.log(res.data);
        setUsers([res.data, ...users]);
      })
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    // user
    const originalUsers = [...users];

    //u.id == user.id ? {...u, name: u.name+"!!!"} : u

    const updatedUser = { ...user, name: user.name + "!!!" };

    setUsers(users.map((u) => (u.id == user.id ? updatedUser : u)));

    //https://jsonplaceholder.typicode.com/users/6
    userService.update(user).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <>
      <h3>UserList</h3>
      {error && <p className="alert alert-danger">{error}</p>}

      {loader && <div className="spinner-border"></div>}

      <button className="btn btn-success mb-3" onClick={addUser}>
        Add User
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li className="list-group-item d-flex justify-content-between" key={user.id}>
            {user.id} - {user.name}
            <div>
              <button className="btn btn-warning me-3" onClick={() => updateUser(user)}>
                Update
              </button>
              <button className="btn btn-danger" onClick={() => deleteUser(user)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;
