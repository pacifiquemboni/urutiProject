import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useEffect, useLayoutEffect, useState } from "react";
import { GetAllProductsByCategoryIdThunk } from "@/redux/features/actions/products";
import price from "../../assets/price.svg";
import product from "../../assets/product.svg";
import { GetUserThunk } from "@/redux/features/actions/users/me";
import CategoryModal from "./modal/modal";
import Auth from "./Auth";
import Play from "./MyProfile/play";
import PlayModel from "./modal/playModel";

interface CategoryProductsProps {
  selectedItemId: string;
  selectedItemName: string;
}

const CategoryProducts: React.FC<CategoryProductsProps> = ({
  selectedItemId,
  selectedItemName,
}) => {
  const dispatch = useAppDispatch();
  const { list = [], status } = useAppSelector((s) => s.products) || {};
  const { user, access_token } = useAppSelector((s) => s.user);
  const [loginModel, setLoginModel] = useState(false);
  const [openPlayModel, setOpenPlayModel] = useState(false);
  useLayoutEffect(() => {
    if (!user && access_token) dispatch(GetUserThunk());
  }, [access_token, dispatch, user]);
  useEffect(() => {
    if (selectedItemId) {
      dispatch(GetAllProductsByCategoryIdThunk({ categoryId: selectedItemId }));
    }
  }, [dispatch, selectedItemId]);
  const toggleLoginModel = () => {
    setLoginModel(true);
  };
  const closeModal = () => {
    setLoginModel(false);
  };
  const togglePlayModel = () => {
    dispatch(GetAllProductsByCategoryIdThunk({ categoryId: selectedItemId }));

    setOpenPlayModel(true);

  };

  const closePlayModal = () => {
    setOpenPlayModel(false);
    dispatch(GetAllProductsByCategoryIdThunk({ categoryId: selectedItemId }));


  };
  const { success } = useAppSelector((s) => s.user);

  useEffect(() => {
    if (success) {
      setLoginModel(false);
    }
  }, [success])
  return (
    <>
      <div className="mx-1 lg:mx-28 h-auto my-10">
        <div className="text-black flex flex-row justify-between">
          {/* Category Name Skeleton */}
          {status === "pending" ? (
            <div className="w-32 h-6 bg-gray-300 animate-pulse rounded"></div>
          ) : (
            <>
              <p>
                <span className="font-bold">{selectedItemName}</span>
              </p>
              <p>Total Products: {list.length}</p>
            </>
          )}
        </div>
        <hr className="font-bold" />

        {/* Loading Skeleton or Actual Content */}
        {status === "pending" ? (
          <div className="lg:my-5 flex flex-wrap gap-2 items-center">
            {/* Skeleton for Product Cards */}
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="border border-white w-full lg:w-72 p-1 my-3 shadow-xl hover:border-[#FF9671] animate-pulse"
              >
                <div className="flex flex-row justify-between">
                  {/* Skeleton for Status and Button */}
                  <div className="w-12 h-4 bg-gray-300 rounded"></div>
                  <div className="w-20 h-6 bg-[#FF9671] rounded"></div>
                </div>
                <div className="flex flex-row items-center gap-4 text-black">
                  {/* Skeleton for Image */}
                  <div className="w-20 h-20 bg-gray-300 animate-pulse rounded"></div>
                  <div className="w-full">
                    {/* Skeleton for Text */}
                    <div className="w-32 h-4 bg-gray-300 animate-pulse rounded mb-2"></div>
                    <div className="w-48 h-4 bg-gray-300 animate-pulse rounded mb-2"></div>
                    <div className="flex flex-col justify-between text-sm">
                      <div className="w-32 h-4 bg-gray-300 animate-pulse rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="lg:my-5 flex flex-row gap-2 items-center flex-wrap  ">
            {list.length > 0 ? (
              list.map((item, index) => (
                <div
                  key={index}
                  className="border  w-full lg:w-64 p-1 my-3 shadow-xl  hover:shadow-2xl rounded-lg"
                >
                  <div>
                    <div className="flex flex-row justify-between">
                      <p className="bg-[#222e38] flex flex-row px-2 gap-2 rounded-3xl items-center">
                        <img src={price} alt="" className="w-5 h-5" />
                        {item.playAmount} <span>Price</span>

                      </p>
                      {!user ? (
                        <button onClick={toggleLoginModel} className="bg-[#FF9671] px-2 rounded text-white">Play</button>
                        // <Link to={Client_Login} onClick={() => localStorage.setItem("productId", item.id)}>
                        //   
                        // </Link>

                      ) : (
                        <button
                          onClick={() => {
                            localStorage.setItem("productId", item.id);
                            togglePlayModel();
                          }}
                          className="bg-[#FF9671] px-2 rounded text-white"
                        >
                          Play
                        </button>
                      )}

                    </div>
                    <div className="flex flex-row items-center gap-4 text-black">
                      <img
                        src={item.picture ? item.picture : `${product}`}
                        alt="Product Logo"
                        className="w-20 h-20"
                      />
                      <div className="w-full">
                        <p>{item.name}</p>
                        <p className="text-sm text-gray-700">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No products available for this category.</p>
            )}
          </div>
        )}

      </div>
      {loginModel && (
        <CategoryModal children={<Auth />} onClose={closeModal}></CategoryModal>
      )}
      {openPlayModel && (
        <PlayModel children={<Play />} onClose={closePlayModal}></PlayModel>
      )}
    </>


  );
};

export default CategoryProducts;
