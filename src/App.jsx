import './App.css'
import Login from "./pages/Login";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Portfolio from "./pages/Portfolio";
import Network from "./pages/Network";
import My from "./pages/My";
import Writing from "./pages/Writing";
import {Routes,Route} from "react-router-dom";
import Onboarding from './pages/Onboarding';
function App() {
  return (
  <Routes>
     <Route path="/" element={<Login/>} />
     <Route path="/Home" element = {<Home/>} />
     <Route path="/onboarding" element={<Onboarding />} />
       <Route path="/infotab" element={<Info />} />
        <Route path="/portfoliotab" element={<Portfolio />} />
        <Route path="/networktab" element={<Network />} />
        <Route path="/mytab" element={<My />} />
        <Route path="/writing" element={<Writing />} />
  </Routes>
  );
};

export default App;
