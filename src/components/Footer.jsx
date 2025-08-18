import React from 'react'

export default function Footer(){
  return (
    <footer className="footer">
      <div>© {new Date().getFullYear()} MDevLinks</div>
      <div className="socials">
        <a href="https://github.com/YesitsmePop" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.hackerrank.com/profile/morgandeanmcd" target="_blank" rel="noreferrer">HackerRank</a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  )
}
