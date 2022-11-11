import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../actions";
import "./TodoItemDate.css";
import { useDrag } from 'react-dnd';
import { itemTypes } from "../enums";
import "./TodoItemDate2.css"
const TodoItemDate2 = ({ task, selectedDate }: any) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();
  const [updatedText, setUpdatedText] = useState('');
  const [editFlag, setEditFlag] = useState(true);
  const currentDate = new Date().toISOString().split("T")[0];

  if (task.date < currentDate) {
    setEditFlag(false);
  }

  function editItemToState(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(updateTodo({ task: updatedText, id: task.id, date: task.date, status: task.status }));
    setIsUpdate(false);
  }

  const [{ isDragging }, drag] = useDrag(() => ({
    type: itemTypes.TASK,
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
          Date: {task.date}
        </div>
        <div>
          Task: {task.task}
          {/* {editFlag ? <button className="ui button" onClick={() => setIsUpdate(true)}>Edit</button> : <button className="ui button" disabled onClick={() => setIsUpdate(true)}>Edit</button>}
          <button className="ui button" onClick={() => dispatch(deleteTodo(task.id))}>Delete</button> */}
        </div>
      </ div>
    );
  };

  return (
    <div id="completedDiv2">
      <div ref={drag}>
        {selectedDate === task.date && task.status === 'completed' ? <div id='completedDiv'>{isUpdate ? renderForm() : renderItem()}</div> : null}
      </div>
    </div>
  );
};

export default TodoItemDate2;