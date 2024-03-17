import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { consultfunction } from "../services/Apis";
import { useNavigate } from "react-router-dom"
import "../styles/mix.css"


const Consultation = () => {
  const [inputdata, setInputdata] = useState({
    fname: "",
    email: "",
    phone: "",
    clinic: ""
  });
  // console.log(inputdata);
  const navigate = useNavigate();
  //setinputvalue
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputdata({ ...inputdata, [name]: value })
  }
  // register data
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fname, email, phone, clinic } = inputdata;

    if (fname === "") {
      toast.error("Enter Your Name")
    } else if (email === "") {
      toast.error("Enter Your E-mail")
    } else if (!email.includes("@")) {
      toast.error("Enter Valid E-mail")
    } else if (phone === "") {
      toast.error("Enter Your Phone Number")
    } else if (phone.length < 10) {
      toast.error("Phone number length minimum 10 characters")
    } else if (clinic === ""){
      toast.error("Enter clinic location")
    } else {
      const response = await consultfunction(inputdata);

      if (response?.status === 200) {
        // setInputdata({ ...inputdata, fname: "", email: "", password: "" });
        navigate("/Scheduleappt")
      } else {
        toast.error(response?.response?.data?.error);
      }
    }
  }

  
  return (
    <div>
      <section
        id="section-hero"
        aria-label="section"
        className="full-height vertical-center"
      >
        <div class="container">
          <div class="row align-items-center">
            <div class="spacer-double sm-hide"></div>
            <div class="col-lg-6 ">
              <h1 class="maintitle">Your pet's health is in safe hands</h1>
              <div class="spacer-10"></div>
              <p class="lead">
                Welcome to the veterinary clinic petwale365. Polyclinic, day and daily hospital, modern laboratory - your pet will always be provided with qualified care.
              </p>
              <button className="btn bg-white">
                <a className="nav-link text-dark bg-white" href="#">
                  More
                </a>
              </button>
            </div>
            <div className="col-lg-6">
              <div className="wrapper my-5 bg-white">
                <form action="registration.php" method="post">
                  <div className="container">
                    <h3 className="text-center text-dark mb-5 lotit">Schedule Free Consultation</h3>
                    <div className="input-box">
                      <label htmlFor="fname"></label>
                      <input type="text" name="fname" id="" onChange={handleChange} placeholder="First & Last Name" required />
                    </div>
                    <br />
                    <div className="input-box">
                      <label htmlFor="email"></label>
                      <input type="email" name="email" id="" onChange={handleChange} placeholder="Email" required />
                    </div>
                    <br />
                    <div className="input-box">
                      <label htmlFor="phone"></label>
                      <input type="text" name="phone" id="" onChange={handleChange} placeholder="Phone Number" required />
                    </div>
                    <br />
                    <div className="input-box">
                      <label htmlFor="clinic"></label>
                      <input type="option" name="clinic" id="" onChange={handleChange} placeholder="Current clinic Location" required />
                    </div>
                    <br /><br />
                    <div className="input-box">
                      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Get Started Today</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </div>
  );
};

export default Consultation;