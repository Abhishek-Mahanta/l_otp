const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRECT_KEY = "abhishek"

const consultationSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        trim:true
    },
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
    phone:{
        type:String,
        required:true,
        minlength:10
    },
    clinic:{
        type:String,
        required:true,
        trim:true
    },
    tokens:[
    {
        token:{
            type:String,
            required:true,
        }
    }
]
});





// token generate
consultationSchema.methods.generateAuthtoken = async function() {
    try {
        let newtoken = jwt.sign({_id:this._id},SECRECT_KEY,{
            expiresIn:"1d"
        });

        this.tokens = this.tokens.concat({token:newtoken});
        await this.save();
        return newtoken;
    } catch (error) {
        res.status(400).json(error)
    }
}



//creating model
const consultations = new mongoose.model("consultations",consultationSchema);

module.exports = consultations;