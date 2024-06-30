// import React from 'react';

import { Button, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.png';
import useAuth from "../../hooks/useAuth";

const NavbarItem = () => {
    const { user, logOutUser } = useAuth();

    const navItems = <>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/portfolio'><li>Our Portfolio</li></NavLink>
        <NavLink to='/ourteam'><li>Our Team</li></NavLink>
        <NavLink to='/contact'><li>Contact Us</li></NavLink>
    </>

    const handleLogOut = () =>{
        logOutUser()
        .then(()=>{
            console.log("Sign out successfully");
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <div className="w-full bg-slate-50">

            <Navbar fluid rounded className="w-11/12 mx-auto bg-slate-50">
                <Navbar.Brand href="https://flowbite-react.com">
                    <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />

                </Navbar.Brand>
                <div className="flex md:order-2">
                {
                    user ? <>
                        <Button onClick={handleLogOut} className="border border-transparent bg-slate-600 text-white focus:ring-4 focus:ring-blue-300 enabled:hover:bg-slate-800 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">Log out</Button>
                    </> :
                        <>
                            <div className="flex md:order-2">
                                <Button href="/login" className="border border-transparent bg-slate-600 text-white focus:ring-4 focus:ring-blue-300 enabled:hover:bg-slate-800 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">Log In</Button>
                                <Button href="/signup" className="border mx-1 border-transparent bg-yellow-500 text-white focus:ring-4 focus:ring-blue-300 enabled:hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">Register</Button>
                                <Navbar.Toggle />
                            </div>
                        </>
                }
                </div>


                <Navbar.Collapse>
                    {navItems}

                </Navbar.Collapse>
            </Navbar>
        </div>

    );
};

export default NavbarItem;