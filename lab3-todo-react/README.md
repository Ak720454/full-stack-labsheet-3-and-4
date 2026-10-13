# Lab 3 - Introduction to React.js (Todo App)

**Aim:** Build a component-based front end using React.

## Run
```
npm install
npm run dev
```
Open the URL shown (usually http://localhost:5173).

## Tasks covered
| Task | Where |
|---|---|
| 1. Vite React app | `package.json`, `vite.config.js`, `index.html` |
| 2. Components TaskList, TaskItem, AddTaskForm | `src/components/` |
| 3. useState + useEffect (persistence) | `src/App.jsx` (tasks + localStorage), `AddTaskForm.jsx` (text, error) |
| 4. Props parent <-> child | `onAdd`, `onToggle`, `onDelete`, `tasks`, `task` |

## Component tree
```
App                      (state: tasks)
 |-- AddTaskForm         (props: onAdd, existingTasks)
 |-- TaskList            (props: tasks, onToggle, onDelete)
      |-- TaskItem x N   (props: task, onToggle, onDelete)
```
Diagram image: `component-tree.svg`

## Data flow
- Data goes **down** via props (tasks, task).
- Events go **up** via callback props (onAdd, onToggle, onDelete).
