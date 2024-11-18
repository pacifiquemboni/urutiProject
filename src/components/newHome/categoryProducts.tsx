import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useEffect } from "react";
import { GetAllProductsByCategoryIdThunk } from "@/redux/features/actions/products";

interface CategoryProductsProps {
  selectedItemId: string;
}

const CategoryProducts: React.FC<CategoryProductsProps> = ({ selectedItemId }) => {
  const dispatch = useAppDispatch();
  const { list = [], status } = useAppSelector((s) => s.products) || {};

 

  useEffect(() => {
    if (selectedItemId) {
      dispatch(GetAllProductsByCategoryIdThunk({ categoryId: selectedItemId }));
    }
  }, [dispatch, selectedItemId]);

  return (
    <div className="mx-1 lg:mx-28 h-auto my-10">
      <div className="text-black flex flex-row justify-between">
        {/* Category Name Skeleton */}
        {status === "pending" ? (
          <div className="w-32 h-6 bg-gray-300 animate-pulse rounded"></div>
        ) : (
          <>
            <p>Category Name:</p>
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
        <div className="lg:my-5 flex flex-row gap-2 items-center flex-wrap h-128 lg:h-auto overflow-scroll lg:overflow-hidden">
          {list.length > 0 ? (
            list.map((item, index) => (
              <div
                key={index}
                className="border border-white w-full lg:w-72 p-1 my-3 shadow-xl hover:border-[#FF9671]"
              >
                <div>
                  <div className="flex flex-row justify-between">
                    <p className="text-green-500">Available</p>
                    <button className="bg-[#FF9671] px-2 rounded text-white">Play</button>
                  </div>
                  <div className="flex flex-row items-center gap-4 text-black">
                    <img src={item.picture} alt="Product Logo" className="w-20 h-20" />
                    <div className="w-full">
                      <p>{item.name}</p>
                      <p className="text-sm text-gray-700">{item.description}</p>
                      <div className="flex flex-col justify-between text-sm">
                        <p>Ticket Price: {item.playAmount}</p>
                      </div>
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
  );
};

export default CategoryProducts;
