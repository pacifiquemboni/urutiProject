import { TicketIcon } from "@/assets/icons";
import Currency from "@/components/etc/currency";
import { GetProductsThunk } from "@/redux/features/actions/products";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";

export default function PrizeSection() {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { list, status } = useAppSelector((s) => s.products);

  useLayoutEffect(() => {
    dispatch(GetProductsThunk({ pageSize: 1000 }));
  }, [dispatch]);

  return (
    <section id="prize" className="py-16">
      <h2>{t("ongoing prizes")}</h2>
      {status == "pending" ? (
        <>loading ...</>
      ) : (
        <div className="mt-6 grid lg:grid-cols-3 md:grid-cols-2 gap-8 lg:gap-x-20">
          {list
            ?.filter?.((prize) => prize?.isAvailable)
            ?.map?.((prize) => (
              <div key={prize?.id} className="grid">
                <img
                  src={prize?.picture}
                  alt={prize?.name}
                  loading="lazy"
                  className="w-full aspect-video object-contain bg-light-grey rounded-2xl"
                />
                <div className="p-4 flex flex-wrap gap-4 items-center justify-between text-grey [&>*]:flex [&>*]:items-center [&>*]:gap-2">
                  <p className="capitalize flex flex-col !gap-0 !items-start">
                    <span className="text-lg text-foreground">{prize?.name}</span>
                    <small>
                      {prize?.numberOfWinners}{" "}
                      {prize?.numberOfWinners == 1 ? t("winner for draw") : t("winners for draw")}
                    </small>
                  </p>
                  <p>
                    <TicketIcon />
                    <span>
                      <Currency amount={prize?.playAmount} /> / Ticket
                    </span>
                  </p>
                </div>
                {/* <pre>{JSON.stringify(prize, null, 2)}</pre> */}
              </div>
            ))}
        </div>
      )}
    </section>
  );
}
