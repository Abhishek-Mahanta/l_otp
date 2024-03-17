import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { adminregisterfunction } from "../services/Apis";
import { useNavigate } from "react-router-dom"
import "../styles/mix.css"

const Adminregister = () => {
  const [passhow, setPasshow] = useState(false);
  const [inputdata, setInputdata] = useState({
    fname: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  //setinputvalue
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputdata({ ...inputdata, [name]: value })
  }
  // register data
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fname, email, password } = inputdata;

    if (fname === "") {
      toast.error("Enter Your Name")
    } else if (email === "") {
      toast.error("Enter Your E-mail")
    } else if (!email.includes("@")) {
      toast.error("Enter Valid E-mail")
    } else if (password === "") {
      toast.error("Enter Your Password")
    } else if (password.length < 6) {
      toast.error("Password length minimum 6 characters")
    } else {
      const response = await adminregisterfunction(inputdata);

      if (response?.status === 200) {
        // setInputdata({ ...inputdata, fname: "", email: "", password: "" });
        navigate("/Adminlogin");
      } else {
        toast.error(response?.response?.data?.error);
      }
    }
  }

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Admin Sign Up</h1>
            <p style={{ textAlign: "center" }}>Welcome to PetWale365.</p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="fname">Name</label>
              <input type="text" name="fname" id="" onChange={handleChange} placeholder='First & Last Name' />
            </div>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="" onChange={handleChange} placeholder='E-mail' />
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className='two'>
                <input type={!passhow ? "password" : "text"} name="password" id="" onChange={handleChange} placeholder='Password' />
                <div className='showpass' onClick={() => setPasshow(!passhow)}>
                  {!passhow ? "Show" : "Hide"}
                </div>
              </div>
            </div>
            <button className='btn' onClick={handleSubmit}>Sign Up</button>
            <p>Don't hava an account</p>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  )
}

export default Adminregister