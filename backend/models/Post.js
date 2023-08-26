const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    image: { type: String, required: true }, // URL to post image
    caption: { type: String },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    comments: [
        {
            user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            text: { type: String, required: true },
            createdAt: { type: Date, default: Date.now },
        },
    ],
    shares: { type: Number, default: 0 },
    reports: { type: Number, default: 0 },
});

module.exports = mongoose.model('Post', postSchema);
