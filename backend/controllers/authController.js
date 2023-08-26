const jwt = require('jsonwebtoken');
const User = require('../models/User');
const cloudinary = require("cloudinary");

exports.signup = async (req, res) => {
    const { username, password, email } = req.body;
    const img = req.files.img;
    console.log(username, password, email, img);

    try {
        const result = await cloudinary.v2.uploader.upload(img.tempFilePath, {
            folder: "social-media-app-users",
        });
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const newUser = new User({ username, password, email, profileImage: result.secure_url });
        await newUser.save();
        res.json({ message: 'User registered successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });

    }
};

exports.signin = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username, password });
        if (!user) {
            return res.status(401).json({ message: 'Authentication failed' });
        }
        const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRY, });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
