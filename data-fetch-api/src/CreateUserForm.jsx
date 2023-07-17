const CreateUserForm = ({
  formData,
  setFormData,
  handleCreate,
  setCreatingUser,
}) => {
  return (
    <div>
      <h3>Create User</h3>
      <input
        type="text"
        name="first_name"
        value={formData.first_name}
        onChange={(event) =>
          setFormData({ ...formData, first_name: event.target.value })
        }
        placeholder="First Name"
      />
      <input
        type="text"
        name="last_name"
        value={formData.last_name}
        onChange={(event) =>
          setFormData({ ...formData, last_name: event.target.value })
        }
        placeholder="Last Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
        placeholder="Email"
      />
      <button onClick={handleCreate}>Submit</button>
      <button onClick={() => setCreatingUser(false)}>Cancel</button>
    </div>
  );
};

export default CreateUserForm;
