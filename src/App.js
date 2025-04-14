import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LayoutTool from './pages/LayoutTool';
import Visualization from './pages/Visualization';
import AIRecommendations from './pages/AIRecommendations';
import BudgetPlanner from './pages/BudgetPlanner';
import MaterialCatalog from './pages/MaterialCatalog';
import SaveShare from './pages/SaveShare';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', background: '#f0f0f0' }}>
        <Link to="/">Home</Link>
        <Link to="/layout" style={{ marginRight: 10 }}>Layout Tool</Link>
        <Link to="/visualization" style={{ marginRight: 10 }}>3D Visualization</Link>
        <Link to="/ai" style={{ marginRight: 10 }}>AI Suggestions</Link>
        <Link to="/budget" style={{ marginRight: 10 }}>Budget Planner</Link>
        <Link to="/catalog" style={{ marginRight: 10 }}>Material Catalog</Link>
        <Link to="/share">Save & Share</Link>
      </nav>

      <Routes>
        <Route path="/layout" element={<LayoutTool />} />
        <Route path="/visualization" element={<Visualization />} />
        <Route path="/ai" element={<AIRecommendations />} />
        <Route path="/budget" element={<BudgetPlanner />} />
        <Route path="/catalog" element={<MaterialCatalog />} />
        <Route path="/share" element={<SaveShare />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

