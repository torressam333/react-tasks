import '../assets/css/TaskForm.css';
import TaskTag from './TaskTag';
import { useState } from 'react';

const TaskForm = () => {
  const [taskData, setTaskData] = useState({
    task: '',
    status: 'todo',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaskData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(taskData);
  };

  return (
    <header className='app_header'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type='text'
          className='task_input'
          placeholder='Enter a task'
          onChange={handleChange}
          name='task'
        />
        <div className='task_form_bottom_line'>
          <div>
            <TaskTag tagName='HTML' tagColor='dodgerblue' />
            <TaskTag tagName='CSS' />
            <TaskTag tagName='Node' />
            <TaskTag tagName='JavaScript' />
            <TaskTag tagName='React.js' />
          </div>
          <div>
            <select
              className='task_status'
              onChange={handleChange}
              name='status'
            >
              <option value='todo'>To Do</option>
              <option value='in-progress'>In Progress</option>
              <option value='done'>Done</option>
            </select>
            <button type='submit' className='task_submit'>
              Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
