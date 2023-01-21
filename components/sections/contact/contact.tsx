import { FC, FormEvent, useState } from 'react'
import { Button, TextField, CircularProgress } from '@mui/material'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import 'isomorphic-fetch'
import styles from './contact.module.scss'
import { Fade } from 'react-awesome-reveal'

export const Contact: FC = () => {
  const [name, changeName] = useState('')
  const [email, changeEmail] = useState('')
  const [message, changeMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const resetForm = () => {
    changeName('')
    changeEmail('')
    changeMessage('')
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    fetch('/api/contact', {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then(async (response) => {
        const data = await response.json()
        if (data.success) {
          if (typeof window !== `undefined`) {
            resetForm()
            alert('Message Sent.')
          }
        } else {
          if (typeof window !== `undefined`) {
            alert('Message failed to send.')
          }
        }
        setLoading(false)
      })
      .catch((err) => {
        alert('Message failed to send:\n\n' + err)
        setLoading(false)
      })
  }

  return (
    <div className={`slide ${styles.slide}`} id="contact">
      <div className="slide-header">
        <Fade triggerOnce>
          <h2>Let's Get In Touch</h2>
        </Fade>
        <div className="underline" />
      </div>
      <Fade triggerOnce>
        <div className={styles.socials}>
          <button
            color="inherit"
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/alex-teshome-74340b111/',
                '_blank'
              )
            }
          >
            <FaLinkedin />
          </button>
          <button
            onClick={() =>
              window.open('https://github.com/alexteshome', '_blank')
            }
          >
            <FaGithub />
          </button>
        </div>
      </Fade>
      <Fade triggerOnce>
        <h3>
          If you want to collaborate, have any inquiries, or just want to chat!
        </h3>
      </Fade>

      <Fade triggerOnce>
        <form id="contact-form" onSubmit={handleSubmit}>
          <TextField
            type="text"
            label="Name"
            required
            id="name"
            fullWidth
            value={name}
            onChange={(e) => changeName(e.target.value)}
          />
          <TextField
            type="email"
            label="Email address"
            fullWidth
            required
            id="email"
            value={email}
            onChange={(e) => changeEmail(e.target.value)}
          />
          <TextField
            rows="8"
            multiline
            label="Message"
            fullWidth
            required
            id="message"
            value={message}
            onChange={(e) => changeMessage(e.target.value)}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            disabled={loading}
            className="contact-button"
          >
            {loading ? <CircularProgress size="2em" /> : 'Submit'}
          </Button>
        </form>
      </Fade>
    </div>
  )
}
