const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config(); // Load API key from .env

app.use(cors()); // Enable CORS for frontend requests

// Route to send Razorpay API key securely
app.get('/get-razorpay-key', (req, res) => {
    res.json({ razorpayKey: process.env.RAZORPAY_KEY });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
