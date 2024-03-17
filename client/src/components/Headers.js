import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom"

const Headers = () => {
    return (
        <>
            <Navbar bg="transparent" variant="dark">
                <Container>
                    <NavLink to="/view" className="mx-2 text-light text-decoration-none"><img src="/PETWALE.png" style={{width:90}} alt="" /></NavLink>
                    <Nav className="">
                        <NavLink to="/" href="About Us" className="mt-3 mx-2 text-light text-decoration-none">About Us</NavLink>
                        <NavLink to="/consultation" href="Services" className="mt-3 mx-2 text-light text-decoration-none">Services</NavLink>
                        <NavLink to="/locateme" href="Features" className="mt-3 mx-2 text-light text-decoration-none">Features</NavLink>
                        <NavLink to="/scheduleappt" href="FAQs" className="mt-3 mx-2 text-light text-decoration-none">FAQs</NavLink>
                        <NavLink href="Contact" className="mt-3 mx-2 text-light text-decoration-none">Contact</NavLink>                        
                    </Nav>
                        <a href="/Doctorreg" class=" btn btn-primary mx-2">Doctor</a>                        
                        <a href="/Reguser" class=" btn btn-primary mx-2">User</a>
                        <a href="/Adminregister" class=" btn btn-primary mx-2">Admin</a>
                </Container>
            </Navbar>
        </>
    )
}

export default Headers