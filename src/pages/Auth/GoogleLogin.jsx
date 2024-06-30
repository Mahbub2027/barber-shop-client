// import React from 'react';

import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
// import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
    const {googleLogin} = useAuth();
    const navigate = useNavigate();

    const handleGoogleLogin = ()=>{
        googleLogin()
        .then(res=> {
            console.log(res.user)
            navigate('/');
        })
        .catch(error => console.log(error.message))
    }

    // const handleFaceBookLogin = () =>{
    //     //
    // }

    return (
        <div>
            <button onClick={handleGoogleLogin} className="w-full flex gap-16 items-center p-2 border-2 rounded-2xl">
                <FcGoogle className="text-2xl"></FcGoogle>
                <p className="">Continue with Google</p>
            </button>
            {/* <button onClick={handleFaceBookLogin} className="w-full mt-5 font-bold flex gap-16 items-center p-2 border-2 rounded-2xl">
                <FaFacebook className="text-2xl"></FaFacebook>
                <p className="">Continue with Facebook</p>
            </button> */}
        </div>
    );
};

export default GoogleLogin;