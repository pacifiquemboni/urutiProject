import { useAppDispatch, useAppSelector } from "@/redux/hook";
import price from "../../assets/price.svg";
import product from "../../assets/product.svg";
import { useEffect, useLayoutEffect, useState } from "react";
import {  GetProductsThunk } from "@/redux/features/actions/products";
import { GetUserThunk } from "@/redux/features/actions/users/me";
import CategoryModal from "./modal/modal";
import Auth from "./Auth";
import Play from "./MyProfile/play";

const AllProducts = () => {
  const dispatch = useAppDispatch();
  const [openAuthModel, setOpenAuthModel] = useState(false);
  const [openPlayModel, setOpenPlayModel] = useState(false);

  const { success } = useAppSelector((s) => s.user);

  const { list, info } = useAppSelector((s) => s.products);
  const { user, access_token } = useAppSelector((s) => s.user);
  useLayoutEffect(() => {
    if (!user && access_token) dispatch(GetUserThunk());
  }, [access_token, dispatch, user]);
  useLayoutEffect(() => {
      dispatch(GetProductsThunk({ pageSize: 1000 }));
    }, [dispatch]);
  console.log(" all products now", info);
  console.log(" all products list now", list);
  const toggleAuthModel = () => {
    setOpenAuthModel(true);
  };
  const closeModal = () => {
    setOpenAuthModel(false);
  };
  const togglePlayModel = () => {
    setOpenPlayModel(true);
  };
  const closePlayModal = () => {
    setOpenPlayModel(false);
  };
  useEffect(() => {
    if (success) {
      setOpenAuthModel(false)
    }
  }, [success])

  return (
    <>
      <h1 className="text-3xl font-bold">All Products</h1>
      <div className="lg:my-5 flex flex-row justify-between lg:justify-stretch gap-1 flex-wrap h-128 lg:h-auto overflow-scroll lg:overflow-hidden">
        {list.length > 0 ? (
          list.map((item, index) => (
            <div
              key={index}
              className="border bg-white  w-[48.5%] lg:w-40 h-32 p-1 my-3 shadow-xl relative hover:shadow-2xl rounded-lg items-center"
            >
              <div>
                <div className="flex flex-row justify-between ">
                  <p className="bg-[#222e38]/70 flex flex-row px-2 gap-2 rounded-3xl items-center absolute">
                    <img src={price} alt="" className="w-5 h-5" />
                    {item.playAmount} <span>Price</span>
                  </p>
                </div>
                <div className="flex flex-row items-center gap-4 text-black">
                  <img
                    src={item.picture ? item.picture : `${product}`}
                    alt="Product Logo"
                    className="w-fit h-fit"
                  />
                  <div className="w-full absolute bottom-0 left-0 border p-1 rounded bg-[#222e38]/70">
                    <p>{item.name}</p>
                    <br />
                    {!user ? (
                      <button
                        onClick={toggleAuthModel }
                        className="bg-[#FF9671] px-2 rounded text-white absolute bottom-1 right-2"
                      >
                        Play
                      </button>
                    ) : (
                      <button
                        onClick={togglePlayModel}
                        className="bg-[#FF9671] px-2 rounded text-white absolute bottom-1 right-2"
                      >
                        Play
                      </button>
                    )}
                  </div>
                </div>
              </div>

            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No products available At the moment.</p>
        )}
      </div>
      {openAuthModel && (
        <CategoryModal children={<Auth />} onClose={closeModal}></CategoryModal>
      )}
      {openPlayModel && (
        <CategoryModal children={<Play />} onClose={closePlayModal}></CategoryModal>
      )}
    </>
  );
};

export default AllProducts;
