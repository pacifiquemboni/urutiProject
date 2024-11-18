import React, { ReactNode } from 'react';

import close from "../../../assets/close.svg"

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}
const CategoryModal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white p-5 h-screen lg:h-auto  lg:mx-24 rounded-md relative w-fit">
        <div onClick={onClose} className="absolute top-2.5 right-2.5 bg-transparent border-none text-xl cursor-pointer text-black">
          <img src={close} alt="" className='w-5 h-5'/>
        </div>
        {children}
      </div>
    </div>
  );
};

export default CategoryModal;
