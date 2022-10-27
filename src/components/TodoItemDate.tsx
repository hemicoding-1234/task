import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../actions";

const TodoItemDate = ({ task, selectedDate }: any) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();
  const [updatedText, setUpdatedText] = useState('');

  function editItemToState(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(updateTodo({ task: updatedText, id: task.id, date: task.date }));
    setIsUpdate(false);
  }

  const renderForm = () => {
    return (
      <form onSubmit={editItemToState}>
        <input onChange={e => setUpdatedText(e.target.value)} type='text' defaultValue={task.task} />
        <button type='submit'>Edit Todo</button>
      </form>
    );
  };

  const renderItem = () => {
    return (
      <>
        <div>
          Date: {task.date}
        </div>
        <div>
          Task: {task.task}
          <button onClick={() => setIsUpdate(true)}>Edit</button>
          <button onClick={() => dispatch(deleteTodo(task.id))}>Delete</button>
        </div>
      </>
    );
  };

  return (
    <div>
      <br></br>
      <>
        {selectedDate === task.date ? <div>{isUpdate ? renderForm() : renderItem()}</div> : null}
      </>
    </div>
  );
};

export default TodoItemDate;