const Consultation = require("../models/consultationSchema");

exports.apptconsultation = async (req, res) => {
    const { fname, email, phone, clinic } = req.body;
    
    if (!fname || !email || !phone || !clinic) {
        return res.status(400).json({ error: "Please Enter All Input Data" });
    }
    
    try {
        const consultationExist = await Consultation.findOne({ email: email });

        if (consultationExist) {
            return res.status(400).json({ error: "This Consultation Already exists in our db" });
        } else {
            const newConsultation = new Consultation({ fname, email, phone, clinic });
            const storeData = await newConsultation.save();
            return res.status(200).json(storeData);
        }
    } catch (error) {
        return res.status(400).json({ error: "Internal Server Error", error });
    }
};
