import React from 'react'
import Form from "../components/Form/Form";
import { loginForm } from '../utils/forms/login';
import Google from '../assets/icons/Google';

import { useGoogleLogin } from "@react-oauth/google";
import axios from 'axios';


const Login = () => {
const login = useGoogleLogin({
  onSuccess: async(tokenResponse) => {
    const userInfo = await axios
        .get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        })
        .then(res => res.data);

      console.log(userInfo);
  }
});
    
  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center gap-10">
        <div className="regform w-[40%] max-w-[400px] bg-primary p-[20px] rounded-lg shadow-xl ">
          <h1 className="text-white text-[23px] pb-3">Login</h1>
          <Form {...loginForm} />
          <div>
            <button className="text-white border border-white p-[6px] justify-center w-full rounded-md text-[13px] font-semibold mb-2">
              Sign In
            </button>
          </div>
          <div className="flex gap-4 items-center justify-center my-[12px]">
            <div className="border border-b  white w-full " />
            <p className="text-white text-[12px]">or</p>
            <div className="border border-b-white w-full" />
          </div>
       
            <button
              onClick={() => login()}
              className="text-primary text-[23px] py-2 flex items-center justify-center bg-white w-full gap-2 rounded-md"
            >
              <Google width={17} height={17} />
              <p className="text-[15px] font-semibold">Google</p>
            </button>
          
        </div>
        <div className="w-[60%] max-w-[500px] bg-white p-[20px] ">
          <div>
            <h1 className="text-[36px] ">WE HAVE A SIMPLEST</h1>
          </div>
          <div>
            <h1 className="text-[45px] font-semibold ">
              SOLUTION FOR YOUR SOLUTIONS
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login