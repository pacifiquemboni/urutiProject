import React, { ReactNode, useEffect, useState } from "react";

import close from "../../../assets/close.svg";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}
const CategoryModal: React.FC<ModalProps> = ({ children, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setIsVisible(true); // Trigger slide-in animation
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false); // Trigger slide-out animation
    setTimeout(onClose, 300); // Delay closure until animation completes
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-[#F1F4FC] p-5 h-screen lg:h-auto lg:mx-20 rounded-md relative w-fit transition-transform duration-300 ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          onClick={handleClose}
          className=" lg:block absolute top-2.5 right-2.5 bg-transparent border-none text-xl cursor-pointer text-black"
        >
          <img src={close} alt="" className="w-5 h-5" />
        </div>
        {children}
      </div>
      {/* <div
        onClick={handleClose}
        className="lg:hidden absolute bottom-2.5 right-2.5 bg-transparent border-none text-xl cursor-pointer text-black"
      >
        <button className="shadow-lg text-red-600 border px-2 rounded">Close</button>
      </div> */}
    </div>
  );
};

export default CategoryModal;
