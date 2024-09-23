const mongoose = require('mongoose');
const { type } = require('os');
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI)

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required:true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
},{
    timestamps: true
});

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    item: {
        type: Number,
        required: true,
    }
},{
    timestamps: true
})

const User = mongoose.model('User', userSchema);
const Cart = mongoose.model('Cart', cartSchema);

module.exports = {
    User,
    Cart
}