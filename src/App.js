import logo from "./logo.svg";
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

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <AppBar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/tasks" element={<TaskList />} />
            <Route path="/tasks/create" element={<TaskCreate />} />
            <Route path="/tasks/:taskId" element={<TaskDetail />} />
            <Route path="/tasks/:taskId/edit" element={<TaskEdit />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
