import BigNumber from "@/components/etc/bigNumber";
import imageplaceholder from "@assets/img/placeholder.jpeg";
import Loader2 from "@components/etc/loader2";
import { customTableProps } from "@components/table";
import Actions from "./actions";

export function List({ page, loading }: customTableProps<any>) {
  if (loading)
    return (
      <div className="w-full flex justify-center">
        <Loader2 />
      </div>
    );
  return (
    <div className="grid gap-x-2 gap-y-3 text-sm grid-cols-[repeat(auto-fill,_minmax(min(100%,20rem),1fr))]">
      {page.map((row) => (
        <div
          key={row?.original?.id}
          className="py-3 px-4 flex flex-col rounded-md border border-solid border-primary border-opacity-10"
        >
          <div className="flex gap-2 items-center justify-between text-primary">
            <div className="flex gap-1 flex-wrap">
              <span
                className={`p-2 py-1 rounded-md ${row?.original?.isAvailable ? "bg-primary" : "bg-grey text-red-700"} bg-opacity-5`}
              >
                {row?.original?.isAvailable ? "Available" : "Unavailable"}
              </span>
              {row?.original?.isCallNeeded && (
                <span className="p-2 py-1 rounded-md bg-primary bg-opacity-5">Can Call</span>
              )}
              {row?.original?.isBonus && (
                <span className="p-2 py-1 rounded-md bg-gray-100">Bonus</span>
              )}
            </div>
            <Actions data={row?.original} />
          </div>
          <div className="flex flex-wrap gap-2 pt-4 flex-1">
            <img
              loading="lazy"
              src={row?.original?.picture || imageplaceholder}
              className="sm:w-[30%] object-contain max-w-full rounded-lg mx-auto"
              onError={(e: any) => {
                e.target.onError = null;
                e.target.src = imageplaceholder;
              }}
            />
            <div className="flex-1 grid self-center">
              <h3 className="font-medium">{row?.original?.productName}</h3>
              <div className="flex flex-wrap gap-x-4">
                <p className="text-grey flex-1">{row?.original?.description}</p>
                <span>
                  <small className="text-grey">Tsh</small>{" "}
                  <BigNumber value={row?.original?.playAmount} clickToggle />
                </span>
              </div>
            </div>
          </div>
          <div className="flex [&>*]:flex-1 gap-1 pt-2 [&>*>span]:text-grey max-sm:flex-col">
            <p className="p-2 py-1 rounded-md bg-primary bg-opacity-5">
              <span>Winners</span>
              <br />
              {row?.original?.numberOfWinners}
            </p>
            <p className="p-2 py-1 rounded-md bg-primary bg-opacity-5">
              <span>D.Period</span>
              <br />
              {row?.original?.drawPeriod}
            </p>
            <p className="p-2 py-1 rounded-md bg-primary bg-opacity-5">
              <span>
                Cost <small>(TSH)</small>
              </span>
              <br />
              <span className="!text-foreground">
                {<BigNumber value={row?.original?.productCost} clickToggle />}
              </span>
            </p>
          </div>
          <div className="flex [&>*]:flex-1 gap-1 pt-2 [&>*>span]:text-grey max-sm:flex-col">
            <p className="p-2 py-1 rounded-md bg-primary bg-opacity-5">
              <span>Priority</span>
              <br />
              {row?.original?.priority}
            </p>
            <p className="p-2 py-1 rounded-md bg-primary bg-opacity-5">
              <span>Margin</span>
              <br />
              {row?.original?.product_margin}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
