const mongoose = require("mongoose");
const validator = require("validator");


const doctorOtpSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error("Not Valid Email")
            }
        }
    },
    otp:{
        type:String,
        required:true
    }
});


// user otp model
const doctorotp = new mongoose.model("doctorotps",doctorOtpSchema);

module.exports = doctorotp