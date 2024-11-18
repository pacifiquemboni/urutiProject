import { SetStateAction, useEffect, useState } from "react";
import arrow from "../../assets/newassets/arrow-right-2817.png";
import CategoryModal from "./modal/modal";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { GetCategoriesThunk } from "@/redux/features/actions/radios";
import CategoryProducts from "./categoryProducts";

const AboutRight = () => {
  const dispatch = useAppDispatch();
  const [selectedItemId, setSelectedItemId] = useState(null);
  const { list } = useAppSelector((s) => s.radio);
  useEffect(() => {
    dispatch(GetCategoriesThunk(10));
  }, [dispatch]);
  // console.log("categories now", list);
  // console.log("categories info", info);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const OpenModal = (id: SetStateAction<null>) => {
    setSelectedItemId(id);
    setIsModalVisible(true);
  };
  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedItemId(null);
  };

  return (
    <div className="w-full ml-1 lg:ml-10  mb-10 text-white flex flex-col gap-5 py-5">
      <div className="hidden lg:block">
        <h1 className="text-3xl font-bold">Join the thrill of Babi Games</h1>
        <p className="text-xl">
          where every play brings you closer to life-changing prizes! From cash rewards to dream
          gadgets, there's something for everyone. Don’t just watch others win—be the next big
          winner today!
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-3 w-full flex-wrap justify-between">
        {list.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full lg:w-[49%] border border-[#4a5b68] border-l-8 border-l-[#FF9671] bg-[#222e38]"
            >
              <div className="flex flex-row gap-3 p-2 items-center">
                <img src={item.picture} alt="" className="w-20 h-20" />
                <div className="flex flex-col text-left w-full">
                  <div className="flex flex-row justify-between items-center">
                    <p className="text-2xl font-semibold">{item.name}</p>
                    <button onClick={() => OpenModal(item.id)} className="bg-[#FF9671] px-2 rounded">
                      Select
                    </button>
                  </div>
                  <p className="text-lg">Products: ({item.product.length})</p>
                  <p>Description: {item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
        {isModalVisible && (
          <CategoryModal
            children={<CategoryProducts selectedItemId={`${selectedItemId}`}  />}
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
