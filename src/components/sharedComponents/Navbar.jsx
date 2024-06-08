// import React from 'react';

import { Button, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.png';

const NavbarItem = () => {
    const navItems = <>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/portfolio'><li>Our Portfolio</li></NavLink>
        <NavLink to='/ourteam'><li>Our Team</li></NavLink>
        <NavLink to='/contact'><li>Contact Us</li></NavLink>
    </>


    return (
        <div className="w-full bg-slate-50">
            
            <Navbar fluid rounded className="w-11/12 mx-auto bg-slate-50">
                <Navbar.Brand href="https://flowbite-react.com">
                    <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                    
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Button className="border border-transparent bg-slate-600 text-white focus:ring-4 focus:ring-blue-300 enabled:hover:bg-slate-800 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">Log in</Button>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    {navItems}
                    {/* <Navbar.Link href="#" active>
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="#">About</Navbar.Link>
                    <Navbar.Link href="#">Services</Navbar.Link>
                    <Navbar.Link href="#">Pricing</Navbar.Link>
                    <Navbar.Link href="#">Contact</Navbar.Link> */}
                </Navbar.Collapse>
            </Navbar>
        </div>

    );
};

export default NavbarItem;