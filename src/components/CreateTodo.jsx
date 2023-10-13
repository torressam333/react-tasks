import { useState } from 'react';
import debounce from '../utils/debounce';

const CreateTodo = () => {
  const [taskCount, setTaskCount] = useState(0);
  const [task, setTask] = useState('');
  const [allTasks, setAllTasks] = useState([]);

  const handleClick = () => {
    setTaskCount(taskCount + 1);
    setAllTasks([...allTasks, task]);
    setTask('');
  };

  const handleChange = debounce((value) => {
    setTask(value);
  }, 300);

  return (
    <>
      <h1>Task: {taskCount}</h1>
      <input
        type='text'
        placeholder='Enter task'
        onChange={(e) => handleChange(e.target.value)}
      />
      <button onClick={handleClick}>Add Task</button>

      <div>
        {allTasks.length > 0 ? (
          <ul>
            {allTasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        ) : (
          <p>No tasks to display</p>
        )}
      </div>
    </>
  );
};

export default CreateTodo;
