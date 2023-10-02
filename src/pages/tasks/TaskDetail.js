import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function TaskDetail() {
  const { taskId } = useParams(); // Get the task ID from the URL parameter
  const [task, setTask] = useState(null);

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

  return (
    <div>
      <h2>Task Detail</h2>
      <p>Title: {task.title}</p>
      <p>Description: {task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <button>Edit</button>
    </div>
  );
}

export default TaskDetail;
