import './App.css'
import Login from "./pages/Login";
import Home from "./pages/Home";
import Info from "./pages/Home";
import Portfolio from "./pages/Home";
import Network from "./pages/Home";
import My from "./pages/Home";
import {Routes,Route} from "react-router-dom";
import Onboarding from './pages/Onboarding';
function App() {
  return (
  <Routes>
     <Route path="/" element={<Login/>} />
     <Route path="/Home" element = {<Home/>} />
     <Route path="/onboarding" element={<Onboarding />} />
       <Route path="/info" element={<Info />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/network" element={<Network />} />
        <Route path="/my" element={<My />} />
  </Routes>
  );
};

export default App;
