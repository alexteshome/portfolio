import { NextApiRequest, NextApiResponse } from "next";

import sgMail from "@sendgrid/mail";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: "alex.g.teshome@gmail.com",
      from: email,
      subject: name + " messaged you through your contact form.",
      text: message,
    };

    sgMail
      .send(msg)
      .then((data) => {
        console.log(data);
        res.statusCode = 200;
        res.end(JSON.stringify({ success: true, message: data }));
      })
      .catch((err) => {
        console.log(err);
        res.statusCode = 500;
        res.end(JSON.stringify({ success: false, message: err }));
      });
  } else {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify({ name: "Nextjs" }));
  }
};
