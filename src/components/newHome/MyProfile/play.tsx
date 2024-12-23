import { useState } from "react";
import minus from "../../../assets/minus.svg";
import add from "../../../assets/add.svg";
import { useTranslation } from "react-i18next";

const Play = () => {
  const { t } = useTranslation();

  // State for the number of tickets
  const [ticketCount, setTicketCount] = useState(1);

  // Constants for calculations
  const ticketPrice = 100; // Price per ticket
  const discountRate = 0.1; // 10% discount

  // Calculations
  const totalAmount = ticketCount * ticketPrice;
  const discount = ticketCount > 1 ? totalAmount * discountRate : 0;
  const amountToPay = totalAmount - discount;

  // Handlers for incrementing and decrementing tickets
  const handleIncrement = () => setTicketCount((prev) => prev + 1);
  const handleDecrement = () => setTicketCount((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="w-full">
      <p className="bg-[#FF9671] p-2 text-center">{t("myWallet.buy_multiple_tickets_discount")}</p>
      <p className="text-center text-[#19232c]">{t("myWallet.number_of_tickets")}</p>
      <div className="mx-10 text-[#19232c]">
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
            <p>{t("myWallet.a mount_to_pay")}</p>
            <p>{amountToPay.toFixed(2)} CFA</p>
          </div>
        </div>
      </div>
      <button className="bg-[#FF9671] p-2 w-full">{t("myWallet.pay")}</button>
    </div>
  );
};

export default Play;
