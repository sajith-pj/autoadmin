import * as Yup from "yup";
let RegisterForm = {
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
        text: "Name",
        className: "text-white bg-none",
      },
      input: {
        type: "text",
        name: "name",
        placeholder: "Enter the name",
      },
    },
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
        placeholder: "Enter your email address",
      },
    },
    {
      container: {
        className: "",
      },
      label: {
        text: "Phone Number",
        className: "text-white",
      },
      input: {
        type: "text",
        name: "phoneNumber",
        placeholder: "Enter your phoneNumber",
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
        placeholder: "Enter your password",
      },
    },
    {
      container: {
        className: "",
      },
      label: {
        text: "confirm password",
        className: "text-white",
      },
      input: {
        type: "password",
        name: "confirmPassword",
        placeholder: "Re-enter your password",
      },
    },
  ],
  validationSchema: {
    name: Yup.string().required("please Enter the name"),
    email: Yup.string().required("please Enter your email address"),
    phoneNumber: Yup.string().required("please Enter the phonenumber"),
    password: Yup.string().required("please Enter the password"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  },
  buttons: {
    items: [
      {
        type: "submit",
        name: "submit",
        displayText: "Create Account",
        className:
          "bg-white text-primary  py-[10px] rounded-md w-full hover:bg-hover-color my-[10px] text-sm font-Poppins font-bold",
      },
    ],
  },

  submit: {
    api: "/auth/signup",
    method: "POST",
    body: ["name", "email", "password", "phoneNumber", "confirmPassword"],
    onAfterApiSuccess: () => {
      window.location.href = "/singin";
    },
  },
};
export { RegisterForm };
