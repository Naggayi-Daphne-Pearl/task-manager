import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes here
import "bootstrap/dist/css/bootstrap.min.css";

// components
import AppBar from "./components/AppBar";
import Login from "./pages/auth/login";
import { AuthProvider } from "./contexts/User";
import Footer from "./components/Footer";
import TaskCreate from "./pages/tasks/TaskCreate";
import TaskDetail from "./pages/tasks/TaskDetail";
import TaskEdit from "./pages/tasks/TaskEdit";
import TaskList from "./pages/tasks/TaskList";
import Logout from "./pages/auth/logout";

function App() {
  const [tasks, setTasks] = useState([]);
  // Function to add a new task to the list
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <AppBar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/tasks" element={<TaskList tasks={tasks} />} />
            <Route
              path="/tasks/create"
              element={<TaskCreate addTask={addTask} />}
            />
            <Route path="/tasks/:taskId" element={<TaskDetail />} />
            <Route path="/tasks/:taskId/edit" element={<TaskEdit />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
