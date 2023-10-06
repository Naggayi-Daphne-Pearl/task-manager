import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchedTasks = [
      { id: 1, title: "Task 1", description: "Description for Task 1" },
      { id: 2, title: "Task 2", description: "Description for Task 2" },
    ];
    setTasks(fetchedTasks);
  }, []);

  const handlePress = () => {
    navigate("/tasks/create");
  };

  return (
    <div className="container mt-4">
      <h2>Task List</h2>
      <ul className="list-group">
        {tasks.map((task) => (
          <li key={task.id} className="list-group-item">
            <Link to={`/tasks/${task.id}`} className="text-decoration-none">
              {task.title}
            </Link>
          </li>
        ))}
      </ul>
      <button className="btn btn-primary mt-3" onClick={() => handlePress()}>
        Create New Task
      </button>
    </div>
  );
}

export default TaskList;
