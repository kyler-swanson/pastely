import mongoose from 'mongoose';

const pasteSchema = new mongoose.Schema({
    title: {
        type: String,
        default: 'Untitled',
    },
    body: {
        type: String,
        required: true
    },
    author: {
        id: {
            type: Number,
            required: true,
            index: true
        },
        username: {
            type: String,
            required: true
        }
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Paste', pasteSchema);