import { NextApiRequest, NextApiResponse } from 'next'

import sgMail from '@sendgrid/mail'
const api = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body
    const { SENDGRID_API_KEY = '' } = process.env

    sgMail.setApiKey(SENDGRID_API_KEY)
    const msg = {
      to: 'alex.g.teshome@gmail.com',
      from: 'alex.g.teshome@gmail.com',
      subject: name + ' messaged you through your contact form.',
      text: `Email:${email} \n${message}`,
    }

    sgMail
      .send(msg)
      .then((data) => {
        res.statusCode = 200
        res.end(JSON.stringify({ success: true, message: data }))
      })
      .catch((err) => {
        res.statusCode = 500
        res.end(JSON.stringify({ success: false, message: err }))
      })
  } else {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 200
    res.end(JSON.stringify({ name: 'Nextjs' }))
  }
}

export default api
