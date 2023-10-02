import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TaskList() {
  // Mocked tasks data
  const [tasks, setTasks] = useState([]);

  // Simulate fetching tasks from your database or API
  useEffect(() => {
    // Fetch tasks and update the tasks state
    const fetchedTasks = [
      { id: 1, title: "Task 1", description: "Description for Task 1" },
      { id: 2, title: "Task 2", description: "Description for Task 2" },
    ];
    setTasks(fetchedTasks);
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/tasks/${task.id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
