import yes from "../../assets/like.svg";
import unlike from "../../assets/unlike.svg";

// import share from "../../assets/newassets/share.png";
// import message from "../../assets/newassets/message.png";
// import add from "../../assets/newassets/add.png";
// import money from "../../assets/newassets/money.png";
// import nb from "../../assets/newassets/nb.png";
import { Link } from "react-router-dom";
import Tooltip from "./ToolKit";
import { t } from "i18next";
const ButtonSection = () => {
  return (
    <div className="bg-[#19232c] w-full">
      <div className="mx-5">
        <div className="flex justify-between py-4 mb-5">
          <div className="flex flex-wrap gap-5 w-80 lg:w-full text-white ">
            <div className="flex items-center  gap-4">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM16 8C20.4 8 24 11.6 24 16C24 20 21.1 23.4 17.1 24V18.3H19L19.4 16H17.2V14.5C17.2 13.9 17.5 13.3 18.5 13.3H19.5V11.3C19.5 11.3 18.6 11.1 17.7 11.1C15.9 11.1 14.7 12.2 14.7 14.2V16H12.7V18.3H14.7V23.9C10.9 23.3 8 20 8 16C8 11.6 11.6 8 16 8Z"
                  fill="#FF9671"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_28_2"
                    x1="16"
                    y1="4.61936e-07"
                    x2="47"
                    y2="48"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#ffffff" />
                    <stop offset="2" stopColor="#fffff" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <p>Facebook</p>
            </div>
            <div className="flex">
              <Link
                to="https://www.instagram.com/vunadeile/"
                target="__blank__"
                className="flex items-center gap-4"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 18.8C14.5 18.8 13.2 17.6 13.2 16C13.2 14.5 14.4 13.2 16 13.2C17.5 13.2 18.8 14.4 18.8 16C18.8 17.5 17.5 18.8 16 18.8Z"
                    fill="#FF9671"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.4 9.2H12.6C11.8 9.3 11.4 9.4 11.1 9.5C10.7 9.6 10.4 9.8 10.1 10.1C9.86261 10.3374 9.75045 10.5748 9.61489 10.8617C9.57916 10.9373 9.5417 11.0166 9.5 11.1C9.48453 11.1464 9.46667 11.1952 9.44752 11.2475C9.34291 11.5333 9.2 11.9238 9.2 12.6V19.4C9.3 20.2 9.4 20.6 9.5 20.9C9.6 21.3 9.8 21.6 10.1 21.9C10.3374 22.1374 10.5748 22.2495 10.8617 22.3851C10.9374 22.4209 11.0165 22.4583 11.1 22.5C11.1464 22.5155 11.1952 22.5333 11.2475 22.5525C11.5333 22.6571 11.9238 22.8 12.6 22.8H19.4C20.2 22.7 20.6 22.6 20.9 22.5C21.3 22.4 21.6 22.2 21.9 21.9C22.1374 21.6626 22.2495 21.4252 22.3851 21.1383C22.4209 21.0626 22.4583 20.9835 22.5 20.9C22.5155 20.8536 22.5333 20.8048 22.5525 20.7525C22.6571 20.4667 22.8 20.0762 22.8 19.4V12.6C22.7 11.8 22.6 11.4 22.5 11.1C22.4 10.7 22.2 10.4 21.9 10.1C21.6626 9.86261 21.4252 9.75045 21.1383 9.61488C21.0627 9.57918 20.9833 9.54167 20.9 9.5C20.8536 9.48453 20.8048 9.46666 20.7525 9.44752C20.4667 9.3429 20.0762 9.2 19.4 9.2ZM16 11.7C13.6 11.7 11.7 13.6 11.7 16C11.7 18.4 13.6 20.3 16 20.3C18.4 20.3 20.3 18.4 20.3 16C20.3 13.6 18.4 11.7 16 11.7ZM21.4 11.6C21.4 12.1523 20.9523 12.6 20.4 12.6C19.8477 12.6 19.4 12.1523 19.4 11.6C19.4 11.0477 19.8477 10.6 20.4 10.6C20.9523 10.6 21.4 11.0477 21.4 11.6Z"
                    fill="#FF9671"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM12.6 7.7H19.4C20.3 7.8 20.9 7.9 21.4 8.1C22 8.4 22.4 8.6 22.9 9.1C23.4 9.6 23.7 10.1 23.9 10.6C24.1 11.1 24.3 11.7 24.3 12.6V19.4C24.2 20.3 24.1 20.9 23.9 21.4C23.6 22 23.4 22.4 22.9 22.9C22.4 23.4 21.9 23.7 21.4 23.9C20.9 24.1 20.3 24.3 19.4 24.3H12.6C11.7 24.2 11.1 24.1 10.6 23.9C10 23.6 9.6 23.4 9.1 22.9C8.6 22.4 8.3 21.9 8.1 21.4C7.9 20.9 7.7 20.3 7.7 19.4V12.6C7.8 11.7 7.9 11.1 8.1 10.6C8.4 10 8.6 9.6 9.1 9.1C9.6 8.6 10.1 8.3 10.6 8.1C11.1 7.9 11.7 7.7 12.6 7.7Z"
                    fill="#FF9671"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_22_75"
                      x1="-11.5"
                      y1="-8.5"
                      x2="49.5"
                      y2="35.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#ffffff" />
                      <stop offset="2" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_22_75"
                      x1="-11.5"
                      y1="-8.5"
                      x2="49.5"
                      y2="35.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#ffffff" />
                      <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_22_75"
                      x1="-11.5"
                      y1="-8.5"
                      x2="49.5"
                      y2="35.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#ffffff" />
                      <stop offset="3" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <p>Instagram</p>
              </Link>
            </div>
            <div className="flex items-center gap-4 max-w-fit">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="16" fill="#FF9671" />
                <path
                  d="M15.1564 18.0072L14.0801 19.0836C13.8532 19.3105 13.4924 19.3105 13.2597 19.0894C13.1957 19.0254 13.1317 18.9672 13.0677 18.9032C12.4684 18.2981 11.9274 17.6639 11.4444 17.0007C10.9674 16.3374 10.5834 15.6741 10.3041 15.0167C10.0306 14.3534 9.89099 13.7192 9.89099 13.1141C9.89099 12.7185 9.96081 12.3403 10.1004 11.9912C10.2401 11.6363 10.4612 11.3105 10.7695 11.0196C11.1419 10.653 11.5492 10.4727 11.9797 10.4727C12.1426 10.4727 12.3055 10.5076 12.451 10.5774C12.6023 10.6472 12.7361 10.7519 12.8408 10.9032L14.1906 12.8057C14.2954 12.9512 14.371 13.085 14.4234 13.213C14.4757 13.3352 14.5048 13.4574 14.5048 13.5679C14.5048 13.7076 14.4641 13.8472 14.3826 13.981C14.307 14.1148 14.1964 14.2545 14.0568 14.3941L13.6146 14.8537C13.5506 14.9177 13.5215 14.9934 13.5215 15.0865C13.5215 15.133 13.5274 15.1737 13.539 15.2203C13.5564 15.2668 13.5739 15.3017 13.5855 15.3367C13.6903 15.5287 13.8706 15.7788 14.1266 16.0814C14.3884 16.3839 14.6677 16.6923 14.9703 17.0007C15.0284 17.0588 15.0924 17.117 15.1506 17.1752C15.3834 17.4021 15.3892 17.7745 15.1564 18.0072Z"
                  fill="black"
                />
                <path
                  d="M21.6524 19.9733C21.6524 20.1362 21.6233 20.3049 21.5651 20.4678C21.5477 20.5144 21.5302 20.5609 21.507 20.6075C21.408 20.8169 21.28 21.0147 21.1113 21.2009C20.8262 21.5151 20.512 21.742 20.1571 21.8875C20.1513 21.8875 20.1455 21.8933 20.1397 21.8933C19.7964 22.0329 19.424 22.1086 19.0226 22.1086C18.4291 22.1086 17.795 21.9689 17.1259 21.6838C16.4568 21.3987 15.7877 21.0147 15.1244 20.5318C14.8975 20.3631 14.6706 20.1944 14.4553 20.014L16.3579 18.1115C16.5208 18.2337 16.6662 18.3267 16.7884 18.3907C16.8175 18.4024 16.8524 18.4198 16.8931 18.4373C16.9397 18.4547 16.9862 18.4606 17.0386 18.4606C17.1375 18.4606 17.2131 18.4257 17.2771 18.3617L17.7193 17.9253C17.8648 17.7798 18.0044 17.6693 18.1382 17.5995C18.272 17.518 18.4059 17.4773 18.5513 17.4773C18.6619 17.4773 18.7782 17.5006 18.9062 17.5529C19.0342 17.6053 19.168 17.6809 19.3135 17.7798L21.2393 19.1471C21.3906 19.2518 21.4953 19.374 21.5593 19.5195C21.6175 19.6649 21.6524 19.8104 21.6524 19.9733Z"
                  fill="black"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_22_144"
                    x1="-11"
                    y1="-43"
                    x2="59"
                    y2="119"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#ffffff" />
                    <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              <p>0659 077 600</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-2">
            <div className=" flex flex-row p-1 gap-2 text-white items-center justify-center">
              <Tooltip message={t("demo.like")}>
                <img src={yes} alt="" className="w-8 h-8" />
              </Tooltip>
              <p>65</p>
            </div>

            <div className="flex flex-row p-1 gap-2 text-white items-center font-bold">
              <Tooltip message={t("demo.unlike")}>
                <img src={unlike} alt="" className="w-8 h-8" />
              </Tooltip>
              <p>65</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonSection;
