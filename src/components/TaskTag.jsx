import '../assets/css/TaskTag.css';

const TaskTag = ({ tagName, tagColor }) => {
  return (
    <button className='tag' style={{ background: tagColor }}>
      {tagName}
    </button>
  );
};

export default TaskTag;
