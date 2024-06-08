// import React from 'react';
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import logo from '../../assets/logo.png';
import {FaLocationDot } from "react-icons/fa6";

const FooterItems = () => {
    return (
        <div>
            <Footer container className="bg-slate-200 ">
                <div className="w-11/12 mx-auto">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        
                        <div className="grid lg:grid-cols-4 gap-8 sm:mt-4 grid-cols-2 sm:gap-4">
                            <div>
                                <Footer.Brand
                                    src={logo}
                                    alt="barber-shop Logo"
                                    name="barber-shop"
                                />
                                <p className="flex gap-2 text-xs mt-5 text-gray-400"><FaLocationDot className="mt-1"></FaLocationDot> <span>H#000 (0th Floor), Road #00,
                                    New DOHS, Mohakhali, Dhaka, Bangladesh
                                </span></p>
                                {/* <Footer.Copyright href="#" by="Jerin's Parler" year={2024} /> */}
                            </div>
                            <div>
                                <Footer.Title title="Company" />
                                <Footer.LinkGroup col>
                                    <Footer.Link href="#">About</Footer.Link>
                                    <Footer.Link href="#">Projects</Footer.Link>
                                    <Footer.Link href="#">Our Team</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Quick Links" />
                                <Footer.LinkGroup col>
                                    <Footer.Link href="#">Quick links</Footer.Link>
                                    <Footer.Link href="#">Rentals</Footer.Link>
                                    <Footer.Link href="#">Sales</Footer.Link>
                                    <Footer.Link href="#">Contact</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="About us" />
                                <Footer.LinkGroup col>
                                    <Footer.Link href="#">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, fugiat.</Footer.Link>
                                    <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                                    <div className="flex space-x-6 mt-4 sm:mt-0">
                                        <Footer.Icon href="#" icon={BsFacebook} />
                                        <Footer.Icon href="#" icon={BsInstagram} />
                                        <Footer.Icon href="#" icon={BsTwitter} />
                                        <Footer.Icon href="#" icon={BsDribbble} />
                                    </div>
                                </Footer.LinkGroup>
                            </div>
                        </div>
                    </div>
                    {/* <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright href="#" by="Flowbite™" year={2022} />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <Footer.Icon href="#" icon={BsFacebook} />
                            <Footer.Icon href="#" icon={BsInstagram} />
                            <Footer.Icon href="#" icon={BsTwitter} />
                            <Footer.Icon href="#" icon={BsDribbble} />
                        </div>
                    </div> */}
                </div>
            </Footer>
        </div>
    );
};

export default FooterItems;