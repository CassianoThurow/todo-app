'use client'

import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

export type TaskType = {
  id: number;
  description: string;
  category: string;
  isCompleted: boolean;
};

export default function Home() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const addTask = (description: string, category: string) => {
    const newTask = {
      id: Date.now(),
      description,
      category,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do App</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onToggleCompletion={toggleTaskCompletion} />
    </div>
  );
}
