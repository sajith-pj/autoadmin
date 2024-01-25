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
    api: "",
    method: "post",
    body: ({ values }) => {
      return {
        email: values.email,
        first_name: values.first_name,
        last_name: values.last_name,
        mobile_number: values.mobile_number,
        referred_by: values.referred_by,
        department: values.department,
        dealer_id: values.dealer_id,
        username: values.username,
        password: values.password,
      };
    },
    onAfterApiSuccess: (res) => {
      window.location.href = "/dashboard";
    },
  },
};
export { loginForm };