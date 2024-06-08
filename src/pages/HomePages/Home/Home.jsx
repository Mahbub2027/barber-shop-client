// import React from 'react';

import Banner from "../Banner/Banner";
import CompleteServices from "../CompleteServices/CompleteServices";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <CompleteServices></CompleteServices>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </div>
    );
};

export default Home;