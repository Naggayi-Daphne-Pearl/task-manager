import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function TaskDetail() {
  const { taskId } = useParams(); // Get the task ID from the URL parameter
  const [task, setTask] = useState(null);
  const navigate = useNavigate();

  // Simulate fetching task details based on taskId
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

  if (!task) {
    return <div>Loading...</div>;
  }

  const handlePress = (e) => {
    navigate("/tasks/:taskId/edit");
  };

  return (
    <div className="container mt-4">
      <h2>Task Detail</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{task.title}</h5>
          <p className="card-text">{task.description}</p>
          <p className="card-text">Due Date: {task.dueDate}</p>
          <button className="btn btn-primary" onClick={() => handlePress()}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskDetail;
