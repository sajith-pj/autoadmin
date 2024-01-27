import Styles from "./login.module.scss";
import Form from "../../components/Form/Form";
import { loginForm } from "../../utils/forms/login";
import Google from "../../assets/icons/Google";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { post } from "../../config";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      post("/auth/google", {
        googletoken: tokenResponse.access_token,
        tokentype: tokenResponse.token_type,
      }).then((response) => {
        localStorage.setItem("token", response.data.token);
        toast("LoggedIn Successfully", {
          type: "success",
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          onClose: () => (window.location.href = "/"),
        });
      });
    },
  });

  return (
    <div className="custom-container">
      <div className="w-full h-screen grid grid-cols-1 md:grid-cols-2">
        <div className="order-2 md:order-1 flex justify-center md:justify-end items-center py-8">
          <div
            className={`${Styles["loginform"]} w-full  max-w-[400px] bg-primary p-[20px] rounded-lg  `}
          >
            <h1 className="text-white text-[23px] pb-3">Login</h1>
            <Form {...loginForm} />
            <div>
              <button
                className="text-white border border-white p-[6px] justify-center w-full rounded-md text-[13px] font-semibold mb-2"
                onClick={() => navigate("/signup")}
              >
                Create Account
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
        </div>
        <div className=" order-1 md:order-2 max-w-[500px]   md:p-[20px] flex justify-center items-start  flex-col">
          <div>
            <h1 className="text-[25] md:text-[36px] ">WE HAVE A SIMPLEST</h1>
          </div>
          <div>
            <h1 className=" text-[25px] md:text-[35px] lg:text-[45px] font-semibold ">
              SOLUTION FOR YOUR SOLUTIONS
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
