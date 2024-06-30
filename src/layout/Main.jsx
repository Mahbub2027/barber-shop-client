// import React from 'react';

import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/sharedComponents/Navbar";
import Footer from "../components/sharedComponents/Footer";

const Main = () => {
    const location = useLocation();
    // console.log(location);
    const navFooter = location.pathname.includes('login') || location.pathname.includes('signup');
    return (
        <div>
            {/* {
                ((location.pathname === '/login') || (location.pathname === '/signup')) ?  " " : <Navbar></Navbar>
            } */}
            { navFooter|| <Navbar></Navbar>}
            <Outlet></Outlet>
            {navFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;