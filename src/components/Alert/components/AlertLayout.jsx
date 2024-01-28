import Styles from "./alert.module.scss";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import CloseIcon from "../../../assets/icons/Close";

const AlertLayout = ({ children, onClose }) => {
  return (
    // <AnimatePresence mode='sync'>
    // <motion.div
    //   initial={{ opacity: 0, x: "-50%", y: "0%" }}
    //   animate={{ opacity: 1, y: "-50%" }}
    //   // exit={{ opacity: 0, y: "0%" }}
    //   // transition={{ duration: 0.5 }}
    //   // initial={{ y: 10, opacity: 0 }}
    //   // animate={{ y: 0, opacity: 1 }}
    //   exit={{ y: -1000, opacity: 0 }}
    //   transition={{ duration: 1}}
    <div className={`${Styles["layout-container"]} shadow-xl shadow-[#eeeeee]`}>
      <div
        className={`${Styles["layout-wrapper"]} flex justify-center items-center flex-col`}
      >
        <button type="button" className={Styles["close-btn"]} onClick={onClose}>
          <CloseIcon width={20} height={20} />{" "}
        </button>
        {children}
      </div>
    </div>
    ///* </motion.div>
    // </AnimatePresence>
  );
};

export default AlertLayout;
