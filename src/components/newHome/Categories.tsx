import { useEffect, useState } from "react";
import arrow from "../../assets/newassets/arrow-right-2817.png";
import CategoryModal from "./modal/modal";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { GetCategoriesThunk } from "@/redux/features/actions/radios";
import CategoryProducts from "./categoryProducts";
import categoryImage from "../../assets/categoryIcon.png"
import Tooltip from "./ToolKit";
import { t } from "i18next";

const AboutRight = () => {
  const dispatch = useAppDispatch();
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [selectedItemName, setSelectedItemName] = useState<string | null>(null);
  // const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 30;

 
  const { list } = useAppSelector((s) => s.radio);
  useEffect(() => {
    dispatch(GetCategoriesThunk(10));
  }, [dispatch]);
  console.log("categories now", list);
  // console.log("categories info", info);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const OpenModal = (id: string | null, name: string | null) => {
    setSelectedItemId(id);
    setSelectedItemName(name);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedItemId(null);
  };

  return (
    <div className="w-full ml-1 lg:ml-10  mb-10 text-white flex flex-col gap-5 py-5">
      <div className="hidden lg:block">
        <h1 className="text-3xl font-bold">{t("category.join_thrill")}</h1>
        <p className="text-xl">{t("category.play_closer_prizes")}</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-3 w-full flex-wrap justify-between">
        {list.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full lg:w-[49%] border border-[#4a5b68] border-l-8 border-l-[#FF9671] bg-[#222e38]"
            >
              <div className="flex flex-row gap-3 p-2">
                <img src={item.picture ? item.picture: `${categoryImage}` } alt="" className="w-16
                 h-16
                " />
                <div className="flex flex-col text-left w-full">
                  <div className="flex flex-row justify-between items-center">
                    <p className="text-lg font-semibold">{item.name}</p>
                    <Tooltip message={t("category.click_here_category")}>
                      <button
                        onClick={() => OpenModal(item.id, item.name)}
                        className="bg-[#FF9671] px-2 rounded"
                      >
                        {t("category.select")}
                      </button>
                    </Tooltip>
                  </div>
                  <p className="text-lg">
                    {t("category.products")}: ({item.product.length})
                  </p>
                  <p className="text-sm">
                    {t("category.description")}:
                    { item.description ? `${item.description.slice(0, maxLength)}...`: 'no description yet'}
                    <span
                        onClick={() => OpenModal(item.id, item.name)}

                      style={{ color: "blue", cursor: "pointer", marginLeft: "5px" }}
                    >
                      read more
                    </span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        {isModalVisible && (
          <CategoryModal
            children={
              <CategoryProducts
                selectedItemId={`${selectedItemId}`}
                selectedItemName={`${selectedItemName}`}
              />
            }
            onClose={closeModal}
          ></CategoryModal>
        )}
      </div>

      <h1 className="text-3xl font-bold">About game provider</h1>
      <div className="w-full border border-[#4a5b68] flex flex-col lg:flex-row justify-between h-56">
        <div className="flex flex-1 bg-[#222e38] items-center justify-center">
          <p>woohoo</p>
        </div>
        <div className=" flex flex-1  items-center justify-center">
          <p className="text-3xl font-semibold">WOOHOO GAMES</p>
        </div>
        <div className="flex flex-col flex-1 justify-center  p-2 gap-3">
          <div className="flex justify-between p-3 border border-[#4a5b68]">
            <div>
              <p>Games(45)</p>
            </div>

            <img src={arrow} alt="" />
          </div>
          <div className="flex justify-between p-3 border border-[#4a5b68]">
            <div>
              <p>Real-money casinos (45)</p>
            </div>

            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutRight;
