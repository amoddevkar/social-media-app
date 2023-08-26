const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    image: { type: String, required: true }, // URL to story image
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Story', storySchema);
