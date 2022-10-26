import React, { useState } from "react";
import { addTask, showOnDate } from "../reducers";
import { useDispatch } from "react-redux";
import Calendar from "react-calendar";

const NewTask: React.FC = () => {
  const dispatch = useDispatch()
  const [newTask, setNewTask] = useState<string>("");
  const [taskDate, setTaskDate] = useState<string>("");

  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (!newTask || !taskDate) {
      alert("Enter task and date");
    } else {
      dispatch(addTask({ text: newTask, date: taskDate }));
      setNewTask("");
      setTaskDate("");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const handleTaskDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskDate(event.target.value);
  };

  const getDate = (event: any) => {
    const date = event.toISOString().split("T")[0];
    dispatch(showOnDate(date));
    console.log(event.toISOString().split("T")[0]);
  }

  return (
    <>
      <div>
        <Calendar onClickDay={getDate} />
      </div>
      <div>
        <form>
          <div>
            <label>
              Input Task
            </label>
            <br />
            <input
              type="text"
              value={newTask}
              onChange={handleChange}
            />
          </div>
          <input
            type="date"
            onChange={handleTaskDateChange}
            value={taskDate}
          />
          <button type="submit" onClick={handleSubmit}>
            Add Task
          </button>
        </form>
      </div>
    </>
  );
};

export default NewTask;