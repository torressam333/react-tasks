import '../assets/css/TaskColumn.css';
import TaskCard from './TaskCard';

const TaskColumn = ({ title, icon }) => {
  return (
    <section className='task_column'>
      <h2 className='task_column_heading'>
        <img src={icon} alt={icon} className='task_column_icon' />
        {title}
      </h2>
      <TaskCard />
    </section>
  );
};

export default TaskColumn;
