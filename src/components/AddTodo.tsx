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

  // return (
  //   <form className="ui form" onSubmit={handleFormSubmit}>
  //     <div className="ui calendar" id="example1">
  //       <div className="ui input left icon">
  //         <i className="calendar icon"></i>
  //         <input
  //           type="date"
  //           onChange={handleDateChange}
  //           value={todoDate}
  //         />
  //       </div>
  //     </div>
  //     <div className="ui input focus">
  //       <input
  //         type="text"
  //         placeholder="Add the Task"
  //         onChange={(e) => handleInputChange(e)}
  //         value={text}
  //       />
  //     </div>
  //     <div>
  //       <button className="ui button" type="submit">Add The Task List</button>
  //     </div>
  //   </form>
  // )
  return (
    <>
      <br></br>
      <div>
        <form onSubmit={handleFormSubmit}>
          <div className="ui calendar" id="example1">
            <div className="ui input left icon">
              <i className="calendar icon"></i>
              <input
                type="date"
                onChange={handleDateChange}
                value={todoDate}
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
          <button className="ui button" type="submit">Add The Task List</button>
        </form>
      </div>
    </>

  )
}

export default AddTodo;