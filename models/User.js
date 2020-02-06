const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId }, 
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    joinDate: {
        type: Date,
        defaultt: Date.now
    },
    favorites: {
        type: [Schema.Types.ObjectId],
        ref: 'Recipe'
    }


})

module.exports = mongoose.model('User', UserSchema);
