import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import './index.css'

function App() {
  return (
    <div className="container">
      <Navbar/>
        <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
