import './App.css';
import {  Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/Portfolio';
import InteriorDesign from './component/services/interiorDesing';
import DesignConsultation from './component/services/designConsultation';
import ConstructionService from './component/services/constructionService';
import SpaceRefurbishing from './component/services/spaceRefurbishing';
import TurnkeySpace from './component/services/turnkeySpace';

function App() {
  return (
      <div className="min-h-screen flex flex-col">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/interior-design" element={<InteriorDesign />} />
            <Route path="/design-consultation" element={<DesignConsultation />} />
            <Route path="/construction-service" element={<ConstructionService />} />
            <Route path="/space-refurbishing" element={<SpaceRefurbishing />} />
            <Route path="/turnkey-space" element={<TurnkeySpace />} />
          </Routes>
      </div>
  );
}

export default App;
