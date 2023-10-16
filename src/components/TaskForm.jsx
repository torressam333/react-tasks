import '../assets/css/TaskForm.css';
import TaskTag from './TaskTag';
import { useState } from 'react';

const TaskForm = () => {
  const [taskData, setTaskData] = useState({
    task: '',
    status: 'todo',
    tags: [],
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

  console.log(taskData.tags);

  const selectTag = (tag) => {
    // Call use state setter
    setTaskData((prev) => {
      // Ternary to check if existing tags arr has the clicked tag
      const updatedTags = prev.tags.includes(tag)
        // If it does, remove it from array
        ? prev.tags.filter((item) => item !== tag)
        // Otherwise, return existing tags arr
        : [...prev.tags, tag];

      // Spread prev and add the updated (or unchanged) tags in it
      return { ...prev, tags: updatedTags };
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
            <TaskTag tagName='HTML' selectTag={selectTag} />
            <TaskTag tagName='CSS' selectTag={selectTag} />
            <TaskTag tagName='Node' selectTag={selectTag} />
            <TaskTag tagName='JavaScript' selectTag={selectTag} />
            <TaskTag tagName='React.js' selectTag={selectTag} />
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
