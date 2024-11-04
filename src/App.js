import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import HOME from './components/HOME';
import COFFEE from './components/COFFEE';
import BLOG from './components/BLOG';
import GELLERY from './components/GELLERY';
import REVIEW from './components/REVIEW';
import ABOUT from './components/ABOUT.js';
import Genric from './components/PAGES.js/Genric';
import Elements from './components/PAGES.js/Elements';
// import LOGIN from './components/LOGIN.js'
import Login from './Login.js'
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>

                    <Route path='/' element={<Home />} />
                    {/* <Route path='/Footer' element={<Footer />} /> */}
                    <Route path='Home' element={<HOME />} />
                    <Route path='/about' element={<ABOUT />} />
                    <Route path='/coffee' element={<COFFEE />} />
                    <Route path='/Gellery' element={<GELLERY />} />
                    <Route path='/Blog' element={<BLOG />} />
                    <Route path='/Review' element={<REVIEW />} />
                    <Route path='components/PAGES/Genric' element={<Genric />} />
                    <Route path='components/PAGES/Elements' element={<Elements />} />
                    <Route path='/Login' element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
