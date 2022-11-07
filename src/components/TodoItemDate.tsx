import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../actions";
import "./TodoItemDate.css";

const TodoItemDate = ({ task, selectedDate }: any) => {
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

  const dragStared = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    console.log('drag started')
    e.dataTransfer.setData("id", id)
  }

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
          {editFlag ? <button className="ui button" onClick={() => setIsUpdate(true)}>Edit</button> : <button className="ui button" disabled onClick={() => setIsUpdate(true)}>Edit</button>}
          <button className="ui button" onClick={() => dispatch(deleteTodo(task.id))}>Delete</button>
        </div>
      </ div>
    );
  };

  return (
    <div>
      <div draggable onDragStart={(e) => dragStared(e, task.id)}>
        <br></br>
        <>
          {selectedDate === task.date ? <div>{isUpdate ? renderForm() : renderItem()}</div> : null}
        </>
      </div>
    </div>
  );
};

export default TodoItemDate;