import React from 'react'

export default function Footer(){
  return (
    <footer className="footer">
      <div>© {new Date().getFullYear()} MDevLinks</div>
      <div className="socials">
        <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">X</a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  )
}
