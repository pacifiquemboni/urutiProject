import minus from "../../../assets/minus.svg";
import add from "../../../assets/add.svg";
import { useTranslation } from "react-i18next";

const Play = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full lg:w-1/2 ">
      <p className="bg-[#FF9671] p-2 text-center">{t("myWallet.buy_multiple_tickets_discount")}</p>
      <p className="text-center">{t("myWallet.number_of_tickets")}</p>
      <div className="mx-20">
        <div className="flex flex-row items-center justify-evenly py-2">
          <img src={minus} alt="" className="w-7 h-7" />
          <p>3</p>
          <img src={add} alt="" className="w-7 h-7" />
        </div>
        <div>
          <div className="flex flex-row justify-between py-2">
            <p>{t("myWallet.total_amount")}</p>
            <p>200 CFA</p>
          </div>
          <div className="flex flex-row justify-between py-2">
            <p>{t("myWallet.discount")}</p>
            <p>20 CFA</p>
          </div>
          <div className="flex flex-row justify-between py-2">
            <p>{t("myWallet.amount_to_pay")}</p>
            <p>220 CFA</p>
          </div>
        </div>
      </div>
      <button className="bg-[#FF9671] p-2 w-full">{t("myWallet.pay")}</button>
    </div>
  );
};

export default Play;
