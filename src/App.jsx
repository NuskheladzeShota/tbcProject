import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Assignment from './Pages/Assignment';
import Profile from './Pages/Profile';
import Blog from './Pages/Blog';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/assignment" element={<Assignment />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

