import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from "react-bootstrap/Dropdown";


const Headers = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showBlog, setShowBlog] = useState(false);
    const [showAccessories, setShowAccessories] = useState(false);
    const [showMedicine, setShowMedicine] = useState(false);

    const handleMenuMouseEnter = () => {
        setShowMenu(true);
    };

    const handleMenuMouseLeave = () => {
        setShowMenu(false);
    };

    const handleBlogMouseEnter = () => {
        setShowBlog(true);
    };

    const handleBlogMouseLeave = () => {
        setShowBlog(false);
    };

    const handleAccessoriesMouseEnter = () => {
        setShowAccessories(true);
    };

    const handleAccessoriesMouseLeave = () => {
        setShowAccessories(false);
    };

    const handleMedicineMouseEnter = () => {
        setShowMedicine(true);
    };

    const handleMedicineMouseLeave = () => {
        setShowMedicine(false);
    };

    return (
        <>
            <Navbar bg="transparent" variant="dark">
                <Container>
                    <NavLink to="/view" className="mx-2 text-light text-decoration-none"><img src="/PETWALE.png" style={{width:90}} alt="" /></NavLink>
                    <Nav className="">
                        <NavLink to="/" className="mt-3 mx-2 text-light text-decoration-none">About Us</NavLink>
                        <NavLink to="/consultation" className="mt-3 mx-2 text-light text-decoration-none">Services</NavLink>
                        <NavLink to="/locateme" className="mt-3 mx-2 text-light text-decoration-none">Features</NavLink>
                        <NavLink to="/scheduleappt" className="mt-3 mx-2 text-light text-decoration-none">FAQs</NavLink>
                        <NavLink to="/contactus" className="mt-3 mx-2 text-light text-decoration-none">Contact</NavLink>                        
                    </Nav>
                    <a href="/Doctorreg" className="btn btn-primary mx-2">Doctor</a>                        
                    <a href="/Reguser" className="btn btn-primary mx-2">User</a>
                    <a href="/Adminregister" className="btn btn-primary mx-2">Admin</a>
                </Container>
            </Navbar>
            <Navbar bg="transparent" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Dropdown show={showMenu} onMouseEnter={handleMenuMouseEnter} onMouseLeave={handleMenuMouseLeave}>
                                <Dropdown.Toggle variant="light" id="dropdown-menu">
                                    Menu
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#action/1">Dog</Dropdown.Item>
                                    <Dropdown.Item href="#action/2">Cat</Dropdown.Item>
                                    <Dropdown.Item href="#action/3">Fish</Dropdown.Item>
                                    <Dropdown.Item href="#action/3">Bird</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown show={showBlog} onMouseEnter={handleBlogMouseEnter} onMouseLeave={handleBlogMouseLeave}>
                                <Dropdown.Toggle variant="light" id="dropdown-blog">
                                    Blog
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#action/1">Dog Blog</Dropdown.Item>
                                    <Dropdown.Item href="#action/2">Cat Blog</Dropdown.Item>
                                    <Dropdown.Item href="#action/3">Fish Blog</Dropdown.Item>
                                    <Dropdown.Item href="#action/3">Bird Blog</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown show={showAccessories} onMouseEnter={handleAccessoriesMouseEnter} onMouseLeave={handleAccessoriesMouseLeave}>
                                <Dropdown.Toggle variant="light" id="dropdown-menu">
                                    Accessories
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#action/1">Dog Bed</Dropdown.Item>
                                    <Dropdown.Item href="#action/2">Cat Bed</Dropdown.Item>
                                    <Dropdown.Item href="#action/3">Dog Belt</Dropdown.Item>
                                    <Dropdown.Item href="#action/3">Cat Belt</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown show={showMedicine} onMouseEnter={handleMedicineMouseEnter} onMouseLeave={handleMedicineMouseLeave}>
                                <Dropdown.Toggle variant="light" id="dropdown-blog">
                                    Medicine
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#action/1">Dog</Dropdown.Item>
                                    <Dropdown.Item href="#action/2">Cat</Dropdown.Item>
                                    <Dropdown.Item href="#action/3">Fish</Dropdown.Item>
                                    <Dropdown.Item href="#action/3">Bird</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            {/* Add more dropdowns for other items like shop, accessories, medicines */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Headers;