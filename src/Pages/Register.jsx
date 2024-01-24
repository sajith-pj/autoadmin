import React from 'react'
import Form from '../components/Form/Form'
import { RegisterForm } from '../utils/forms/register'

const Register = () => {
  return (
    
    <div className='w-full h-screen flex justify-center items-center gap-10'>
     <div className='regform w-[40%] max-w-[400px] bg-primary p-[20px] rounded-lg shadow-xl '>
      <h1 className='text-white text-[23px] pb-3'>Create Account</h1>
      <Form {...RegisterForm} />
      <div>
       <button className='text-white border border-white p-[6px] justify-center w-full rounded-md text-[13px] font-semibold'>Sign In</button>
      </div>
   </div>
 <div className='w-[60%] max-w-[500px] bg-white p-[20px] ' >
  <div><h1 className='text-[36px] '>JOIN WITH US !</h1></div>
  <div><h1 className='text-[45px] font-semibold'>YOUR PANEL IS FEW CLICKS AWAY</h1></div>
 </div>
    </div>
  )
}

export default Register