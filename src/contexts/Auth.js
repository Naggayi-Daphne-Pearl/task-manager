import { useContext } from "react";
import { AuthContext } from "./User";
import { useNavigate } from "react-router-dom";

const useRequireAuth = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    navigate("/");
  }
};

export default useRequireAuth;
