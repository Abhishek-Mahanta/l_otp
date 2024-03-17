const users = require("../models/userSchema");
const userotp = require("../models/userOtp");
const nodemailer = require("nodemailer");


//email config
// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.PASSWORD
//     }
// })


exports.userregister = async (req, res) => {
    const { fname, email, password } = req.body;
    if (!fname || !email || !password) {
        res.status(400).json({ error: "Please Enter All Input Data" })
    }
    try {
        const userExist = await users.findOne({ email: email });

        if (userExist) {
            res.status(400).json({ error: "This User already exist in our db" })
        } else {
            const Reguser = new users({
                fname, email, password
            });

            // here password hasing

            const storeData = await Reguser.save();
            res.status(200).json(storeData);
        }
    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error })
    }
};


exports.userOtpSend = async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ error: "Please Enter Your Email" });
    }
    try {
        const presuer = await users.findOne({ email: email });
        if (presuer) {
            const OTP = Math.floor(100000 + Math.random() * 900000);
            const existEmail = await userotp.findOne({ email: email });
            if (existEmail) {
                const updateData = await userotp.findByIdAndUpdate({ _id: existEmail._id }, {
                    otp: OTP
                }, { new: true }
                );
                const u = await updateData.save();
                res.status(200).json(u);
            } else {
                const saveOtpData = new userotp({
                    email, otp: OTP
                });
                const s = await saveOtpData.save();
                res.status(200).json(s);
            }
        } else {
            res.status(400).json({ error: "This User Not Exist In Our Db" })
        }
    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error })
    }
};



exports.userLogin = async (req, res) => {
    const { email, otp } = req.body;

    if (!otp && !email) {
        res.status(400).json({ error: "Please Enter Your OTP and Email" })
    }
    try {
        const otpverification = await userotp.findOne({ email: email });
        if (otpverification.otp === otp) {
            const preuser = await users.findOne({ email: email });

            // token generate
            const token = await preuser.generateAuthtoken();
            res.status(200).json({ message: "User Login Succesfully Done", userToken: token });

        } else {
            res.status(400).json({ error: "Invalid OTP" })
        }
    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error })
    }
}

exports.getOtp = async (req, res) => {

    try {
        const user = await users.findOne({ email: email });

    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error })
    }
};