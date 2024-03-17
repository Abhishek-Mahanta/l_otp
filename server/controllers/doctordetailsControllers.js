const Doctordetails = require("../models/doctordetailsSchema");

exports.doctordetails = async (req, res) => {
    const { age, experience, dob, address, qualification, phoneNumber, aadharNumber, bankaccountdetails } = req.body;
    
    if (!age || !experience || !dob || !address || !qualification || !phoneNumber || !aadharNumber || !bankaccountdetails) {
        return res.status(400).json({ error: "Please Enter All Input Data" });
    }
    
    try {
        const doctorExist = await Doctordetails.findOne({ phoneNumber: phoneNumber });

        if (doctorExist) {
            return res.status(400).json({ error: "This Doctor already exists in our database" });
        } else {
            const newDoctor = new Doctordetails({ age, experience, dob, address, qualification, phoneNumber, aadharNumber, bankaccountdetails });
            const storedData = await newDoctor.save();
            return res.status(200).json(storedData);
        }
    } catch (error) {
        return res.status(400).json({ error: "Internal Server Error", error });
    }
};


exports.showdoctordetails = async (req, res) => {
    try {
        const { email } = req.params; // Assuming email is passed in the request params
        const user = await doctorss.findOne({ email: email });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error });
    }
};