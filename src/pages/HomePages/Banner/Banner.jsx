// import React from 'react';

import { Button } from 'flowbite-react';
import bannerImg from '../../../assets/images/men4.jpg';

const Banner = () => {
    return (
        <div className='w-full bg-slate-50'>
            <div className='w-11/12 mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10'>
                <div className='space-y-3 pb-4'>
                    <h1 className='text-5xl font-bold'>BEAUTY SALON <br /> FOR EVERY MEN</h1>
                    <p className='text-[#666]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus <br /> commodo ipsum duis laoreet maecenas. Feugiat </p>
                    <Button className="border border-transparent bg-yellow-500 text-white focus:ring-4 focus:ring-blue-300 enabled:hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">Get an Appointment</Button>
                </div>
                <div>
                    <img className='w-[550px] py-14' src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;