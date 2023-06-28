import { useState } from 'react';
import './App.css'

function App() {

  const [formElement, setFormElement] = useState({
    fname: '',
    lname: '',
    email: '',
  });

  const userInput = (event) => {
    const {name, value} = event.target;

    setFormElement((preValue) => {
      return {
        ...preValue,
        [name]: value,
      }
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("form submitted");
  };

  return (
    <>
      <div className="main-container">
        <h1 className='heading'>Hello {formElement.fname} {formElement.lname} </h1>
        <h3>{formElement.email}</h3>
        <form className='form' onSubmit={handleSubmit} >
          <input type='text' name='fname' placeholder='Type your First Name' onChange={userInput} value={formElement.fname} />
          <input type='text' name='lname' placeholder='Type your Last Name' onChange={userInput} value={formElement.lname} />
          <input type='email' name='email' placeholder='Enter your Email' onChange={userInput} value={formElement.email} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
