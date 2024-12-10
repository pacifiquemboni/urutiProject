import { useTranslation } from "react-i18next";
import AboutLeft from "./AboutLeft";
import AboutRight from "./Categories";
// import Casinos from "./casinos";
import JoinFree from "./joinFree";


const About = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#19232c] py-10">
      <div className="mx-2 lg:mx-20 flex flex-col lg:flex-row text-white">
        <div className=" lg:hidden">
        <h1 className="text-3xl font-bold">{t("category.join_thrill")}</h1>
        <p className="text-xl">{t("category.play_closer_prizes")}</p>
        </div>
        <AboutLeft />
        <AboutRight />
      </div>
    <JoinFree />
    {/* <Casinos /> */}

    </div>
  );
};

export default About;
