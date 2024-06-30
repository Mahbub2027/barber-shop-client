// import React from 'react';
import { Button, Card, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";

const Login = () => {
    const {logInUser} = useAuth();
    const  { register, formState: { errors }, handleSubmit, } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        logInUser(data.email, data.password)
        .then(res => {
            console.log(res.user);
            navigate('/')
        })
        .catch(error => {
            console.log(error.message);
        })

        console.log(data);
    }

    return (
        <Card className="max-w-sm mx-auto my-20">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput {...register("email", { required: true })} id="email1" type="email" placeholder="name@gmail.com"  />
                    {errors.email && <span className='text-red-600'>This field is required</span>}
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password" value="Password" />
                    </div>
                    <TextInput name="password" {...register("password", { required: true })} id="password1" type="password"  />
                    {errors.password && <span className='text-red-600'>This field is required</span>}
                </div>
                
                <Button type="submit">Submit</Button>
                <p>New Here? Please <span className="text-blue-600 font-bold"><Link to='/signup'>Register</Link></span></p>
            </form>
                
                <GoogleLogin></GoogleLogin>
        </Card>
    );
};

export default Login;