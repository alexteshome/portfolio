const sgMail = require("@sendgrid/mail");
import { SENDGRID_API_KEY } from "../../config";

export default (req, res) => {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    console.log(req.body);

    sgMail.setApiKey(SENDGRID_API_KEY);
    const msg = {
      to: "alex.g.teshome@gmail.com",
      from: email,
      subject: name + " messaged you through your contact form.",
      text: message
    };

    sgMail
      .send(msg)
      .then(data => {
        console.log(data);
        res.statusCode = 200;
        res.end(JSON.stringify({ success: true, message: data }));
      })
      .catch(err => {
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
