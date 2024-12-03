import { ReactNode, useState } from "react";
interface TooltipProps {
  children: ReactNode; // Type for children (any valid React element)
  message: string; // Type for the tooltip message
}

const Tooltip: React.FC<TooltipProps> = ({ children, message }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className="absolute  bottom-full right-0 lg:left-1/2 transform -translate-x-1/2 mb-2 w-max bg-gray-800 text-white text-sm px-3 py-2 rounded shadow-lg border border-[#FF9671]">
          {message}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
