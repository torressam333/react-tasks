import '../assets/css/TaskTag.css';

const TaskTag = ({ tagName, selectTag, selected }) => {
  const tagStyles = {
    HTML: { backgroundColor: '#fda821' },
    CSS: { backgroundColor: '#15d4c8' },
    Node: { backgroundColor: '#026e00' },
    React: { backgroundColor: 'rgb(20, 158, 202)' },
    default: { backgroundColor: '#f9f9f9' },
  };

  const addedStyles = selected ? tagStyles[tagName] : tagStyles.default;

  return (
    <button
      type='button'
      className='tag'
      style={addedStyles}
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
};

export default TaskTag;
