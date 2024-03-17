const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");
const doctorControllers = require("../controllers/doctorControllers");
const adminControllers = require("../controllers/adminControllers");
const consultationControllers = require("../controllers/consultationControllers");
const doctordetailsControllers = require("../controllers/doctordetailsControllers");

// User Routes
router.post("/user/register", userControllers.userregister);
router.post("/user/sendotp", userControllers.userOtpSend);
router.post("/user/login", userControllers.userLogin);

// Doctor Routes
router.post("/doctor/register", doctorControllers.doctorregister);
router.post("/doctor/sendotp", doctorControllers.doctorOtpSend);
router.post("/doctor/login", doctorControllers.doctorLogin);


// Consultation Routes
router.post("/appt/consultation", consultationControllers.apptconsultation);

//Doctor details Routes
router.post("/doctor/details", doctordetailsControllers.doctordetails);
router.post("/showdoctor/details", doctordetailsControllers.showdoctordetails);

//Admin Routes
router.post("/admin/register", adminControllers.adminregister);
router.post("/admin/sendotp", adminControllers.adminOtpSend);
router.post("/admin/login", adminControllers.adminLogin);

module.exports = router;
