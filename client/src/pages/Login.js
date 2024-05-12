import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import { sentOtpFunction } from "../services/Apis";
import Spinner from 'react-bootstrap/Spinner';
import "../styles/mix.css"

const Login = () => {

    const [email, setEmail] = useState("");
    const [spiner, setSpiner] = useState(false);
    const navigate = useNavigate();
    // sendotp
    const sendOtp = async (e) => {
        e.preventDefault();
        if (email === "") {
            toast.error("Enter Your E-mail !")
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        } else if (!email.includes("@")) {
            toast.error("Enter Valid E-mail !");
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        } else {
            setSpiner(true)
            const data = {
                email: email
            }
            const response = await sentOtpFunction(data);

            if (response?.status === 200) {
                // setSpiner(spiner);
                navigate("/user/otp", { state: email })
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
                        <h1>Welcome</h1>
                        <h1>Please Log In</h1>
                        <p>Your pet's health is in safe hands</p>
                    </div>
                    <form>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="" onChange={(e) => setEmail(e.target.value)} placeholder='E-mail' />
                        </div>
                        <button className="btn" onClick={sendOtp}>Login
                            {
                                spiner ? <span><Spinner animation="border" /></span> : ""
                            }
                        </button>
                        <p>Don't have an account? <NavLink to="/reguser">Sign up</NavLink></p>
                    </form>
                </div>
                <ToastContainer />
            </section>
        </>
    )
}

export default Login