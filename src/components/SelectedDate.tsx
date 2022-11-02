import { useState } from "react";
import { useSelector } from "react-redux";
import TodoItemDate from "./TodoItemDate";
// import "./SelectedDate.css";

const SelectedDate = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const taskobj = useSelector((state: any) => state.todos.data);

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
    </div>
  );
}

export default SelectedDate;