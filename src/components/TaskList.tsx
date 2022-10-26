import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTask, deleteTask } from "../reducers";

interface Task {
  id: string;
  text: string;
  date: string;
}

const getFilteredTasks = (tasks: Task[], selectedDate: string | null) => {
  if (!selectedDate) {
    return tasks;
  }
  return tasks.filter((task) => task.date === selectedDate);
};

const TaskList: React.FC = () => {
  const dispatch = useDispatch()
  const tasks = useSelector((state: any) => state.tasks.tasks);


  const [isedit, setIsEdit] = useState<boolean>(false);
  const [editedValue, setEditedValue] = useState<string>("");
  const [ID, setID] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  let currentDate = new Date().toISOString().split("T")[0];

  const selectedDate = useSelector((state: any) => state.tasks.selectedDate);


  const filteredTasks = getFilteredTasks(tasks, selectedDate);

  const onEditTask = (ID: string, date: string) => {
    if (date < currentDate) {
      setIsEdit(false);
    }
    setIsEdit(true);
    setID(ID);
    setIndex(tasks.findIndex((x: any) => x.id === ID));
  };

  const onSave = () => {
    if (editedValue) {
      dispatch(editTask({ id: ID, text: editedValue, index: index }));
      setIsEdit(false);
    }
    setIsEdit(false);
  };

  const onEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedValue(event.target.value);
  };

  const onDeleteTask = (taskId: string) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <ul>
      {filteredTasks.map((task) => (
        <li key={task.id}>
          <>
            {isedit && task.id === ID ? (
              <input onChange={onEdit}></input>
            ) : (
              <p>{task.text}</p>
            )}
            <span>{task.date}</span>
          </>
          <div id="buttons">
            {isedit && task.id === ID && (
              <button onClick={onSave}>
                Save
              </button>
            )}
            <button
              onClick={() => onEditTask(task.id, task.date)}
            >
              Edit
            </button>
            <button onClick={() => onDeleteTask(task.id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
