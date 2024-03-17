import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { doctordetailfunction } from '../services/Apis';
import { useNavigate } from 'react-router-dom';
import '../styles/mix.css';

const Doctordetails = () => {
  const [inputdata, setInputdata] = useState({
    age: '',
    experience: '',
    dob: '',
    address: '',
    qualification: '',
    phoneNumber: '',
    aadharNumber: '',
    bankaccountdetails:''
  });
  console.log(inputdata);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputdata({ ...inputdata, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();  
    const { age, experience, dob, address, qualification, phoneNumber, aadharNumber, bankaccountdetails } = inputdata;
  
    if (age === '') {
      toast.error('Please enter your age');
    } else if (experience === '') {
      toast.error('Please enter your experience');
    } else if (dob === '') {
      toast.error('Please enter your date of birth');
    } else if (address === '') {
      toast.error('Please enter your address');
    } else if (qualification === '') {
      toast.error('Please enter your qualification');
    } else if (phoneNumber === '') {
      toast.error('Please enter your phone number');
    } else if (phoneNumber.length < 10) {
      toast.error('Phone number must be 10 digits');
    } else if (aadharNumber === '') {
      toast.error('Please enter your Aadhar card number');
    } else if (aadharNumber.length < 12) {
      toast.error('Aadhar number must be 12 digits');
    } else if (bankaccountdetails === '') {
      toast.error('Please enter your Bank Account Details');
    } else if (bankaccountdetails.length > 20) {
      toast.error('Bank Account Details must be 20 digits');
    } else {
      const response = await doctordetailfunction(inputdata);

      if (response?.status === 200) {
        navigate('/Doctorindex');
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
            <h1>Doctor Account Update</h1>
            <p style={{ textAlign: "center" }}>Update your account details below:</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form_input">
              <label htmlFor="age">Age</label>
              <input type="number" name="age" id="" onChange={handleChange}  placeholder="Enter your age" />
            </div>
            <div className="form_input">
              <label htmlFor="experience">Experience</label>
              <input type="text" name="experience" id="" onChange={handleChange}  placeholder="Enter your experience" />
            </div>
            <div className="form_input">
              <label htmlFor="dob">Date of Birth</label>
              <input type="date" name="dob" id="" onChange={handleChange}  placeholder="Enter your date of birth" />
            </div>
            <div className="form_input">
              <label htmlFor="address">Address</label>
              <input type="text" name="address" id="" onChange={handleChange}  placeholder="Enter your address" />
            </div>
            <div className="form_input">
              <label htmlFor="qualification">Qualification</label>
              <input type="text" name="qualification" id="" onChange={handleChange}  placeholder="Enter your qualification" />
            </div>
            <div className="form_input">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="tel" name="phoneNumber" id="" onChange={handleChange}  placeholder="Enter your phone number" />
            </div>
            <div className="form_input">
              <label htmlFor="aadharNumber">Aadhar Card Number</label>
              <input type="text" name="aadharNumber" id="" onChange={handleChange}  placeholder="Enter your Aadhar card number" />
            </div>
            <div className="form_input">
              <label htmlFor="bankaccountdetails">Bank Account Details</label>
              <input type="text" name="bankaccountdetails" id="" onChange={handleChange}  placeholder="Enter your Bank Account Details" />
            </div>
            <button className="btn" type="submit">Submit</button>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  )
}

export default Doctordetails