// src/App.jsx
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import Hire from './components/Hire'
import Updates from './components/Updates'
import Footer from './components/Footer'
import Scene from './components/Scene'

export default function App() {
  const [page, setPage] = useState('home') // 'home' | 'projects' | 'hire' | 'updates'

  return (
    <div className="app-root">
      {/* Global background canvas (one instance only) */}
      <Scene />

      <Navbar page={page} setPage={setPage} />
      <main className="main-wrap">
        {page === 'home' && <Home setPage={setPage} />}
        {page === 'projects' && <Projects />}
        {page === 'hire' && <Hire />}
        {page === 'updates' && <Updates />}
      </main>
      <Footer />
    </div>
  )
}
