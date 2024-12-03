import { t } from "i18next";
import logo from "../../assets/logo.png";
import ValuesIcon from "../../assets/values.png";
import whoWeAreIcon from "../../assets/whoWeare.svg";
const AboutLeft = () => {
  return (
    <div>
      {/* about left */}
      <div className="w-full lg:w-80  text-white flex flex-col gap-5">
        <div className="border border-[#4a5b68] bg-[#222e38]">
          <img src={logo} alt="" className="w-full border-b border-[#4a5b68]" />
          <div className="flex gap-2 justify-center py-3">
            <img src={whoWeAreIcon} alt="" className="w-5 h-5" />

            <h1 className="text-center">{t("category.who_we_are")}</h1>
          </div>

          <div className="p-3">
            <p>
            {t("category.mission")}
            </p>
          </div>
        </div>

        <div className="border border-[#4a5b68] bg-[#222e38]">
          <div className="flex gap-2 justify-center py-3">
            <h1 className="text-center">{t("category.our_values")}</h1>
          </div>
          <div className="flex items-center p-3">
            <img src={ValuesIcon} alt="" width={150} />
            <h1 className="text-center w-28 ">
            {t("category.values")}
            </h1>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AboutLeft;
