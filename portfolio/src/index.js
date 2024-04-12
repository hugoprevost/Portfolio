import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Tous from './pages/Tous'
import UX from './pages/UX'
import Developpement from './pages/Developpement'
import AR from './pages/AR'
import Game from './pages/Game'
import Projet from './pages/Projet'
import Contact from './pages/Contact'
import Cv from './pages/Cv'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
import './utils/style/index.css'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets/tous" element={<Tous />} />
        <Route path="/projets/ux-ui" element={<UX />} />
        <Route path="/projets/developpement" element={<Developpement />} />
        <Route path="/projets/3d-ar" element={<AR />} />
        <Route path="/projets/game" element={<Game />} />
        <Route path="/projets/:id" element={<Projet />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Cv />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)