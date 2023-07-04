import { Fragment, useState } from "react";
import "./Todolists.css";

const Todolists = ({ items, deleteTodo, changeStatus, editItem }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [updatedValue, setUpdatedValue] = useState("");

  const changeItem = (index) => {
    setEditIndex(index);
    setUpdatedValue(items[index].title);
  };

  const handleInputChange = (e) => {
    setUpdatedValue(e.target.value);
  };

  const handleUpdateClick = (index) => {
    editItem(updatedValue, index);
    setEditIndex(null);
  };

  return (
    items.map((item, index) => (
      <Fragment key={index}>
        {editIndex === index ? (
          <div className="todo-input">
            <input type="text" onChange={handleInputChange} value={updatedValue} />
            <button onClick={() => handleUpdateClick(index)}>Update</button>
          </div>
        ) : (
          <>
            {item.status ? (
              <div className="todo-title completed">{item.title}</div>
            ) : (
              <div className="todo-title in-progress">{item.title}</div>
            )}
            <div className="todo-status">
              <label>
                <input
                  type="checkbox"
                  checked={item.status}
                  onChange={() => changeStatus(index)}
                />
                {item.status ? "Completed" : "In Progress"}
              </label>
            </div>
            <button className="todo-button" onClick={() => deleteTodo(index)}>
              Delete
            </button>
            <button className="todo-button" onClick={() => changeItem(index)}>
              Edit
            </button>
          </>
        )}
      </Fragment>
    ))
  );
}

export default Todolists;
