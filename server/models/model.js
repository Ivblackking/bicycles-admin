const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    id: {
        required: true,
        type: Number
    },
    name: {
        required: true,
        type: String
    },
    type: {
        required: true,
        type: String
    },
    color: {
        required: true,
        type: String
    },
    wheel_size: {
        required: true,
        type: Number
    },
    price: {
        required: true,
        type: Number
    },
    description: {
        required: true,
        type: String
    },
});

module.exports = mongoose.model('Bicylce', dataSchema)