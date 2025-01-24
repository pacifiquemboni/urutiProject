import { useEffect, useState } from "react";
// import CategoryModal from "./modal/modal";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { GetCategoriesThunk } from "@/redux/features/actions/radios";
// import CategoryProducts from "./category/categoryProducts";
import categoryImage from "../../../assets/categoryIcon.png"
// import Tooltip from "./ToolKit";
import { useTranslation } from "react-i18next";
// import AllProducts from "./AllProducts";
import { GetProductsThunk } from "@/redux/features/actions/products";
import CategoryModal from "../modal/modal";
import CategoryProducts from "./categoryProducts";
import Tooltip from "../ToolKit";
import AllProducts from "../AllProducts";


const AboutRight = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [selectedItemName, setSelectedItemName] = useState<string | null>(null);
  // const [isExpanded, setIsExpanded] = useState(false);
  // const maxLength = 30;


  const { list } = useAppSelector((s) => s.radio);
  useEffect(() => {
    dispatch(GetCategoriesThunk(10));
  }, [dispatch]);
  // console.log("categories now", list);
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

    dispatch(GetProductsThunk({ pageSize: 1000 }));

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
                <img src={item.picture ? item.picture : `${categoryImage}`} alt="" className="w-16
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
                  {/* <p className="text-sm">
                    {t("category.description")}:
                    { item.description ? `${item.description.slice(0, maxLength)}...`: 'no description yet'}
                    <span
                        onClick={() => OpenModal(item.id, item.name)}

                      style={{ color: "blue", cursor: "pointer", marginLeft: "5px" }}
                    >
                      read more
                    </span>
                  </p> */}
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

      <AllProducts />
    </div>
  );
};

export default AboutRight;
