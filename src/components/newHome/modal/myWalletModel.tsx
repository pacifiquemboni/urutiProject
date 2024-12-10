import React, { ReactNode, useEffect } from "react";
import close from "../../../assets/close.svg";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const MyWalletModel: React.FC<ModalProps> = ({ children, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 overflow-y-auto w-full"
    
    >
      <div className="flex items-center justify-center min-h-screen py-10 px-10 ">
        <div className="bg-white  rounded-t-3xl rounded-b-2xl relative w-full h-auto">
          {/* Close button for desktop */}
          <div
            onClick={onClose}
            className="hidden lg:block absolute top-2.5 right-2.5 bg-transparent border-none text-xl cursor-pointer text-black"
            
          >
            <img src={close} alt="Close" className="w-5 h-5" />
          </div>
          {children}
        </div>
      </div>

      {/* Close button for mobile */}
      <div
        onClick={onClose}
        className="lg:hidden fixed bottom-2.5 right-2.5 bg-transparent border-none text-xl cursor-pointer text-black"
      >
        <button className="shadow-lg text-red-600 border px-2 rounded">Close</button>
      </div>
    </div>
  );
};

export default MyWalletModel;
