import { useEffect, useLayoutEffect, useState } from "react";
import minus from "../../../assets/minus.svg";
import add from "../../../assets/add.svg";
import price from "../../../assets/price.svg";
import product from "../../../assets/product.svg";

import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { GetUserThunk } from "@/redux/features/actions/users/me";
import { GetProductByIdThunk } from "@/redux/features/actions/products";

const Play = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch();
  const { info } = useAppSelector((s) => s.products) || {};
  const { user, access_token } = useAppSelector((s) => s.user);
  useLayoutEffect(() => {
    if (!user && access_token) dispatch(GetUserThunk());
  }, [access_token, dispatch, user]);
  const productId = localStorage.getItem("productId");
  console.log("prodcuctId:", productId);
  useEffect(() => {
    if (productId) {
      dispatch(GetProductByIdThunk(productId));
    }
  }, [dispatch, productId]);
  console.log("selected product", info);

  // State for the number of tickets
  const [ticketCount, setTicketCount] = useState(1);

  // Constants for calculations
  const ticketPrice = info.playAmount; // Price per ticket
  const discountRate = 0.1; // 10% discount

  // Calculations
  const totalAmount = ticketCount * ticketPrice;
  const discount = ticketCount > 1 ? totalAmount * discountRate : 0;
  const amountToPay = totalAmount - discount;

  // Handlers for incrementing and decrementing tickets
  const handleIncrement = () => setTicketCount((prev) => prev + 1);
  const handleDecrement = () => setTicketCount((prev) => (prev > 1 ? prev - 1 : 1));


  return (
    <div className="flex flex-col gap-4 w-full h-screen lg:h-auto py-5 px-3 justify-center">
      <div className="w-full flex flex-col justify-between">
        <h1 className="text-2xl font-bold text-[#19232c]">Selected Product</h1>
        <div>
          <div className="flex flex-row justify-between ">
            <p className="bg-[#222e38]/70 flex flex-row px-2 gap-2 rounded-3xl items-center absolute">
              <img src={price} alt="" className="w-5 h-5" />
              {info.playAmount} <span>Price</span>
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 text-black">
            <img
              src={info.picture ? info.picture : `${product}`}
              alt="Product Logo"
              className="w-32 h-32"
            />
            <div className="w-full  bottom-0 left-0 border p-2 rounded bg-[#222e38]/70">
              <p>{info.name}</p>
            </div>
          </div>
        </div>

      </div>
      <div className="w-full">
        <p className="bg-[#FF9671] p-2 text-center">{t("myWallet.buy_multiple_tickets_discount")}</p>
        <p className="text-center text-[#19232c]">{t("myWallet.number_of_tickets")}</p>
        <div className="mx-5 text-[#19232c]">
          <div className="flex flex-row items-center justify-evenly py-2">
            <img
              src={minus}
              alt="Decrement"
              className="w-7 h-7 cursor-pointer"
              onClick={handleDecrement}
            />
            <p>{ticketCount}</p>
            <img
              src={add}
              alt="Increment"
              className="w-7 h-7 cursor-pointer"
              onClick={handleIncrement}
            />
          </div>
          <div>
            <div className="flex flex-row justify-between py-2">
              <p>{t("myWallet.total_amount")}</p>
              <p>{totalAmount} CFA</p>
            </div>
            <div className="flex flex-row justify-between py-2">
              <p>{t("myWallet.discount")}</p>
              <p>{discount > 0 ? `${discount.toFixed(2)} CFA` : "0 CFA"}</p>
            </div>
            <div className="flex flex-row justify-between py-2">
              <p>{t("myWallet.amount_to_pay")}</p>
              <p>{amountToPay.toFixed(2)} CFA</p>
            </div>
          </div>
        </div>
        <button className="bg-[#FF9671] p-2 w-full">{t("myWallet.pay")}</button>
      </div>
    </div>

  );
};

export default Play;

 