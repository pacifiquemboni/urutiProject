import BigNumber from "@/components/etc/bigNumber";
import Loader2 from "@/components/etc/loader2";
import { Small } from "@/components/etc/small";
import { ReportProductsThunk } from "@/redux/features/actions/reports";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import React, { useLayoutEffect } from "react";

export default function ProductsSection() {
  const { user } = useAppSelector((s) => s.user);
  const { data, status } = useAppSelector((s) => s.reports.productStatus);
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    const filter: any = {};

    if (user?.attributes?.radioId?.length == 1)
      filter.radioId = user?.attributes?.radioId?.[0] || filter?.radioId;

    dispatch(ReportProductsThunk(filter));
  }, [dispatch, user?.attributes?.radioId]);

  return (
    <section className="p-4 rounded-lg bg-white">
      <h3 className="flex gap-2 items-center mb-4">
        Ongoing Prizes <Small className="font-normal px-2 !h-fit !rounded-lg">{data?.length}</Small>
      </h3>
      {status == "pending" ? (
        <div className="grid place-items-center">
          <Loader2 />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-6 gap-x-12 max-lg:grid-cols-2 max-md:grid-cols-1">
          {data?.map?.((one) => (
            <React.Fragment key={one?.product?.id}>
              <div className="flex-1 flex justify-between gap-2 gap-x-5 items-center">
                <img
                  src={one?.product?.picture}
                  className="size-10 object-contain bg-light-grey bg-opacity-50 rounded-md"
                />
                <div className="flex-grow">
                  <p>
                    {one?.product?.name}{" "}
                    {user?.attributes?.radioId?.length != 1 && one?.product?.radio?.name && (
                      <small className="text-grey italic">
                        - {one?.product?.radio?.name || "Radio"}
                      </small>
                    )}
                  </p>
                  <small className="text-grey">
                    {/* <Currency amount={one?.totalamount} /> */}
                    Tsh <BigNumber value={one?.totalamount} clickToggle />
                  </small>
                </div>
                <div className="text-end">
                  <p>{one?.percentage}%</p>
                  <div className="mt-0.5 h-1 w-16 bg-primary bg-opacity-15 rounded-full overflow-auto">
                    <div
                      className={`bg-primary h-full rounded-full ml-auto`}
                      style={{ width: `${one?.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      )}
    </section>
  );
}
