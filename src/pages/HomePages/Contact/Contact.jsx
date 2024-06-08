// import React from 'react';

import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="w-full bg-slate-50 py-10">
            <h1 className="text-4xl font-bold text-center my-20">Let us handle your <br /> project, <span className="text-yellow-500">professionally</span>.</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="w-3/5 mx-auto space-y-5">

                <div className="flex flex-col md:flex-row gap-10">
                    <input {...register("firstName", { required: true, maxLength: 20 })}
                        className="w-full md:w-1/2  p-2 outline-none" placeholder="First Name" />
                    <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
                        className="w-full md:w-1/2  p-2 outline-none" placeholder="Last Name" />
                </div>
                <div className="flex flex-col md:flex-row gap-10">
                    <input {...register("email", { required: true })}
                        className="w-full md:w-1/2  p-2 outline-none" placeholder="Email Address" />
                    <input {...register("phone", { required: true, pattern: /^[0-9]+$/i })}
                        className="w-full md:w-1/2  p-2 outline-none" placeholder="Phone number" />
                </div>
                <textarea type="text" {...register("message", { required: true, })}
                    className="w-full  outline-none focus:outline-none border-none" placeholder="Your message" />
                <div className="flex justify-center">
                    <input type="submit" value="Send Message" className=" py-2 px-4 cursor-pointer rounded-lg text-base font-bold bg-yellow-500 text-white focus:ring-4 focus:ring-blue-300 enabled:hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800" />
                </div>
            </form>
        </div>
    );
};

export default Contact;