import { Fragment, useReducer } from "react";
import Todolists from "./Todolists";
import "./App.css";

const initialState = {
  inputItem: "",
  toDos: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_INPUT_ITEM":
      return { ...state, inputItem: action.payload };
    case "ADD_TODO":
      return {
        ...state,
        toDos: [
          ...state.toDos,
          { status: false, title: state.inputItem }
        ],
        inputItem: ""
      };
    case "CHANGE_STATUS":
      return {
        ...state,
        toDos: state.toDos.map((item, index) => {
          if (index === action.payload) {
            return {
              ...item,
              status: !item.status,
            };
          }
          return item;
        })
      };
    case "EDIT_TODO":
      return {
        ...state,
        toDos: state.toDos.map((item, index) => {
          if (index === action.payload.index) {
            return {
              ...item,
              title: action.payload.title,
            };
          }
          return item;
        })
      };
    case "DELETE_TODO":
      return {
        ...state,
        toDos: state.toDos.filter((_, index) => index !== action.payload)
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { inputItem, toDos } = state;

  const inputItems = (event) => {
    dispatch({ type: "SET_INPUT_ITEM", payload: event.target.value });
  };

  const createToDo = () => {
    dispatch({ type: "ADD_TODO" });
  };

  const changeStatus = (index) => {
    dispatch({ type: "CHANGE_STATUS", payload: index });
  };

  const editItem = (title, index) => {
    dispatch({ type: "EDIT_TODO", payload: { title, index } });
  };

  const deleteTodo = (index) => {
    dispatch({ type: "DELETE_TODO", payload: index });
  };

  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <h1>ToDo List</h1>
          <input
            type="text"
            placeholder="Enter the todo"
            onChange={inputItems}
            value={inputItem}
          />
          <button onClick={createToDo}>Create</button>
          <Todolists
            items={toDos}
            deleteTodo={deleteTodo}
            changeStatus={changeStatus}
            editItem={editItem}
          />
        </div>
      </div>
    </>
  );
}

export default App;
