import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../actions";
import "./TodoItem.css";

const TodoItem = ({ task }: any) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();
  const [updatedText, setUpdatedText] = useState('');

  function editItemToState(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(updateTodo({ task: updatedText, id: task.id, date: task.date, time: task.time, status: task.status }));
    setIsUpdate(false);
  }

  const renderForm = () => {
    return (
      <div id="EditTodoItem">
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
      <div id="renderTodoItem">
        <div>
          Date: {task.date} <br></br>
          Time: {task.time} <br></br>
          Status: {task.status} <br></br>
          Task: {task.task}
          <button className="ui button" onClick={() => setIsUpdate(true)}>Edit</button>
          <button className="ui button" onClick={() => dispatch(deleteTodo(task.id))}>Delete</button>
        </div>
      </ div>
    );
  };

  return (
    <div>
      <div>{isUpdate ? renderForm() : renderItem()}</div>
    </div>
  );
};

export default TodoItem;