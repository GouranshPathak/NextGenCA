const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

// Define schema
const messageSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  service: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

const Message = mongoose.model("Message", messageSchema);

// Setup transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// POST /api/message
router.post("/", async (req, res) => {
  const { firstName, lastName, email, phone, service, message } = req.body;

  try {
    const newMessage = new Message({
      firstName,
      lastName,
      email,
      phone,
      service,
      message,
    });

    await newMessage.save();

    const mailOptions = {
      from: `"CA Services" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `We've received your message regarding ${service}`,
      text: `Hi ${firstName} ${lastName},

Thank you for reaching out to us regarding "${service}".

We’ve received your message:
"${message}"

Our team will review your request and contact you at ${phone} or via email.

If you need immediate assistance, feel free to reply directly to this email.

Best regards,
CA Services Team
NextGen CA – Smart, Simple & Secure Tax Consultancy`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Message received successfully!" });
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ message: "Failed to submit your message." });
  }
});

module.exports = router;
