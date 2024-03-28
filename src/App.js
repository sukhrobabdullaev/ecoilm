import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
// import Navbar from "./Components/Navbar/Navbar";
import "./index.css";
import Navbarr from "./Components/Navbar/Navbarr";

function App() {
  return (
    <div className="">
      <Navbarr />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
