import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";
import cuid from "cuid";

export interface eachTask {
  task: string
  id: string,
  date: string
}

const AddTodo = () => {
  const [text, setText] = useState('');
  const [todoDate, setTodoDate] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo({ task: text, id: cuid(), date: todoDate }))
    setText('');
    setTodoDate('');
  }

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoDate(event.target.value);
  }

  return (
    <>
      {/* <div>
        <h2> Select the date</h2>
        <input
          type="date"
        />
      </div> */}
      <br></br>
      <div>
        <form onSubmit={handleFormSubmit}>
          <input
            type="date"
            onChange={handleDateChange}
            value={todoDate}
          />
          <input
            type="text"
            name="userInput"
            placeholder="Enter what you want to add"
            onChange={(e) => handleInputChange(e)}
            value={text}
          />
          <button type="submit">Add The Task List</button>
        </form>
      </div>
    </>

  )
}

export default AddTodo;