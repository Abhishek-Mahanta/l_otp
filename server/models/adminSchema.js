const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRECT_KEY = "abhishek"

const adminSchema = new mongoose.Schema({
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
    password:{
        type:String,
        required:true,
        minlength:6
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



// hash password
adminSchema.pre("save",async function(next) {
    if(this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12);
    }

    next();

});

// token generate
adminSchema.methods.generateAuthtoken = async function() {
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
const admins = new mongoose.model("admins",adminSchema);

module.exports = admins;