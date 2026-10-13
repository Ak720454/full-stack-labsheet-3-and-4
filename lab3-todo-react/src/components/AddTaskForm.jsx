import { useState } from 'react';

export default function AddTaskForm({ onAdd, existingTasks }) {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = text.trim();

    if (value === '') return setError('Task cannot be empty.');
    if (value.length < 3) return setError('Task must be at least 3 characters.');
    if (existingTasks.some((t) => t.text.toLowerCase() === value.toLowerCase()))
      return setError('This task already exists.');

    onAdd(value);          // props: send data to parent
    setText('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="row">
        <input
          type="text"
          value={text}
          placeholder="Enter a task..."
          aria-label="New task"
          maxLength={80}
          className={error ? 'invalid' : ''}
          onChange={(e) => { setText(e.target.value); setError(''); }}
        />
        <button type="submit">Add</button>
      </div>
      {error && <p className="error" role="alert">{error}</p>}
    </form>
  );
}
