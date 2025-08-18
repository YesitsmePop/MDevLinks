import React, { useState } from 'react'

export default function Hire(){
  const [form, setForm] = useState({
    name:'', email:'', budget:'', message:''
  })
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'
  const [errorText, setErrorText] = useState('')

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorText('')

    try {
      const res = await fetch('/api/sendemail', {
        method:'POST',
        headers:{ 'Content-Type':'application/json' },
        body: JSON.stringify(form)
      })

      const json = await res.json().catch(() => ({}))

      // ✅ match API return shape
      if (res.ok && json?.success) {
        setStatus('success')
        setForm({ name:'', email:'', budget:'', message:'' })
      } else {
        setStatus('error')
        setErrorText(json?.error || 'Failed to send email')
      }
    } catch (err) {
      setStatus('error')
      setErrorText(err?.message || 'Network error')
    }
  }

  return (
    <section>
      <div className="section-title">Hire me — microjobs & consult</div>
      <p style={{color:'var(--muted)'}}>
        Fill this short form and I’ll respond within a few business days.
      </p>

      <form className="form" onSubmit={submit} style={{marginTop:12}}>
        <div className="form-row">
          <input
            className="input"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="input"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            type="email"
            required
          />
        </div>

        <input
          className="input"
          name="budget"
          placeholder="Budget (USD) — e.g. $30.00"
          value={form.budget}
          onChange={handleChange}
        />

        <textarea
          className="input"
          name="message"
          placeholder="Describe the work (concise)"
          value={form.message}
          onChange={handleChange}
          required
        />

        <div className="submit-line">
          {status === 'sending' && (
            <div style={{color:'var(--muted)'}}>Sending…</div>
          )}
          {status === 'success' && (
            <div style={{color:'var(--neon)'}}>Message sent — thank you.</div>
          )}
          {status === 'error' && (
            <div style={{color:'#ff6a6a'}}>{errorText}</div>
          )}

          <button
            type="submit"
            className="submit-link"
            style={{background:'none', border:'none'}}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending…' : 'Send request'}
          </button>
        </div>
      </form>
    </section>
  )
}
