import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";
import cuid from "cuid";

export interface eachTask {
  task: string
  id: string,
  date: string,
  time: string,
  status: string
}

const AddTodo = () => {
  const [text, setText] = useState('');
  const [todoDate, setTodoDate] = useState('');
  const [todoTime, setTodoTime] = useState('');
  const dispatch = useDispatch();
  const currentDate = new Date().toISOString().split("T")[0];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todoDate < currentDate) {
      alert("Please enter correct date");
    } else {
      dispatch(addTodo({ task: text, id: cuid(), date: todoDate, time: todoTime, status: 'incomplete', }))
      setText('');
      setTodoDate('');
    }
  }

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoDate(event.target.value);
  }

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTime(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <div className="ui calendar" id="example1">
            <div className="ui input left icon">
              <i className="calendar icon"></i>
              <input
                type="date"
                onChange={handleDateChange}
                value={todoDate}
              />
              <input
                id="appt-time"
                type="time"
                name="appt-time"
                step={2}
                onChange={handleTimeChange}
                value={todoTime}
              />
            </div>
          </div>
          <div className="ui input focus">
            <input
              type="text"
              placeholder="Add the Task"
              onChange={(e) => handleInputChange(e)}
              value={text}
            />
          </div>
        </div>
        <button className="ui button" type="submit">Add The Task List</button>
      </form>
    </ div>
  )
}

export default AddTodo;