// import logo from './logo.svg';
// import './App.css';
import Home from './Pages/Home'
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/About" element={< About />} />
          <Route path="/Blog" element={< Blog />} />
          <Route path="/Contact" element={< Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
