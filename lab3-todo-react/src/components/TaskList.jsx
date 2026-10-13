import TaskItem from './TaskItem.jsx';

export default function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) return null;

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}
