import { IconCircleFilled } from "@tabler/icons-react";
import css from "./style.module.scss";

export default function LiveSection() {
  return (
    <section className="full-width bg-black text-white py-12">
      <div className="flex flex-wrap gap-4 gap-x-16 items-center">
        <div className="flex gap-4 text-primary">
          <img src="/itv.png" alt="itv" className="rounded-lg px-10 py-2 bg-white" />
          <div className="flex flex-col justify-evenly font-semibold">
            <p className="flex gap-4 items-center">
              <IconCircleFilled className="text-orange-500 size-3" /> Live
            </p>
            <p>ITV at 9:55</p>
          </div>
        </div>
        <div className="flex-1 text-balance">
          It's that easy, you will receive your tokens via text message and then enter the daily
          draw that will be held live via{" "}
          <span className={`uppercase ${css.gradient} ${css.text} font-semibold`}>
            ITV at 9:55 p.m.
          </span>{" "}
          Monday to Wednesday and 06:10 p.m. every{" "}
          <span className={`${css.gradient} ${css.text} font-semibold`}>Thursday to Sunday.</span>
        </div>
      </div>
    </section>
  );
}
