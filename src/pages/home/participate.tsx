import { useMemo } from "react";
import ParticipateCard from "./participateCard";
import { useTranslation } from "react-i18next";

export default function ParticipateSection() {
  const { t } = useTranslation();
  const list = useMemo(
    () => ({
      logo: ["/airtel_logo.png", "/tigo_logo.png", "vodacom_logo.png", "halotel_logo.png"],
      img: "/sdm.png",
      dial: "*150*60#",
      by: "Pay Bill",
      select: 5,
    }),
    [],
  );

  return (
    <section className="py-20" id="how">
      <h2 className="text-3xl font-extrabold text-center pb-12">{t("head.how")}</h2>
      <ParticipateCard key={list?.img} {...list} />
    </section>
  );
}
