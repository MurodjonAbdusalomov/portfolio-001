import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Asosiy from './components/Asosiy';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import Ikonka from './assets/ikonka.png';
import Found from './components/Found';


const App = () => {

  return (
      <BrowserRouter>
    <div id='container'>
        <div>
          <nav>
            <img className='ikon' src={Ikonka} alt="" />
            <div>
              <Link className='link' to="/Home">Home</Link>
              <Link className='link' to="/About">About</Link>
              <Link className='link' to="/Contact">Contact</Link>
            </div>
          </nav>


          <Routes>
            <Route path='/' Component={Asosiy} />
            <Route path='/Home' Component={Home} />
            <Route path='/About' Component={About} />
            <Route path='/Contact' Component={Contact} />
            <Route path='*' Component={Found} />

          </Routes>





        </div>

        <footer class="clean-footer">
          <div class="footer-grid">

            <div class="footer-section links">
              <h3>Pages</h3>
              <ul>
                <li><a href="/Home">Home</a></li>
                <li><a href="/About">About Me</a></li>
                <li><a href="/Contact">Contact</a></li>
              </ul>
            </div>

            <div class="footer-section contact">
              <h3>Contact Info</h3>
              <p>Email: amurodjon857@example.com</p>
              <p>Phone: +998 94 385 73 55</p>
              <p>Location: Andijon, Uzbekistan</p>
            </div>

            <div class="footer-section social">
              <h3>Follow Me</h3>
              <ul class="social-list">
                <li><a href="https://www.instagram.com/abdusalomovv_.7?igsh=MXJtdWtxbW91OGQ3"><i class="fab fa-linkedin"></i> Instagram</a></li>
                <li><a href="ttps://t.me/FrontEnd_developer_7"><i class="fab fa-telegram"></i> Telegram</a></li>
              </ul>
            </div>
          </div>

          <div class="footer-bottom">
            <p>&copy; 2025 Murodjon — Designed & Built by You. All rights reserved.</p>
          </div>
        </footer>


    </div>
      </BrowserRouter>

  )
}

export default App;








