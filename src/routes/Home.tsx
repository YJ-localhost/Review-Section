import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Home = () => {
  const navigate = useNavigate();
  const logout = () => {
    auth.signOut();
    navigate("/login");
  };
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
