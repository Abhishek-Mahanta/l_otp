const doctors = require("../models/doctorSchema");
const doctorotp = require("../models/doctorOtp");
const nodemailer = require("nodemailer");


//email config
// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.PASSWORD
//     }
// })


exports.doctorregister = async (req, res) => {
    const { fname, email, password } = req.body;
    if (!fname && !email && !password) {
        res.status(400).json({ error: "Please Enter All Input Data" })
    }
    try {
        const doctorExist = await doctors.findOne({ email: email });

        if (doctorExist) {
            res.status(400).json({ error: "This Doctor Already exist in our db" })
        } else {
            const doctorregister = new doctors({
                fname, email, password
            });

            // here password hasing

            const storeData = await doctorregister.save();
            res.status(200).json(storeData);
        }
    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error })
    }
};


exports.doctorOtpSend = async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ error: "Please Enter Your Email" });
    }
    try {
        const presuer = await doctors.findOne({ email: email });
        if (presuer) {
            const OTP = Math.floor(100000 + Math.random() * 900000);
            const existEmail = await doctorotp.findOne({ email: email });
            if (existEmail) {
                const updateData = await doctorotp.findByIdAndUpdate({ _id: existEmail._id }, {
                    otp: OTP
                }, { new: true }
                );
                const u = await updateData.save();
                res.status(200).json(u);
            } else {
                const saveOtpData = new doctorotp({
                    email, otp: OTP
                });
                const s = await saveOtpData.save();
                res.status(200).json(s);
            }
        } else {
            res.status(400).json({ error: "This Doctor Not Exist In Our Db" })
        }
    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error })
    }
};



exports.doctorLogin = async (req, res) => {
    const { email, otp } = req.body;

    if (!otp && !email) {
        res.status(400).json({ error: "Please Enter Your OTP and Email" })
    }
    try {
        const otpverification = await doctorotp.findOne({ email: email });
        if (otpverification.otp === otp) {
            const predoctor = await doctors.findOne({ email: email });

            // token generate
            const token = await predoctor.generateAuthtoken();
            res.status(200).json({ message: "Doctor Login Succesfully Done", doctorToken: token });

        } else {
            res.status(400).json({ error: "Invalid OTP" })
        }
    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error })
    }
}

exports.getOtp = async (req, res) => {

    try {
        const user = await doctors.findOne({ email: email });

    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error })
    }
};