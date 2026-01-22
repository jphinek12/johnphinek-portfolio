import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Mage from './pages/Mage';
import Underline from './pages/Underline';
import Lastof7 from './pages/Lastof7';
import Freelance from './pages/Freelance';
import SafetyKit from './pages/SafetyKit';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mage" element={<Mage />} />
          <Route path="/underline" element={<Underline />} />
          <Route path="/lastof7" element={<Lastof7 />} />
          <Route path="/freelance" element={<Freelance />} />
          <Route path="/safetykit" element={<SafetyKit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
