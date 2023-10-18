import '../assets/css/TaskForm.css';
import TaskTag from './TaskTag';
import { useState } from 'react';

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: '',
    status: 'todo',
    tags: [],
  });

  const [formError, setFormError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (value) setFormError(null);

    setTaskData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const doesTagExist = (tag) => taskData.tags.includes(tag);

  const selectTag = (tag) => {
    // Call use state setter
    setTaskData((prev) => {
      // Ternary to check if existing tags arr has the clicked tag
      const updatedTags = doesTagExist(tag)
        ? // If it does, remove it from array
          prev.tags.filter((item) => item !== tag)
        : // Otherwise, return existing tags arr
          [...prev.tags, tag];

      // Spread prev and add the updated (or unchanged) tags in it
      return { ...prev, tags: updatedTags };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskData.task) {
      setFormError('Missing Task Data');

      return;
    }

    // Add newly created task to tasks array in parent
    setTasks((prev) => [...prev, taskData]);

    setTaskData({
      task: '',
      status: 'todo',
      tags: [],
    });
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
          value={taskData.task}
        />
        {formError && <span style={{ color: 'red' }}>{formError}</span>}
        <div className='task_form_bottom_line'>
          <div>
            <TaskTag
              tagName='HTML'
              selectTag={selectTag}
              selected={doesTagExist('HTML')}
            />
            <TaskTag
              tagName='CSS'
              selectTag={selectTag}
              selected={doesTagExist('CSS')}
            />
            <TaskTag
              tagName='Node'
              selectTag={selectTag}
              selected={doesTagExist('Node')}
            />
            <TaskTag
              tagName='React'
              selectTag={selectTag}
              selected={doesTagExist('React')}
            />
          </div>
          <div>
            <select
              className='task_status'
              onChange={handleChange}
              name='status'
              value={taskData.status}
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
