import React from 'react'

export default function Home({ setPage }) {
  return (
    <section className="home-hero fade-in">
      <h1 className="hero-title">Design and code — with healthy obsession.</h1>
      <p className="hero-sub">
        I build small, polished features that contribute to a larger vision. I am profficient in React, Javascript, CSS, and Java.
      </p>

      <div className="about fade-in" style={{marginTop:40}}>
        <img src="/images/aboutImg.JPG" className="aboutimg"></img>
        <h3>About me</h3>
        <p>
          I'm a solo microbrand developer operating under the alias <strong>MDevLinks</strong>. I ship small, polished features
          and consult on web interfaces, design tips, and product polish. Outside work: golf, sketching, and playing cards.
        </p>
        <p>
            I am a junior at my high school in Ripon California, and am looking for small side jobs to help fund my college education. I began coding start of freshman year and have thrived from it since.
            I am also open to internships and mentorship opportunities in the tech industry. I'm not your top of the line developer, but I introduce a unique and fresh perspective to the table, and believe I can contribute
            a positive impact to whatever your project may be. Even if you don't need my services at the moment, I highly value any connections or feedback you can provide, which are available on my hire tab.
        </p>

        <div style={{marginTop:18, display:'flex', gap:14}}>
          <a className="navlink" onClick={()=>setPage('projects')}>See projects →</a>
          <a className="navlink" onClick={()=>setPage('hire')}>Hire me →</a>
        </div>
      </div>
    </section>
  )
}
