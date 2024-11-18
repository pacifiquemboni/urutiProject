import { useTranslation } from "react-i18next";
import css from "./style.module.scss";

export default function AboutUsSection() {
  const { t } = useTranslation();

  return (
    <section className="grid md:grid-cols-2 gap-4 py-20 items-center" id="about">
      <div className={`${css.about_img} [&>*]:rounded-xl [&>*]:flex`}>
        <div className="bg-light-grey overflow-hidden">
          <img loading="lazy" src="/car2.jpeg" className="size-full aspect-video object-cover" />
        </div>
        <div className="bg-opacity-50 aspect-[1/0.7] overflow-hidden">
          <img loading="lazy" src="/cash.png" className="size-full object-contain" />
        </div>
        <div className="bg-primary w-fit py-2 px-3 sm:py-4 sm:px-6 flex items-center gap-1 sm:gap-3 text-white">
          <svg
            width="32"
            height="31"
            viewBox="0 0 32 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-6 max-md:size-4"
          >
            <path
              d="M9.33333 30H22.6667M16 30V23.3333C11.3976 23.3333 7.66667 19.6023 7.66667 15V1.66663H24.3333V15C24.3333 16.876 23.7135 18.6071 22.6673 20M24.3333 4.99996H26.8333C29.1345 4.99996 31 6.86544 31 9.16663C31 11.4678 29.1345 13.3333 26.8333 13.3333H24.3333M7.66667 13.3333H5.16667C2.86548 13.3333 1 11.4678 1 9.16663C1 6.86544 2.86548 4.99996 5.16667 4.99996H7.66667"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="max-sm:text-sm">1 {t("Million")}</span>
        </div>
      </div>
      <div>
        <h2 className="text-primary mb-6">{t("about-title")}</h2>
        <p className="text-dark-grey leading-6">{t("about-content")}</p>
      </div>
    </section>
  );
}
