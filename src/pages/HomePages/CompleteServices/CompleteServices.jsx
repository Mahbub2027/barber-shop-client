// import React from 'react';
import servicesImg from '../../../assets/images/men3.jpg'

const CompleteServices = () => {
    return (
        <div className='w-full bg-slate-50'>
            <div className='w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between gap-10'>
                <div className=''>
                    <img className='w-[550px] py-14' src={servicesImg} alt="" />
                </div>
                <div className='flex-1'>
                    <div className='w-3/4 mx-auto space-y-5 pb-10'>
                        <h1 className='text-4xl md:text-5xl font-bold'>Let us handle your  screen <span className='text-yellow-500'>Professionally</span>.</h1>
                        <p className=' text-[#666]'>With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum. </p>
                    </div>
                    <div className='w-3/4 mx-auto pb-5 flex justify-around items-center'>
                        <div>
                            <h1 className='text-4xl font-black text-yellow-500'>500+</h1>
                            <p>Happy customer</p>
                        </div>
                        <div>
                            <h1 className='text-4xl font-black text-yellow-500'>16+</h1>
                            <p>Total Services</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CompleteServices;