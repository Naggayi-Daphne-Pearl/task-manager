import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function TaskEdit() {
  const { taskId } = useParams(); // Get the task ID from the URL parameter
  const navigate = useNavigate();
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

  // Simulate fetching the current task details based on taskId
  useEffect(() => {
    // Fetch task details and update the task state
    const fetchedTask = {
      id: taskId,
      title: "Task 1",
      description: "Description for Task 1",
      dueDate: "2023-12-31",
    };
    setTask(fetchedTask);
  }, [taskId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement task update logic here (e.g., sending updated data to the server)
    console.log("Task updated:", task);
    navigate(`/tasks/${taskId}`); // Redirect to the task detail page after updating
  };

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Edit Task</h2>
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
          <button type="submit">Update Task</button>
        </div>
      </form>
    </div>
  );
}

export default TaskEdit;
