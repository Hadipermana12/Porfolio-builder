import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import Hero from './components/Hero';
import Templates from './pages/Templates';
import CreatePortfolio from './pages/CreatePortfolio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Profile />} />
        {/* Fallback routes or others can be added here */}
        <Route path="/templates" element={<Templates />} />
        <Route path="/create-portfolio" element={<CreatePortfolio />} />
        <Route path="/learn" element={<Explore />} />
        <Route path="/jobs" element={<Explore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
