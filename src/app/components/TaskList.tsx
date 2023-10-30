'use client'

import { TaskType } from '../page';  // Import the TaskType from the main page.

type Props = {
  tasks: TaskType[];
  onToggleCompletion: (id: number) => void;
};

const TaskList: React.FC<Props> = ({ tasks, onToggleCompletion }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className="mb-2">
          <input 
            type="checkbox" 
            checked={task.isCompleted} 
            onChange={() => onToggleCompletion(task.id)} 
            className="mr-2"
          />
          <span className={task.isCompleted ? 'line-through' : ''}>
            {task.description} ({task.category})
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
