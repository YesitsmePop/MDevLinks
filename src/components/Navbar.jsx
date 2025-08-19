import React from 'react'

const NavLink = ({ label, id, active, onClick }) => (
  <div className={`navlink ${active ? 'active' : ''}`} onClick={() => onClick(id)} role="button" tabIndex={0}>
    {label}
  </div>
)

export default function Navbar({ page, setPage }) {
  return (
    <header className="navbar">
      <div className="logo" onClick={() => setPage('home')} style={{cursor:'pointer'}}>
        <img src="images/MDevLinks.png" className="imglogo"></img>
        <div className="title">MDevLinks</div>
      </div>

      <nav className="nav-links" aria-label="Primary">
        <NavLink label="Home" id="home" active={page==='home'} onClick={setPage} />
        <NavLink label="Projects" id="projects" active={page==='projects'} onClick={setPage} />
        <NavLink label="Hire" id="hire" active={page==='hire'} onClick={setPage} />
        <NavLink label="Updates" id="updates" active={page==='updates'} onClick={setPage} />
        <NavLink label="Art" id="art" active={page==='art'} onClick={setPage} />
      </nav>
    </header>
  )
}
