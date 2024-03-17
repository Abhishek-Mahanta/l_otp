const admins = require("../models/adminSchema");
const adminotp = require("../models/adminOtp");
const nodemailer = require("nodemailer");


exports.adminregister = async (req, res) => {
    const { fname, email, password } = req.body;
    if (!fname || !email || !password) {
        res.status(400).json({ error: "Please Enter All Input Data" })
    }
    try {
        const adminExist = await admins.findOne({ email: email });

        if (adminExist) {
            res.status(400).json({ error: "This Admin already exist in our db" })
        } else {
            const adminregister = new admins({
                fname, email, password
            });

            // here password hasing

            const storeData = await adminregister.save();
            res.status(200).json(storeData);
        }
    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error })
    }
};

exports.adminOtpSend = async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ error: "Please Enter Your Email" });
    }
    try {
        const presuer = await admins.findOne({ email: email });
        if (presuer) {
            const OTP = Math.floor(100000 + Math.random() * 900000);
            const existEmail = await adminotp.findOne({ email: email });
            if (existEmail) {
                const updateData = await adminotp.findByIdAndUpdate({ _id: existEmail._id }, {
                    otp: OTP
                }, { new: true }
                );
                const u = await updateData.save();
                res.status(200).json(u);
            } else {
                const saveOtpData = new adminotp({
                    email, otp: OTP
                });
                const s = await saveOtpData.save();
                res.status(200).json(s);
            }
        } else {
            res.status(400).json({ error: "This Admin Not Exist In Our Db" })
        }
    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error })
    }
};



exports.adminLogin = async (req, res) => {
    const { email, otp } = req.body;

    if (!otp && !email) {
        res.status(400).json({ error: "Please Enter Your OTP and Email" })
    }
    try {
        const otpverification = await adminotp.findOne({ email: email });
        if (otpverification.otp === otp) {
            const preadmin = await admins.findOne({ email: email });

            // token generate
            const token = await preadmin.generateAuthtoken();
            res.status(200).json({ message: "Admin Login Succesfully Done", adminToken: token });

        } else {
            res.status(400).json({ error: "Invalid OTP" })
        }
    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error })
    }
}

exports.getOtp = async (req, res) => {

    try {
        const admin = await admins.findOne({ email: email });

    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error })
    }
};