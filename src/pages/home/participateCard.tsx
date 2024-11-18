import { IconArrowRight } from "@tabler/icons-react";
import css from "./style.module.scss";
import { useTranslation } from "react-i18next";

type propType = {
  logo?: string[];
  img?: string;
  dial?: string;
  by?: string;
  select?: number;
  className?: string;
};
export default function ParticipateCard({ className = "", ...props }: propType) {
  const { t } = useTranslation();
  return (
    <div
      className={`${className} ${css.p_cards} bg-neutral-300 bg-opacity-40 rounded-2xl p-4 sm:p-8`}
    >
      <div>
        <div className={`${css.title} flex flex-wrap gap-2`}>
          {props?.logo?.map((logo) => (
            <div
              key={logo}
              className={`bg-background grid place-items-center p-1 px-6 rounded-xl flex-grow`}
            >
              <img src={logo} className="h-12" />
            </div>
          ))}
        </div>
        <div className={`${css.img}`}>
          <img src={props?.img} />
        </div>
        <div className={`${css.process}`}>
          <strong className="flex items-center gap-4 mb-4 capitalize">
            <span>{t("process")}</span>
            <IconArrowRight />
          </strong>
          <p
            className="leading-normal"
            dangerouslySetInnerHTML={{ __html: t("process-content") }}
          />
          {/* <ol className="[&>*]:mx-5 [&>*]:px-2 text-dark-grey grid gap-8">
            <li>
              {t("Dial")} <b className="text-primary mx-2">{props?.dial}</b>
            </li>
            <li>
              Choose the number corresponding to the gift you desire or select "Kombo" to enter the
              draw for all the gifts
            </li>
            <li>Complete your transaction by entering the amount of the gift you want</li>
            <li>enter your secret number</li>
            <li>
              Enter the reference number (<b className="text-primary">your phone number</b>)
            </li>
            <li>Enter the amount of 1000</li>
            <li>
              Enter your <b className="text-primary mx-1">password</b> Click 1 to confirm your
              transaction
            </li>
          </ol> */}
        </div>
      </div>
    </div>
  );
}
