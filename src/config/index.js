import { alertist } from "../components/Alert";
import config from "./axios";
const axiosInstance = config.axios;
const handleErrorAlertSuccessClick = (status) => {
  if (status == 401) {
    window.location = "/signin";
  }
};

const getMessages = (status, message) => {
  if (message !== undefined && message !== "") {
    return message;
  }
  return "Something Went Wrong";
};

const handleResponse = (error) => {
  let message =
    error.response?.data.message !== undefined
      ? error.response.data.message
      : "";
  let successStatusCode = [200];
  let errorStatusCode = [400, 500, 404, 403];
  let status = error.response?.status;

  if (errorStatusCode.includes(status)) {
    alertist({
      type: "oops",
      title: "Oops",
      subtitle: getMessages(status, message),
      timer: 2000,
      successButton: {
        show: true,
        displayText: "Okay",
        className: "bg-primary text-white px-4 py-2 rounded-lg text-[14px]",
        onClick: () => handleErrorAlertSuccessClick(status),
      },
      cancelButton: {
        show: false,
      },
    });
  } else if (status === 401) {
    window.location ='/signin'
  }

  if (successStatusCode.includes(status)) {
    alertist({
      type: "success",
      title: "Success",
      subtitle: getMessages(status, message),
      timer: 2000,
      successButton: {
        show: true,
        displayText: "Okay",
        className:
          "bg-primary_btn px-[17px] py-2 rounded-md text-white text-[12px]",
        onClick: () => handleErrorAlertSuccessClick(status),
      },
      cancelButton: {
        show: false,
      },
    });
  }
};

const get = (api, data, config) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .get(api, data, config)
      .then((response) => {
        // handleResponse(response);
        resolve(response);
      })
      .catch((error) => {
        handleResponse(error);
        reject(error);
      });
  });
};
const post = (api, data, config) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .post(api, data, config)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        handleResponse(error);
        reject(error);
      });
  });
};
const patch = (api, data, config) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .patch(api, data, config)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        handleResponse(error);
        reject(error);
      });
  });
};

export const axios = { get, post, patch };
export { get, post, patch };
