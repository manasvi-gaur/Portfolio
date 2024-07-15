const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "gmail", // or another email provider
  auth: {
    user: "manasvigaur3@gmail.com",
    pass: "pcpd umxn fdiw fkjd",
  },
});

app.post("/send-email", (req, res) => {
  const { user_name, user_email, message } = req.body;
  const mailOptions = {
    from: user_email,
    to: "manasvigaur3@gmail.com",
    subject:`Portfolio Contact from ${user_name}` ,
    html: `<p>Name: ${user_name}</p>
           <p>Email: ${user_email}</p>
           <p>Message: ${message}</p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Email sent: " + info.response);
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})