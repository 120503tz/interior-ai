import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import LayoutTool from './pages/LayoutTool';
import Visualization from './pages/Visualization';
import AIRecommendations from './pages/AIRecommendations';
import MaterialCatalog from './pages/MaterialCatalog';
import BudgetPlanner from './pages/BudgetPlanner';
import SaveShare from './pages/SaveShare';

function App() {
  return (
    <Router basename="/interior-ai">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/layout">Layout Tool</Link>
        <Link to="/visualization">3D View</Link>
        <Link to="/ai">AI Suggestions</Link>
        <Link to="/materials">Catalog</Link>
        <Link to="/save">Save & Share</Link>
        <Link to="/budget">Budget</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/layout" element={<LayoutTool />} />
        <Route path="/visualization" element={<Visualization />} />
        <Route path="/ai" element={<AIRecommendations />} />
        <Route path="/materials" element={<MaterialCatalog />} />
        <Route path="/save" element={<SaveShare />} />
        <Route path="/budget" element={<BudgetPlanner />} />
      </Routes>
    </Router>
  );
}

export default App;



