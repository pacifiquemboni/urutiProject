import { useAppDispatch, useAppSelector } from "@/redux/hook";
import price from "../../assets/price.svg";
import product from "../../assets/product.svg";
import { useEffect, useLayoutEffect, useState } from "react";
import { GetProductsThunk } from "@/redux/features/actions/products";
import { GetUserThunk } from "@/redux/features/actions/users/me";
import Auth from "./Auth";
import Play from "./MyProfile/play";
import PlayModel from "./modal/playModel";

const AllProducts = () => {
  const dispatch = useAppDispatch();
  const [openAuthModel, setOpenAuthModel] = useState(false);
  const [openPlayModel, setOpenPlayModel] = useState(false);

  const { success } = useAppSelector((s) => s.user);

  const { list } = useAppSelector((s) => s.products);
  const { user, access_token } = useAppSelector((s) => s.user);
  useLayoutEffect(() => {
    if (!user && access_token) dispatch(GetUserThunk());
  }, [access_token, dispatch, user]);
  useLayoutEffect(() => {
    dispatch(GetProductsThunk({ pageSize: 1000 }));
  }, [dispatch]);

  const toggleAuthModel = () => {
    console.log("Toggling Auth Model");
    setOpenAuthModel(true);
  };
  const closeModal = () => {
    console.log("Closing Auth Model");
    setOpenAuthModel(false);
  };
  const togglePlayModel = () => {
    console.log("Toggling Play Model");
    setOpenPlayModel(true);
    dispatch(GetProductsThunk({ pageSize: 1000 }));
  };

  const closePlayModal = () => {
    console.log("Closing Play Model");
    setOpenPlayModel(false);
    dispatch(GetProductsThunk({ pageSize: 1000 }));
  };

  useEffect(() => {
    if (success) {
      setOpenAuthModel(false);
    }
  }, [success]);

  return (
    <>
      <h1 className="text-3xl font-bold">All Products</h1>
      <div className="lg:my-5 flex flex-row justify-between lg:justify-stretch gap-1 flex-wrap h-128 lg:h-auto overflow-scroll lg:overflow-hidden">
        {list?.length > 0 ? (
          list.map((item, index) => (
            <div
              key={index}
              className="border bg-white w-[48.5%] lg:w-36 my-3 shadow-xl hover:shadow-2xl rounded-lg items-center"
            >
              <div className="w-full h-full flex flex-col items-center justify-center">
                <img
                  src={item.picture ? item.picture : { product }}
                  alt="Product Logo"
                  className="w-fit h-20 border"
                />
                <div className="bg-[#222e38] w-full flex flex-row px-2 gap-2 items-center">
                  <img src={price} alt="" className="w-5 h-5" />
                  {item.playAmount} <span>Price</span>
                </div>
                <div className="w-full border p-2 rounded-b-lg bg-[#222e38]">
                  <p>{item.name}</p>

                  {!user ? (
                    <button
                      onClick={() => {
                        localStorage.setItem("productId", item.id);
                        toggleAuthModel();
                      }}
                      className="bg-[#FF9671] px-2 rounded w-full text-white bottom-1 right-2"
                    >
                      Play
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        localStorage.setItem("productId", item.id);
                        togglePlayModel();
                      }}
                      className="bg-[#FF9671] px-2 rounded w-full text-white bottom-1 right-2"
                    >
                      Play
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No products available At the moment.</p>
        )}
      </div>
      {openAuthModel && (
        <PlayModel children={<Auth />} onClose={closeModal}></PlayModel>
      )}
      {openPlayModel && (
        <PlayModel children={<Play />} onClose={closePlayModal}></PlayModel>
      )}
    </>
  );
};

export default AllProducts;


{/* <div
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
                        onClick={() => {
                          localStorage.setItem("productId", item.id);
                          toggleAuthModel();
                        }}
                        className="bg-[#FF9671] px-2 rounded text-white absolute bottom-1 right-2"
                      >
                        Play
                      </button>
                      
                    ) : (
                      <button
                      onClick={() => {
                        localStorage.setItem("productId", item.id);
                        togglePlayModel();
                      }}
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
      </div> */}