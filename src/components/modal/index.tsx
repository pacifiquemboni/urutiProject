import { ReactNode } from "react";
import ReactModal from "react-modal";
import Button from "../button";

ReactModal.setAppElement("#modals");

type props = {
  children: ReactNode;
  isOpen: boolean;
  className?: string;
  size?: "sm" | "conner";
  onRequestClose: (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>,
  ) => void;
};

export default function Modal({ children, isOpen, onRequestClose, className, size }: props) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={`${size ? `size_${size}` : ""} ${className || ""}`}
    >
      {children}
    </ReactModal>
  );
}

type modelTitle = {
  title?: ReactNode | string;
  onClose: CallableFunction;
};

export function ModalTitle({ onClose, title }: modelTitle) {
  return (
    <div className="flex justify-between mb-4">
      {typeof title == "string" ? <h3>{title}</h3> : title}
      <Button className="!text-black !bg-transparent !p-0" size="xsm2" onClick={() => onClose()}>
        X
      </Button>
    </div>
  );
}
