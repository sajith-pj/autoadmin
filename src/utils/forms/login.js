import { toast } from "react-toastify";
import * as Yup from "yup";
let loginForm = {
  inputContainer: {
    className: "",
    exclude: [],
  },
  template: [
    {
      container: {
        className: "",
      },
      label: {
        text: "Email",
        className: "text-white",
      },
      input: {
        type: "email",
        name: "email",
        placeholder: "enter your email address",
      },
    },

    {
      container: {
        className: "",
      },
      label: {
        text: "Password",
        className: "text-white",
      },
      input: {
        type: "password",
        name: "password",
        placeholder: "enter your password",
      },
    },
  ],
  validationSchema: {
    email: Yup.string().required("please enter your email address"),
    password: Yup.string().required("please enter the password"),
  },
  buttons: {
    items: [
      {
        type: "submit",
        name: "submit",
        displayText: "Sign In",
        className:
          "bg-white text-primary  py-[10px] rounded-md w-full hover:bg-hover-color my-[10px] text-sm font-Poppins font-bold",
      },
    ],
  },

  submit: {
    api: "/auth/signin",
    method: "post",
    body: ["email", "password"],
    onAfterApiSuccess: (response) => {
      localStorage.setItem("token", response.data.token);
      toast("LoggedIn Successfully", {
        type: "success",
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        onClose: () => (window.location.href = "/"),
      });
    },
  },
};
export { loginForm };
