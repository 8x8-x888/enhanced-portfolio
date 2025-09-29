// server/server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import nodemailer from 'nodemailer';
import helmet from 'helmet';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Security Middleware
app.use(helmet()); 

// CORS Configuration - IMPORTANT for frontend/backend communication
// IMPORTANT: Replace the placeholders with your deployed URLs
const allowedOrigins = ['http://localhost:5173', 'https://your-render-frontend.onrender.com']; 
const corsOptions = {
    origin: (origin, callback) => {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true); 
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    methods: 'POST', // Only allow POST requests for the contact form
};

app.use(cors(corsOptions));
app.use(express.json());

// 1. Setup Nodemailer Transporter
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_PORT == 465, // true for 465, false for other ports like 587
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

// 2. Contact Form Submission Route
app.post('/api/contact', async (req, res) => {
    // API Secret Key Check (Security Layer)
    const clientSecret = req.header('X-API-Secret');
    if (!clientSecret || clientSecret !== process.env.API_SECRET_KEY) {
        // Log the attempt but return a generic error message for security
        console.warn('Unauthorized contact form submission attempt.');
        return res.status(401).json({ error: 'Unauthorized request. Invalid secret key.' });
    }

    const { firstName, lastName, email, phone, message } = req.body;

    if (!firstName || !lastName || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields: first name, last name, email, and message are required.' });
    }

    const mailOptions = {
        from: process.env.SENDER_EMAIL,
        to: process.env.RECEIVER_EMAIL, // Your professional email to receive the messages
        subject: `[NextGenVA Contact] New Lead: ${firstName} ${lastName}`,
        text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone || 'N/A'}
        
        Message:
        ---
        ${message}
        ---
        `,
        html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #ccc;">
            <h2 style="color: #3B82F6;">New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <h3 style="margin-top: 20px;">Message:</h3>
            <p style="white-space: pre-wrap; background: #f4f4f4; padding: 10px; border-radius: 5px;">${message}</p>
            <hr style="margin-top: 20px;">
            <p style="font-size: 12px; color: #666;">Sent from NextGenVA Portfolio Backend</p>
        </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Message sent successfully! I will be in touch soon.' });
    } catch (error) {
        console.error('Nodemailer Error:', error);
        res.status(500).json({ error: 'Failed to send email. Check server logs for details.' });
    }
});

// Simple health check route (for Render)
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'ok', uptime: process.uptime() });
});

// Start the server
app.listen(port, () => {
    console.log(`Contact Backend listening on port ${port}`);
});