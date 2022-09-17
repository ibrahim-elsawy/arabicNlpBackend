const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    roles: {
        Silver: {
            type: Number,
            default: 2001
        },
        Gold: Number,
        Admin: Number
    },
    password: {
        type: String,
        required: true
    },
    queries: [String],
    refreshToken: String
});

module.exports = mongoose.model('User', userSchema);