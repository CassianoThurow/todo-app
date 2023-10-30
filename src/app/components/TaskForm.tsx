'use client'

import { useState } from 'react';

type Props = {
  onAddTask: (description: string, category: string) => void;
};

const TaskForm: React.FC<Props> = ({ onAddTask }) => {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Category1');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTask(description, category);
    setDescription('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="border p-2 flex-grow mr-2 text-black"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)} className="border p-2 mr-2 text-black">
        <option value="Category1">Category1</option>
        <option value="Category2">Category2</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white p-2">Add</button>
    </form>
  );
};

export default TaskForm;
