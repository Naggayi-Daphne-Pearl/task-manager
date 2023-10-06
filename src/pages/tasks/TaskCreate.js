import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TaskCreate({ addTask }) {
  const navigate = useNavigate();
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement task creation logic here (e.g., sending data to the server)
    console.log("Task created:", task);
    addTask(task);
    navigate("/tasks"); // Redirect to the task list after creating the task
  };

  return (
    <div className="container mt-4">
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={task.title}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={task.description}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dueDate" className="form-label">
            Due Date:
          </label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={task.dueDate}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskCreate;
