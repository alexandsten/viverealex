import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './features/home';
import About from './features/about';


function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
