export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={task.done ? 'done' : ''}>
      <input
        type="checkbox"
        checked={task.done}
        aria-label="Mark done"
        onChange={() => onToggle(task.id)}
      />
      <span>{task.text}</span>
      <button className="del" onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
}
