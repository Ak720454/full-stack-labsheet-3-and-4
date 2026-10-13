import { useState, useEffect } from 'react';
import AddTaskForm from './components/AddTaskForm.jsx';
import TaskList from './components/TaskList.jsx';

const STORAGE_KEY = 'lab3-tasks';

// Lazy initial state: read saved tasks from localStorage once on first render
function loadTasks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export default function App() {
  const [tasks, setTasks] = useState(loadTasks);       // useState: state

  // useEffect: persistence - runs whenever `tasks` changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  // Callback passed DOWN as props; child calls it to send data UP
  const addTask = (text) => {
    setTasks((prev) => [...prev, { id: Date.now(), text, done: false }]);
  };

  const toggleTask = (id) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const doneCount = tasks.filter((t) => t.done).length;

  return (
    <main className="app">
      <h1>React Todo List</h1>
      <AddTaskForm onAdd={addTask} existingTasks={tasks} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      <p className="count">
        {tasks.length ? `${doneCount} of ${tasks.length} completed` : 'No tasks yet.'}
      </p>
    </main>
  );
}
