import Modal from "@/components/modal";
import modalBackLogo from "@assets/img/logo_wa_ndiga.png";
import { Dispatch, SetStateAction, useMemo, useState } from "react";

type props = {
  winningBet?: number;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  draw?: any;
  winners?: any[];
};
export default function RouletteSinglePage({ isOpen, setIsOpen, draw, winners }: props) {
  const [img, setImg] = useState("");
  const currentImg = useMemo(() => {
    setTimeout(() => setImg(draw?.product?.productPicture), 1000);
    return draw?.product?.productPicture;
  }, [draw?.product?.productPicture]);

  console.log(winners);

  return (
    <>
      <img
        src={draw?.product?.productPicture}
        className={`${currentImg != img ? "anime" : ""} before aspect-square object-contain`}
      />
      <Modal
        size="conner"
        isOpen={isOpen}
        className="bg-white text-white bg-opacity-10 border-2 border-solid border-gray-50 border-opacity-5 rounded-xl backdrop-blur-md"
        onRequestClose={() => setIsOpen(false)}
      >
        <div
          className="grid place-items-center w-fit mx-auto"
          style={{ gridTemplateAreas: "child" }}
        >
          <img src={modalBackLogo} className="size-24" style={{ gridArea: "child" }} />
        </div>
        <div>
          <div className="mt-6 text-center grid gap-3">
            {winners?.map?.((o) => (
              <h3 className="token flex [&>*]:flex-1" key={o?.tokenId}>
                {(o?.tokenId as string)?.split("")?.map((s, i) => <span key={i}>{s}</span>)}
              </h3>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
}
