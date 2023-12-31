import '../assets/css/TaskCard.css';
import TaskTag from './TaskTag';
import deleteIcon from '../assets/delete.png';

const TaskCard = ({ title, tags, handleDelete, taskIndex }) => {
  return (
    <article className='task_card'>
      <p className='task_text'>{title}</p>
      <div className='task_card_bottom_line'>
        <div className='task_card_tags'>
          {tags.map((tag, index) => (
            <TaskTag key={index} tagName={tag} selected={true} />
          ))}
        </div>
        <div className='task_delete' onClick={() => handleDelete(taskIndex)}>
          <img src={deleteIcon} alt='Delete Icon Png' className='delete_icon' />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
