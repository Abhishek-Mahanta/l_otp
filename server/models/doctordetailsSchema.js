const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRECT_KEY = "abhishek"

const doctordetailsSchema = new mongoose.Schema({
    age: {
        type: Number,
        required: true
    },
    experience: {
        type: String,
        required: true,
        trim: true
    },
    dob: {
        type: Date,
        required: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    qualification: {
        type: String,
        required: true,
        trim: true
    },
    phoneNumber: {
        type: String,
        required: true,
        minlength: 10
    },
    aadharNumber: {
        type: String,
        required: true,
        unique: true,
        minlength: 12,
        maxlength: 12
    },
    bankaccountdetails: {
        type: String,
        required: true,
        unique: true,
        minlength: 12,
        maxlength: 20
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
            }
        }
    ]
});

// Token generation method
doctordetailsSchema.methods.generateAuthToken = async function () {
    try {
        let newToken = jwt.sign({ _id: this._id }, SECRECT_KEY, {
            expiresIn: "1d"
        });

        this.tokens = this.tokens.concat({ token: newToken });
        await this.save();
        return newToken;
    } catch (error) {
        res.status(400).json(error)
    }
};

// Model creation
const doctordetails = mongoose.model("doctordetails", doctordetailsSchema);

module.exports = doctordetails;
