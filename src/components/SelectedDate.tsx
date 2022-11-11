import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItemDate from "./TodoItemDate";
import TodoItemDate2 from "./TodoItemDate2";
import "./SelectedDate.css";
import { useDrop } from "react-dnd";
import { itemTypes } from "../enums";
import { onDrop } from "../actions";

interface ITEM {
  id: string
}

const SelectedDate = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const taskobj = useSelector((state: any) => state.todos.data);
  const dispatch = useDispatch();
  let value = '';
  const handleDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    value = event.target.value;
    setSelectedDate(value);
  }

  const matchedDatetaskobj = taskobj.map((task: any) => {
    return (
      <div id="selectedDateTask">
        <TodoItemDate key={task.id} task={task} selectedDate={selectedDate} />
      </div>
    )
  })

  const matchedDatetaskobjCompleted = taskobj.map((task: any) => {
    console.log('dropping')
    return (
      <div id="selectedDateTask">
        <TodoItemDate2 key={task.id} task={task} selectedDate={selectedDate} />
      </div>
    )
  })

  const completedTask = (id: string) => {
    dispatch(onDrop(id))
  }

  const [, drop] = useDrop(() => ({
    accept: itemTypes.TASK,
    drop: (item: ITEM, monitor) => {
      console.log('item is: ', item)
      completedTask(item.id)
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isOver()
    })
  }))

  return (
    <div id="hi">
      <div>
        <h2> Select the date</h2>
        <div className="ui calendar" id="dateDiv">
          <div className="ui input left icon">
            <i className="calendar icon"></i>
            <input
              type="date"
              id="calendar"
              onChange={handleDate}
            />
          </div>
        </div>
      </div>
      <div>
        {matchedDatetaskobj}
      </div>
      <br></br>
      <div ref={drop} id="completedTask">
        Completed Tasks:
        {matchedDatetaskobjCompleted}
      </div>
    </div>
  );
}

export default SelectedDate;