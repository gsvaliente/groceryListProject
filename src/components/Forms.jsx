import { useState } from 'react';
import { toast } from 'react-toastify';

export const Forms = ({ onAddTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) {
      toast.error('Field Is Empty 🫥');
      return;
    }
    onAddTask(task);
    setTask('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          className="form-input"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit" className="btn">
          Add Item
        </button>
      </div>
    </form>
  );
};
