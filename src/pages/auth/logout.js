import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/User";

const Logout = () => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null); // Clear the user context to log out
    navigate("/");
  };

  return (
    <div className="logout-container">
      <h1>Logged Out</h1>
      <p>You have been successfully logged out.</p>
      <button className="logout-button" onClick={handleLogout}>
        Log Back In 
      </button>
    </div>
  );
};

export default Logout;
