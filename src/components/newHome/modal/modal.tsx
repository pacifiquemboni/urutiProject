import React, { ReactNode, useEffect } from "react";

import close from "../../../assets/close.svg";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}
const CategoryModal: React.FC<ModalProps> = ({ children, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="fixed inset-0  bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white p-5 h-screen lg:h-auto  lg:mx-20 rounded-md relative w-fit">
        <div
          onClick={onClose}
          className="hidden lg:block absolute top-2.5 right-2.5 bg-transparent border-none text-xl cursor-pointer text-black"
        >
          <img src={close} alt="" className="w-5 h-5" />
        </div>
        {children}
      </div>
      <div
        onClick={onClose}
        className="lg:hidden absolute bottom-2.5 right-2.5 bg-transparent border-none text-xl cursor-pointer text-black"
      >
        <button className="shadow-lg text-red-600 border px-2 rounded">Close</button>
      </div>
    </div>
  );
};

export default CategoryModal;
