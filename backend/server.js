require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const appointmentRoutes = require("./routes/appointment");

app.use("/api/appointments", appointmentRoutes);

const messageRoutes = require("./routes/message");

app.use("/api/message", messageRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("✅ MongoDB connected");
}).catch((err) => {
  console.error("❌ MongoDB connection failed:", err);
});

// Schema
const leadSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  service: String,
  source: String,
  createdAt: { type: Date, default: Date.now }
});
const Lead = mongoose.model("Lead", leadSchema);

// Email transport
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Leads route
app.post("/api/leads", async (req, res) => {
  const { name, email, phone, message, service, source } = req.body;

  try {
    const newLead = new Lead({ name, email, phone, message, service, source });
    await newLead.save();

    const mailOptions = {
      from: `"CA Services" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `We've received your request for ${service}`,
      text: `Hi ${name},\n\nThank you for reaching out to us about ${service}.\n\nWe'll contact you soon at ${phone}.\n\nMessage: ${message}\n\nRegards,\nCA Services Team`
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Lead submitted and email sent!" });
  } catch (error) {
    console.error("❌ Error in POST /api/leads:", error);
    res.status(500).json({ message: "Failed to submit lead." });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
