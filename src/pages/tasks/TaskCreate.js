import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function TaskCreate() {
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
    navigate("/tasks"); // Redirect to the task list after creating the task
  };

  return (
    <div>
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Due Date:</label>
          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">Create Task</button>
        </div>
      </form>
    </div>
  );
}

export default TaskCreate;
