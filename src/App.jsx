import './App.css'
import Login from "./pages/Login";
import Home from "./pages/Home";
import Info from "./pages/info/info";
import Portfolio from "./pages/portfolio/portfolio";
import Network from "./pages/Home";
import My from "./pages/my/my";
import {Routes,Route} from "react-router-dom";
import Onboarding from './pages/onboarding/Onboarding';

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
