import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const successToastify = (msg) => {
  toast.success(msg, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export const failToastify = (msg) => {
  toast.error(msg, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};
