const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    visibleId: {
        required: true,
        type: String,
        unique : true
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
    status: {
        required: true,
        type: String,
        default: 'Available'
    }
});

module.exports = mongoose.model('Bicylce2', dataSchema)