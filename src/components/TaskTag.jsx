import '../assets/css/TaskTag.css';

const TaskTag = ({ tagName, tagColor, selectTag }) => {
  return (
    <button
      type='button'
      className='tag'
      style={{ background: tagColor }}
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
};

export default TaskTag;
