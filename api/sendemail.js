// pages/api/sendemail.js (or /api/sendemail.js if using Vercel functions)

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  // Debug: check if env vars are actually loaded
  console.log("SMTP_USER length:", process.env.SMTP_USER?.length);
  console.log("SMTP_PASS length:", process.env.SMTP_PASS?.length);

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return res.status(500).json({
      error: "SMTP credentials not found. Check your .env.local or Vercel env settings.",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true, // use SSL for Gmail (465)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // send to yourself
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ error: error.message });
  }
}
