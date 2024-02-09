const asyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer");
const Newsletter = require("../models/newsletterModel");

const sendMail = asyncHandler(async (req, res) => {
    //validate email
    const mail = req.params.email;
    if(!validateEmail(mail)){
      res.status(201).send({message :'Email Validation Failed'});
    }
    const emailExist = await Newsletter.findOne({ email: mail });
    if(emailExist) return res.status(400).send({message :'Email already exists!'});
    const newEmail = await Newsletter.create({
        email : mail,
    })
      
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'k.b.s.tobi@gmail.com',
          pass: 'awkj ykat bczk bply', // Generate an App Password for your Gmail account
        },
      });
      
      // Define the email content
      const mailOptions = {
        from: 'k.b.s.tobi@gmail.com',
        to: mail,
        subject: 'Newsletter joooooin',
        text: 'Thnank you for joinng our newsletter.',
      };
      
      // Send the email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          res.status(500).send({message :'Error sending email:', error});
        } else {
          res.status(200).send({message: "Email Sent"});
        } 
      });
});

function validateEmail(email) {
  // Regular expression for a basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the email against the regex
  return emailRegex.test(email);
}


module.exports = {sendMail};
