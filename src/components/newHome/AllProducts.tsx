import { useAppDispatch, useAppSelector } from "@/redux/hook";
import price from "../../assets/price.svg";
import product from "../../assets/product.svg";

import { useEffect, useLayoutEffect, useState } from "react";
import { ClientGetAllProductsThunk } from "@/redux/features/actions/products";

// import { useTranslation } from "react-i18next";
import { GetUserThunk } from "@/redux/features/actions/users/me";
// import { Link } from "react-router-dom";
// import { Client_Login, My_Wallet } from "@/helpers/routes";
import CategoryModal from "./modal/modal";
import ClientLogin from "./Auth/clientLogin";

const AllProducts = () => {
  const dispatch = useAppDispatch();
  // const { t } = useTranslation();
  const [openLoginModel, setOpenLoginModel] = useState(false);
  const { success } = useAppSelector((s) => s.user);

  const { list, info } = useAppSelector((s) => s.products);
  const { user, access_token } = useAppSelector((s) => s.user);
  useLayoutEffect(() => {
    if (!user && access_token) dispatch(GetUserThunk());
  }, [access_token, dispatch, user]);
  useEffect(() => {
    dispatch(ClientGetAllProductsThunk(10));
  }, [dispatch]);
  console.log(" all products now", info);
  console.log(" all products list now", list);
  const toggleLoginModel = () => {
    setOpenLoginModel(true);
  };
  const closeModal = () => {
    setOpenLoginModel(false);
  };
  useEffect(() => {
    if (success) {
      setOpenLoginModel(false)
    }
  }, [success])

  return (
    <>
      <h1 className="text-3xl font-bold">All Products</h1>
      <div className="lg:my-5 flex flex-row justify-between flex-wrap h-128 lg:h-auto overflow-scroll lg:overflow-hidden">
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
                        onClick={toggleLoginModel}
                        className="bg-[#FF9671] px-2 rounded text-white absolute bottom-1 right-2"
                      >
                        Play
                      </button>
                    ) : (
                      <button
                        onClick={toggleLoginModel}
                        className="bg-[#FF9671] px-2 rounded text-white absolute bottom-1 right-2"
                      >
                        Play
                      </button>
                    )}
                  </div>
                </div>
              </div>
              {openLoginModel && (
                <CategoryModal children={<ClientLogin />} onClose={closeModal}></CategoryModal>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No products available for this category.</p>
        )}
      </div>
    </>
  );
};

export default AllProducts;
