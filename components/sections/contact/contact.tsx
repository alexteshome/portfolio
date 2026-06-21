import { FC, FormEvent, useState } from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SectionHeader, ExternalLink, Reveal } from '../../common'

export const Contact: FC = () => {
  const [name, changeName] = useState('')
  const [email, changeEmail] = useState('')
  const [message, changeMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')

  const resetForm = () => {
    changeName('')
    changeEmail('')
    changeMessage('')
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    fetch('https://api.web3forms.com/submit', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
        subject: `${name} messaged you through your contact form.`,
        name,
        email,
        message,
      }),
    })
      .then(async (response) => {
        const data = await response.json()
        if (data.success) {
          resetForm()
          setStatus('Message Sent.')
        } else {
          setStatus('Message failed to send.')
        }
        setLoading(false)
      })
      .catch((err) => {
        setStatus('Message failed to send: ' + err)
        setLoading(false)
      })
  }

  const inputClass =
    'w-full rounded-lg bg-navy-900 border border-line px-4 py-3 text-ink placeholder:text-muted font-sans text-sm focus:outline-none focus:border-accent transition-colors'

  return (
    <section id="contact" className="py-24 md:py-32 bg-navy-900/30">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader index="03" title="Contact" />
        <Reveal>
          <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-4">
            Let's work together
          </h2>
          <div className="flex gap-4 mb-10">
            <ExternalLink
              href="https://www.linkedin.com/in/alex-teshome-74340b111/"
              label="Alex Teshome on LinkedIn"
            >
              <FaLinkedin size="1.5rem" />
            </ExternalLink>
            <ExternalLink
              href="https://github.com/alexteshome"
              label="Alex Teshome on GitHub"
            >
              <FaGithub size="1.5rem" />
            </ExternalLink>
          </div>

          <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
            <input
              type="checkbox"
              name="botcheck"
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />
            <div>
              <label htmlFor="name" className="block font-mono text-xs text-muted uppercase tracking-widest mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className={inputClass}
                value={name}
                onChange={(e) => changeName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-mono text-xs text-muted uppercase tracking-widest mb-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                required
                className={inputClass}
                value={email}
                onChange={(e) => changeEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-mono text-xs text-muted uppercase tracking-widest mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={8}
                className={inputClass}
                value={message}
                onChange={(e) => changeMessage(e.target.value)}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 rounded-lg bg-accent text-accent-ink font-display font-semibold text-sm transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {loading ? 'Sending...' : 'Submit'}
            </button>
            {status && (
              <p role="status" className="font-mono text-sm text-accent mt-2">
                {status}
              </p>
            )}
          </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
