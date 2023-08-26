const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true },
    password: { type: String, required: true, select: false },
    profileImage: { type: String }, // URL to profile image
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    feed: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
});

module.exports = mongoose.model('User', userSchema);
