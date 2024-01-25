import { Link } from "react-router-dom";
import Form from "../../components/Form/Form";
import { RegisterForm } from "../../utils/forms/register";
import Styles from "./register.module.scss";

const Register = () => {
  return (
    <div className="custom-container w-full h-screen grid grid-cols-1 md:grid-cols-2    bg-[#FAFBFC]">
      <div className=" order-2 md:order-1 flex justify-center md:justify-end items-center py-8">
        <div
          className={`${Styles["regform"]} w-full block max-w-[400px] bg-primary p-[20px] rounded-lg  `}
        >
          <h1 className="text-white text-[23px] pb-3">Create Account</h1>
          <Form {...RegisterForm} />
          <div className="w-full">
            <Link
              to="/signin"
              className="block text-center text-white border border-white py-[10px] rounded-md w-full   text-[13px] font-semibold"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>

      <div className=" order-1 md:order-2 max-w-[500px]  p-[20px] flex flex-col justify-center items-start">
        <h1 className="text-[25] md:text-[36px]">JOIN WITH US !</h1>
        <h2 className=" text-[20px] md:text-[35px] lg:text-[45px]  font-semibold">
          YOUR PANEL IS FEW CLICKS AWAY
        </h2>
      </div>
    </div>
  );
};

export default Register;
