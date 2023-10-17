import '../assets/css/TaskCard.css';
import TaskTag from './TaskTag';
import deleteIcon from '../assets/delete.png';

const TaskCard = () => {
  return (
    <article className='task_card'>
      <p className='task_text'>Sample Text</p>
      <div className='task_card_bottom_line'>
        <div className='task_card_tags'>
          <TaskTag tagName='HTML' />
          <TaskTag tagName='CSS' />
        </div>
        <div className='task_delete'>
          <img src={deleteIcon} alt='Delete Icon Png' className='delete_icon' />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
