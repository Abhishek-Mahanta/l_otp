import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { doctorregisterfunction } from '../services/Apis';
import { useNavigate } from 'react-router-dom';
import '../styles/mix.css';

const DoctorReg = () => {
  const [passhow, setPasshow] = useState(false);
  const [inputdata, setInputdata] = useState({
    fname: 'Dr.',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'fname') {
      setInputdata({ ...inputdata, [name]: 'Dr. ' + value });
    } else {
      setInputdata({ ...inputdata, [name]: value });
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fname, email, password } = inputdata;

    if (fname === 'Dr.') {
      toast.error('Enter Your Full Name');
    } else if (email === '') {
      toast.error('Enter Your E-mail');
    } else if (!email.includes('@')) {
      toast.error('Enter Valid E-mail');
    } else if (password === '') {
      toast.error('Enter Your Password');
    } else if (password.length < 6) {
      toast.error('Password length minimum 6 characters');
    } else {
      const response = await doctorregisterfunction(inputdata);

      if (response?.status === 200) {
        navigate('/Doclogin');
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
            <h1>Doctor Sign Up</h1>
            <p style={{ textAlign: 'center' }}>Welcome to Doctor Registration.</p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="fname">Name</label>
              <input type="text" name="fname" value={inputdata.fname.replace('Dr. ', '')} onChange={handleChange} placeholder="First & Last Name" />
            </div>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" onChange={handleChange} placeholder="E-mail" />
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input type={!passhow ? 'password' : 'text'} name="password" onChange={handleChange} placeholder="Password" />
                <div className="showpass" onClick={() => setPasshow(!passhow)}>
                  {!passhow ? 'Show' : 'Hide'}
                </div>
              </div>
            </div>
            <button className="btn" onClick={handleSubmit}>Sign Up</button>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  );
}

export default DoctorReg;