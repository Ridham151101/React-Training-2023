import React, { useEffect, useState } from "react";
import axios from "axios";
import CreateUserForm from "./CreateUserForm";

const API_URL = "https://reqres.in/api/users";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [creatingUser, setCreatingUser] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.log("Fetch error:", error);
        // Handle error or display an error message
      });
  }, []);

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleUpdate = (index) => {
    const editedUser = users[index];
    axios
      .put(`${API_URL}/${editedUser.id}`, editedUser)
      .then((response) => {
        console.log("Update response:", response.data);
        setEditingIndex(-1);
      })
      .catch((error) => {
        console.log("Update error:", error);
        // Handle error or display an error message
      });
  };

  const handleDelete = (userId) => {
    axios
      .delete(`${API_URL}/${userId}`)
      .then((response) => {
        console.log("Delete response:", response.data);
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
        setEditingIndex(-1);
      })
      .catch((error) => {
        console.log("Delete error:", error);
        // Handle error or display an error message
      });
  };

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers[index] = {
        ...updatedUsers[index],
        [name]: value,
      };
      return updatedUsers;
    });
  };

  const handleCreate = () => {
    const newUser = {
      ...formData,
      id: users.length + 1, // Generate a temporary unique ID
    };

    axios
      .post(API_URL, newUser)
      .then((response) => {
        console.log("Create response:", response.data);
        setCreatingUser(false);
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
        });
        setUsers((prevUsers) => [...prevUsers, newUser]);
      })
      .catch((error) => {
        console.log("Create error:", error);
        // Handle error or display an error message
      });
  };

  return (
    <div>
      <h2>User List</h2>
      <button onClick={() => setCreatingUser(true)}>Create User</button>
      {creatingUser && (
        <CreateUserForm
          formData={formData}
          setFormData={setFormData}
          handleCreate={handleCreate}
          setCreatingUser={setCreatingUser}
        />
      )}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                {editingIndex === index ? (
                  <input
                    type="text"
                    name="first_name"
                    value={user.first_name}
                    onChange={(event) => handleInputChange(event, index)}
                  />
                ) : (
                  user.first_name
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <input
                    type="text"
                    name="last_name"
                    value={user.last_name}
                    onChange={(event) => handleInputChange(event, index)}
                  />
                ) : (
                  user.last_name
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={(event) => handleInputChange(event, index)}
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <div>
                    <button onClick={() => handleUpdate(index)}>Submit</button>
                    <button onClick={() => setEditingIndex(-1)}>Cancel</button>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(user.id)}>
                      Delete
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
