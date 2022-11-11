import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../actions";
import "./TodoItemDate.css";
import { useDrag } from 'react-dnd';
import { itemTypes } from "../enums";

const TodoItemDate = ({ task, selectedDate }: any) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();
  const [updatedText, setUpdatedText] = useState('');
  const [flagTimeDate, setFlagTimeDate] = useState(true);

  var currentTime = new Date().toLocaleTimeString();
  const currentDate = new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (task.time < currentTime || task.date < currentDate) {
      setFlagTimeDate(false);
    }
    console.log('time')
    currentTime = new Date().toLocaleTimeString();
  }, [currentTime])


  function editItemToState(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(updateTodo({ task: updatedText, id: task.id, date: task.date, time: task.time, status: task.status }));
    setIsUpdate(false);
  }

  const [{ isDragging }, drag] = useDrag(() => ({
    type: itemTypes.TASK,
    item: {
      id: task.id
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  const renderForm = () => {
    return (
      <div id="EditTodoItemDate">
        <form onSubmit={editItemToState}>
          <div className="ui input focus">
            <input
              onChange={e => setUpdatedText(e.target.value)}
              type="text"
              defaultValue={task.task}
            />
          </div>
          <button className="ui button" type='submit'>Edit Todo</button>
        </form>
      </div>
    );
  };

  const renderItem = () => {
    return (
      <div id="renderTodoItemDate">
        <div>
          Date: {task.date} <br></br>
          Time: {task.time} <br></br>
          Status: {task.status} <br></br>
        </div>
        <div>
          Task: {task.task}
          {flagTimeDate ? <button className="ui button" onClick={() => setIsUpdate(true)}>Edit</button> : <button className="ui button" disabled onClick={() => setIsUpdate(true)}>Edit</button>}
          {flagTimeDate ? <button className="ui button" onClick={() => dispatch(deleteTodo(task.id))}>Delete</button> : <button className="ui button" disabled={true} onClick={() => dispatch(deleteTodo(task.id))}>Delete</button>}
        </div>
      </ div>
    );
  };

  return (
    <div>
      <div ref={drag}>
        <br></br>
        {/* Current time : {currentTime} */}
        <br></br>
        {selectedDate === task.date && task.status === 'incomplete' ? <div id="selectedDateID">{isUpdate ? renderForm() : renderItem()}</div> : null}
      </div>
    </div>
  );
};

export default TodoItemDate;