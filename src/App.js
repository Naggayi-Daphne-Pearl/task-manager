import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes here
import "bootstrap/dist/css/bootstrap.min.css";

// components
import AppBar from "./components/AppBar";
import Login from "./pages/auth/login";
import { AuthProvider } from "./contexts/User";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <AppBar />
          <Routes>
            {" "}
            {/* Use <Routes> instead of <Router> */}
            <Route path="/" element={<Login />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
