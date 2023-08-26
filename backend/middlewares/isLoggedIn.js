const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.isLoggedIn = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Token not provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }

        try {
            const user = await User.findOne({ username: decoded.username });
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            req.user = user;
            next();
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    });
};
