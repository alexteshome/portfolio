const sgMail = require("@sendgrid/mail");

export default (req, res) => {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    console.log(req.body);

    sgMail.setApiKey(
      "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"
    );
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
