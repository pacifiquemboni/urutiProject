import { useRef } from "react";
import copycode from "../../../assets/copycode.svg";
// import copy from "../../../assets/copy.svg";
import { toast } from "react-toastify";
import Tooltip from "../ToolKit";
import { useTranslation } from "react-i18next";

const CopyTextComponent = () => {
  const { t } = useTranslation();

  const inputRef = useRef<HTMLInputElement>(null); // Using useRef to reference the input element

  const copyText = () => {
    if (inputRef.current) {
      // Select the text field
      inputRef.current.select();
      inputRef.current.setSelectionRange(0, 99999); // For mobile devices

      // Copy the text inside the text field
      navigator.clipboard
        .writeText(inputRef.current.value)
        .then(() => {
          const toastId = toast.loading("Copying...");
          toast.update(toastId, {
            render: `${t("myWallet.copiedText")} ${inputRef.current?.value}`,
            type: "success",
            isLoading: false,
            autoClose: 5000,
          });
          // alert('Copied the text: ' + inputRef.current?.value);
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    }
  };

  return (
    <div className="text-sm flex flex-row items-center gap-2">
      <div className=" text-white">
        <div className="flex flex-row gap-2 items-center">
         Referal Code:<input type="text" value="XYZDHT45" ref={inputRef} readOnly className="w-16 bg-transparent border-none text-gray-700"
 />
          <Tooltip message="Copy your referal Code">
            <button
              onClick={copyText}
              className=" px-2 rounded-xl text-white flex items-center gap-1"
            >
              <img src={copycode} alt="" className="w-10 h-10" />
              {/* {t("myWallet.copyCode")} */}
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default CopyTextComponent;
