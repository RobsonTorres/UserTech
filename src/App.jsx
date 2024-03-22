import { ToastContainer } from "react-toastify";
import { Router } from "./routes";
import { useContext } from "react";
import { UserContext } from "./providers/UserContext";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.scss";



function App() {
  const {} = useContext(UserContext)

  return (
    <>
      <Router />
      <ToastContainer position="top-right" autoclose={2 * 1000} />
    </>
  );
}

export default App
