const express = require('express');
const cors = require('./cors');

const app = express();
app.use(express.json());
app.use(cors);

// কনফিগারেশন এন্ডপয়েন্ট - .env থেকে ভ্যারিয়েবল পাঠাবে
app.get('/api/config', (req, res) => {
    res.json({
        firebase: {
            apiKey: process.env.FIREBASE_API_KEY,
            authDomain: process.env.FIREBASE_AUTH_DOMAIN,
            projectId: process.env.FIREBASE_PROJECT_ID,
            storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
            messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
            appId: process.env.FIREBASE_APP_ID
        },
        cloudinary: {
            cloudName: process.env.CLOUDINARY_CLOUD_NAME,
            uploadPreset: process.env.CLOUDINARY_UPLOAD_PRESET
        },
        recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY || ''
    });
});

// স্ট্যাটাস চেক
app.get('/api/status', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
