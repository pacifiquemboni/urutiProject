import { MouseEvent, MouseEventHandler, ReactNode, useState } from "react";
import Button from "../button";
import { Popover, ArrowContainer, PopoverPosition, PopoverAlign } from "react-tiny-popover";

type props = {
  children: ReactNode;
  className?: string;
  onClick?:
    | ((e: MouseEvent<HTMLLIElement | HTMLDivElement | MouseEvent>) => void)
    | MouseEventHandler<HTMLLIElement | HTMLDivElement | HTMLElement>;
};

export function DropDownItem({ children, className = "", onClick }: props) {
  return (
    <div className={`py-2 px-4 hover:bg-black hover:bg-opacity-5 ${className}`} onClick={onClick}>
      {children}
    </div>
  );
}

type dropProps = {
  children: ReactNode;
  positions?: PopoverPosition | PopoverPosition[];
  align?: PopoverAlign;
  arrowColor?: string;
  bordered?: boolean;
  container?: ReactNode;
  containerClassName?: string;
  className?: string;
};

export default function DropDown({
  children,
  positions,
  align,
  arrowColor,
  bordered,
  container,
  containerClassName,
  className = "",
}: dropProps) {
  const [open, setOpen] = useState(false);

  const handleClickOutside = (event: any) => {
    const isClickInsideSection = event.target.closest(".ReactModalPortal");

    if (!isClickInsideSection) {
      setOpen(false);
    }
  };

  return (
    <Popover
      isOpen={open}
      positions={positions || ["left", "right"]}
      align={align || "center"}
      padding={8}
      containerClassName={containerClassName}
      onClickOutside={(e) => handleClickOutside(e)}
      content={({ position, childRect, popoverRect }) => (
        <ArrowContainer
          position={position}
          childRect={childRect}
          popoverRect={popoverRect}
          arrowColor={arrowColor || "#333"}
          arrowSize={5}
        >
          <div
            className={`bg-slate-50 rounded-lg shadow-md !max-w-none min-w-44 overflow-auto ${
              bordered ? "border border-solid border-blue-950 border-opacity-5" : ""
            } ${className}`}
          >
            {children}
          </div>
        </ArrowContainer>
      )}
    >
      <div onClick={() => setOpen(!open)} className="btn-container text-inherit">
        {container || (
          <Button size="xsm3" className="px-0 !border-transparent" outlined>
            <svg
              className=" min-w-[1.25rem] w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 4 15"
            >
              <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
            </svg>
          </Button>
        )}
      </div>
    </Popover>
  );
}
