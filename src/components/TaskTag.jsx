import '../assets/css/TaskTag.css';

const TaskTag = () => {
  const tags = ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Jest'];

  return (
    <div>
      {tags.map((tag, index) => (
        <button key={index} className='tag'>
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TaskTag;
