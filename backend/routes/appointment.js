const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

// Define schema
const appointmentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  service: String,
  source: String,
  createdAt: { type: Date, default: Date.now },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

// Setup transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// POST /api/appointments
router.post("/", async (req, res) => {
  const { name, email, phone, service, source } = req.body;

  try {
    const newAppointment = new Appointment({
      name,
      email,
      phone,
      service,
      source,
    });

    await newAppointment.save();

   const mailOptions = {
        from: `"CA Services" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `Your Free Consultation for ${service}`,
        text: `Hi ${name},
Thank you for booking a free consultation with us regarding "${service}". We’re excited to assist you with your financial and legal needs.
Here’s what happens next:
    - One of our expert consultants will review your request.
    - You’ll receive a call shortly on ${phone} to discuss your goals in detail.
    - We'll walk you through the best options tailored specifically to your situation.

If you have any additional information or documents you’d like us to review beforehand, feel free to reply to this email.

We look forward to speaking with you soon!

Warm regards,  
CA Services Team  
NextGen CA – Smart, Simple & Secure Tax Consultancy`
};
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Appointment submitted successfully!" });
  } catch (error) {
    console.error("Error submitting appointment:", error);
    res.status(500).json({ message: "Failed to submit appointment." });
  }
});

module.exports = router;
