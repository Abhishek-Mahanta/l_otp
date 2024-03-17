import { commonrequest } from "./ApiCall";
import { BACKEND_URL } from "./helper";

//user
export const userregisterfunction = async(data) =>{
    return await commonrequest("POST",`${BACKEND_URL}/user/register`,data)
}

export const sentOtpFunction = async(data) => {
    return await commonrequest("POST",`${BACKEND_URL}/user/sendotp`,data)      
}

export const userVerify = async(data) => {
    return await commonrequest("POST",`${BACKEND_URL}/user/login`,data)
}


//doctor
export const doctorregisterfunction = async(data) =>{
    return await commonrequest("POST",`${BACKEND_URL}/doctor/register`,data)
}

export const docsentOtpFunction = async(data) => {
    return await commonrequest("POST",`${BACKEND_URL}/doctor/sendotp`,data)      
}

export const doctorVerify = async(data) => {
    return await commonrequest("POST",`${BACKEND_URL}/doctor/login`,data)
}


//consultation
export const consultfunction = async(data) => {
    return await commonrequest("POST",`${BACKEND_URL}/appt/consultation`,data)
}

//doctor details
export const doctordetailfunction = async(data) => {
    return await commonrequest("POST",`${BACKEND_URL}/doctor/details`,data)
}

export const showdoctordetailfunction = async(data) => {
    return await commonrequest("POST",`${BACKEND_URL}/showdoctor/details`,data)
}


//admin
export const adminregisterfunction = async(data) =>{
    return await commonrequest("POST",`${BACKEND_URL}/admin/register`,data)
}

export const adminsentOtpFunction = async(data) => {
    return await commonrequest("POST",`${BACKEND_URL}/admin/sendotp`,data)      
}

export const adminVerify = async(data) => {
    return await commonrequest("POST",`${BACKEND_URL}/admin/login`,data)
}