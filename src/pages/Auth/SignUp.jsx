// import React from 'react';
import { Button, Card, Label, TextInput } from "flowbite-react";
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import GoogleLogin from "./GoogleLogin";


const SignUp = () => {

    // form validation rules start
    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .required('Password is required'),
            // .min(6, 'Password must be at least 6 characters'),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password')], 'Passwords must match')
            
    });
    const formOptions = { resolver: yupResolver(validationSchema) };
    //   form validation rules end

    const  { register, formState: { errors }, handleSubmit, } = useForm(formOptions);
    const {createUser , updateUser} = useAuth();
    const navigate = useNavigate();

    // const password = useRef({});
    // password.current = watch("password", "")

      const onSubmit = data => {

        createUser( data.email, data.password)
        .then(res=> {
            // update user
            updateUser(data.firstName, data.lastName, data.photo)
            .then(()=>{

            })
            .catch((error =>{
                console.log(error.message);
            }))

            console.log(res.user);
            navigate('/')
        })
        .catch(error =>{
            console.log(error.message);
        })
        // console.log(data);
      };
    return (
        
            <Card className="max-w-sm mx-auto my-20">
            <form  onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="" value="First Name" />
                    </div>
                    <TextInput {...register("firstName", { required: true })} id="fname" type="text" placeholder=""  />
                    {errors.firstName && <span className='text-red-600'>This field is required</span>}
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="" value="Last Name" />
                    </div>
                    <TextInput {...register("lastName", { required: true })} id="lname" type="text" placeholder=""  />
                    {errors.lastName && <span className='text-red-600'>This field is required</span>}
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput {...register("email", { required: true })} id="email1" type="email" placeholder="name@gmail.com"  />
                    {errors.email && <span className='text-red-600'>This field is required</span>}
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1" value="New password" />
                    </div>
                    <TextInput name="password" {...register("password", { required: true })} id="password1" type="password"  />
                    {errors.password && <span className='text-red-600'>This field is required</span>}
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password2" value="Confirm password" />
                    </div>
                    <TextInput name="confirmPassword" {...register("confirmPassword", { required: true }, 
                        )} id="password2" type="password"  />
                    {errors.confirmPassword && <span className='text-red-600'>Password do not match</span>}
                </div>
                
                <Button type="submit">Submit</Button>
                <div><p>Already Have an account? <span className="text-blue-500 font-bold"><Link to='/login'>Login</Link></span></p></div>
            </form>

            {/* social log in */}
            <GoogleLogin></GoogleLogin>
        </Card>
        
    );
};

export default SignUp;