import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import BookCover from './components/BookCover'
import ReyMisterio from './components/ReyMisterio/ReyMisterio'
import Vidasecreta from './components/Vidasecreta/Vidasecreta'
import Loscasagrande from './components/Loscasagrande/Loscasagrande'
import Navespace from './components/Navespace/Navespace'
import Galaxy from './components/Galaxyofcreatures/Galaxy'
import Commonside from './components/Commonside/Commonside'
import PersonalWork from './components/PersonalWork/PersonalWork'

function App() {
  const [isContactMenuOpen, setIsContactMenuOpen] = useState(false)

  const closeMenu = () => setIsContactMenuOpen(false)

  return (
    <div className="app-root">
      {isContactMenuOpen && (
        <div
          className="menu-backdrop"
          onClick={() => setIsContactMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      <header className="site-header">
        <div className="container header-row">
          <h1 className="site-title"><Link to="/" className="title-link">Andrés "Nove" Escobedo</Link></h1>
          <nav className="nav" aria-label="Main">
            <ul>
              <li><Link className="nav-link" to="/">Projects</Link></li>
              <li><Link className="nav-link" to="/about">About Me</Link></li>
              <li><Link className="nav-link" to="/contact">Contact Me</Link></li>
            </ul>
          </nav>
          <div className="contact-actions">
            <button
              type="button"
              className="contact-menu-toggle"
              aria-label="Abrir menú de contacto"
              aria-controls="contact-menu"
              aria-expanded={isContactMenuOpen}
              onClick={() => setIsContactMenuOpen((open) => !open)}
            >
              <span aria-hidden="true" className="hamburger-icon">
                <span />
                <span />
                <span />
              </span>
            </button>

            {/** contact icons removed - navigation moved to the right in CSS */}

            <div className={`contact-menu ${isContactMenuOpen ? 'is-open' : ''}`} id="contact-menu" aria-label="Contact menu">
              <Link to="/" className="contact-menu-link" onClick={closeMenu}>
                Projects
              </Link>
              <Link to="/about" className="contact-menu-link" onClick={closeMenu}>
                About Me
              </Link>
              <Link to="/contact" className="contact-menu-link" onClick={closeMenu}>
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cover" element={<BookCover />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/rey-misterio" element={<ReyMisterio />} />
        <Route path="/vida-secreta" element={<Vidasecreta />} />
        <Route path="/los-casagrande" element={<Loscasagrande />} />
        <Route path="/navespace" element={<Navespace />} />
        <Route path="/galaxy" element={<Galaxy />} />
        <Route path="/commonside" element={<Commonside />} />
        <Route path="/personal-work" element={<PersonalWork />} />
      </Routes>
    </div>
  )
}

export default App
