import { ToastContainer } from "react-toastify";
import logo from "../../../assets/logo.png";
import homeIcon from "../../../assets/home.svg";
import copy from "../../../assets/copy.svg";
import copycode from "../../../assets/copycode.svg";
import logout from "../../../assets/logout.svg";
import wallet from "../../../assets/wallet.svg";
import token from "../../../assets/tokens.svg";
import profile from "../../../assets/profile.svg";
import minus from "../../../assets/minus.svg";
import add from "../../../assets/add.svg";

const MyWallet = () => {
  return (
    <div className=" ">
      <div className="bg-[#19232c] text-white shadow-xl">
        <div className="flex flex-row items-center justify-between lg:mx-20">
          <img src={logo} className="w-16 h-16" />
          <div className="flex flex-row items-center gap-2">
            <p className="flex flex-row gap-2 hover:border-b-4 border-[#FF9671]">
              <img src={homeIcon} alt="" className="w-5 h-5" />
              Home
            </p>
            |
            <div className="flex flex-row border p-2 rounded-xl items-center">
              <img src={logout} alt="" className=" w-5 h-5" />
              <p>Logout</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:mx-20 ">
        <div className="flex flex-row justify-between items-center py-5">
          <div>
            <p>Hi, Paci</p>
            <p className="font-bold text-lg">My Babi Wallet</p>
          </div>

          <div className="flex flex-row items-center gap-2">
            <img src={copy} alt="" className="w-12 h-12" />
            <div className="">
              <p className="font-bold">Invite friends</p>
              <div className="flex flex-row gap-2 items-center border rounded-2xl p-1">
                <p className="text-sm">XYZTVB</p>
                <button className="bg-[#FF9671] px-2 rounded-xl text-white flex items-center gap-1">
                  <img src={copycode} alt="" className="w-3 h-3" />
                  Copy code
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="my-3  flex flex-col lg:flex-row gap-3">
          <div className="flex flex-row  lg:w-fit p-1 rounded bg-[#FDF1E2]">
            <img src={wallet} alt="" className="w-12 h-12" />
            <div>
              <p>Balance: 1000 Rf</p>
              <div className="flex flex-row gap-1">
                <button className="bg-[#FF9671] px-2 rounded text-white flex items-center gap-1">
                  Add Funds
                </button>
                <button className="bg-[#FF9671] px-2 rounded text-white flex items-center gap-1">
                  Withdraw
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row  lg:w-fit p-1 rounded bg-[#E8F7E8]">
            <img src={token} alt="" className="w-12 h-12" />
            <div>
              <p>My Tokens</p>
              <div className="flex flex-row gap-1">
                <p>To use for rewards</p>
                <button className="bg-[#FF9671] px-2 rounded text-white flex items-center gap-1">
                  View
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row  lg:w-fit p-1 rounded bg-[#DFF3F9]">
            <img src={profile} alt="" className="w-12 h-12" />
            <div>
              <p>Personal Information</p>
              <div className="flex flex-row gap-1">
                <p>Update your personal information</p>
              </div>
            </div>
          </div>
        </div>
        {/* game details */}
        <div className="">
          <p className="font-bold">Game Details</p>
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 ">
              selected product
              <div key="static-key" className="w-full lg:w-64 p-1 hover:shadow-2xl rounded-lg">
                <div>
                  <div className="flex flex-row justify-between">
                    {/* <p className="bg-[#222e38] flex flex-row px-2 gap-2 rounded-3xl items-center">
                      <img src="price-icon-placeholder.png" alt="Price Icon" className="w-5 h-5" />
                      200K <span>Price</span>
                    </p> */}
                  </div>
                  <div className="flex flex-row items-center gap-4 text-black">
                    <img
                      src="product-image-placeholder.png"
                      alt="Product Logo"
                      className="w-40 h-40"
                    />
                    <div className="w-full">
                      <p>Static Product Name</p>
                      <p className="text-sm text-gray-700">This is a static product description.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 border-l border-r">
              <p className="bg-[#FF9671] p-2 text-center">
                Buy multiple tickets and enjoy a 5% discount
              </p>
              <p className="text-center">Number of Tickets</p>
              <div className="mx-20">
                <div className="flex flex-row items-center justify-evenly py-2">
                  <img src={minus} alt="" className="w-7 h-7" />
                  <p>3</p>
                  <img src={add} alt="" className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex flex-row justify-between py-2">
                    <p>Total Amount</p>
                    <p>200 CFA</p>
                  </div>
                  <div className="flex flex-row justify-between py-2">
                    <p>Discount</p>
                    <p>20 CFA</p>
                  </div>
                  <div className="flex flex-row justify-between py-2">
                    <p>Amount to Pay</p>
                    <p>220 CFA</p>
                  </div>
                </div>
                
              </div>
              <button className="bg-[#FF9671] p-2 w-full">Pay</button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MyWallet;
