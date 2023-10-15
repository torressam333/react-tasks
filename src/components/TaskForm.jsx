import '../assets/css/TaskForm.css';
import TaskTag from './TaskTag';

const TaskForm = () => {
  return (
    <header className='app_header'>
      <form>
        <input type='text' className='task_input' placeholder='Enter a task' />
        <div className='task_form_bottom_line'>
          <div>
            <TaskTag tagName='HTML' tagColor='dodgerblue' />
            <TaskTag tagName='CSS' />
            <TaskTag tagName='Node' />
            <TaskTag tagName='JavaScript' />
            <TaskTag tagName='React.js' />
          </div>
          <div>
            <select className='task_status'>
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
