import './App.css'
import Login from "./pages/Login";
import Home from "./pages/Home";

import Network from "./pages/Network";
import WritingFree from "./pages/WritingFree";
import WritingRecruit from "./pages/WritingRecruit";
import Recruit from "./pages/Recruit";
import Info from "./pages/info/info";
import Portfolio from "./pages/portfolio/portfolio";
import My from "./pages/my/my";
import {Routes,Route} from "react-router-dom";
import Onboarding from './pages/onboarding/Onboarding';
import Trend from './pages/trend/trend';
import Request from "./pages/request/request";
import BusinessPlanDetail from './pages/portfolio/businessPlanDetail';
import PortfolioDetail from './pages/portfolio/portfolioDetail';

function App() {
  return (
  <Routes>
    <Route path="network/recruit" element = {<Recruit/>} />
    <Route path="/networktab" element={<Network />} />
    <Route path="/writingfree" element={<WritingFree />} />
    <Route path="/writingrecruit" element={<WritingRecruit />} />
    <Route path="/" element={<Login/>} />
    <Route path="/Home" element = {<Home/>} />
    <Route path="/onboarding" element={<Onboarding />} />
    <Route path="/info" element={<Info />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/network/free" element={<Network />} />
    <Route path="/my" element={<My />} />
    <Route path="/trend" element={<Trend/>} />
    <Route path="/network/request" element={<Request/>} />
      
    <Route path="/my/:userId" element={<My type="my"/>} />

    <Route path="/portfolio/b/:businessPlanId" element={<BusinessPlanDetail type="b" />} />
    <Route path="/portfolio/p/:portfolioId" element={<PortfolioDetail type="p" />} />
  </Routes>
  );
};

export default App;
