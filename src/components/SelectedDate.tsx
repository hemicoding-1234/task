import { useState } from "react";
import { useSelector } from "react-redux";
import TodoItemDate from "./TodoItemDate";

const SelectedDate = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const taskobj = useSelector((state: any) => state.todos.data);
  // console.log(taskobj);

  let value = '';
  const handleDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    value = event.target.value;
    setSelectedDate(value);
    // console.log('selected date is: ', value);
  }

  const matchedDatetaskobj = taskobj.map((task: any) => {
    return <TodoItemDate key={task.id} task={task} selectedDate={selectedDate} />;
  })

  return (
    <>
      <div>
        Selected Date Todos:
      </div>
      <div>
        <h2> Select the date</h2>
        <input
          type="date"
          id="calendar"
          onChange={handleDate}
        />
      </div>
      <div>
        {matchedDatetaskobj}
      </div>
    </>
  );
}

export default SelectedDate;