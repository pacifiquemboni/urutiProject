import { GiftIcon } from "@/assets/icons";
import Button from "@/components/button";
import DropDown from "@/components/dropdown";
import AddPrizeButton from "@/components/etc/AddPrizeButton";
import CheckRole from "@/components/etc/CheckRoles";
import SimpleCheckbox from "@/components/form/simple_checkbox";
import Modal, { ModalTitle } from "@/components/modal";
import {
  AssignBonusThunk,
  EditProductsThunk,
  GetAllProductsThunk,
  ProductBonusesThunk,
  UnassignBonusThunk,
} from "@/redux/features/actions/products";
import { useAppDispatch } from "@/redux/hook";
import { IconCircle, IconGift, IconTrashX } from "@tabler/icons-react";
import { IconChecks, IconDots } from "@tabler/icons-react";
import { Field, Formik } from "formik";
import { useCallback, useEffect, useState } from "react";
import * as Yup from "yup";

export default function Actions({ data }: { data: any }) {
  return (
    <>
      <DropDown
        positions="bottom"
        align="end"
        container={
          <span className="px-1 rounded-md flex border border-solid border-primary border-opacity-20">
            <IconDots />
          </span>
        }
      >
        <CheckRole permission="update_product">
          <AddPrizeButton updateProduct={data} />
          <ToggleAvailability data={data} />
          {/* <AddToRadio data={data} /> */}
          <ToggleCall data={data} />
          {!data.isBonus && <Bonuses product={data} />}
        </CheckRole>
      </DropDown>
    </>
  );
}

function ToggleAvailability({ data }: { data: any }) {
  const dispatch = useAppDispatch();
  const [submitting, setSubmitting] = useState(false);
  const toggleAvailability = useCallback(async () => {
    setSubmitting(true);
    try {
      await dispatch(
        EditProductsThunk({ id: data?.productId, data: { isAvailable: !data?.isAvailable } }),
      );
    } catch (e) {
      // error
    }
    setSubmitting(false);
  }, [data?.productId, data?.isAvailable, dispatch]);

  return (
    <>
      <div
        className={`px-4 flex items-center py-2 hover:bg-black hover:bg-opacity-5 ${submitting ? "text-grey" : data?.isAvailable ? "text-red-500" : ""}`}
        onClick={() => !submitting && toggleAvailability()}
      >
        {data?.isAvailable ? <IconTrashX className="w-4" /> : <IconChecks className="w-4" />}
        <span className="pl-3">{data?.isAvailable ? "Disable" : "Enable"}</span>
      </div>
    </>
  );
}

function ToggleCall({ data }: { data: any }) {
  const dispatch = useAppDispatch();
  const [submitting, setSubmitting] = useState(false);
  const toggleAvailability = useCallback(async () => {
    setSubmitting(true);
    try {
      await dispatch(
        EditProductsThunk({ id: data?.productId, data: { isCallNeeded: !data?.isCallNeeded } }),
      );
    } catch (e) {
      // error
    }
    setSubmitting(false);
  }, [data?.productId, data?.isCallNeeded, dispatch]);

  return (
    <>
      <div
        className={`px-4 flex items-center py-2 hover:bg-black hover:bg-opacity-5 ${submitting ? "text-grey" : data?.isCallNeeded ? "text-red-500" : ""}`}
        onClick={() => !submitting && toggleAvailability()}
      >
        {data?.isCallNeeded ? <IconTrashX className="w-4" /> : <IconChecks className="w-4" />}
        <span className="pl-3">{data?.isCallNeeded ? "Disable Call" : "Enable Call"}</span>
      </div>
    </>
  );
}

// const filterRadios = async (inputValue: stborder) => {
//   try {
//     const res = await axios.get(`/v1/category`, {
//       params: { pageSize: 8, pageNumber: 1, search: inputValue },
//     });

//     return res?.data?.list?.map?.((one: any) => ({
//       value: one?.id,
//       label: one?.name,
//     }));
//   } catch (error) {
//     return [];
//   }
// };

// export function AddToRadio({ data }: { data: any }) {
//   const [isSubmitting, setSubmitting] = useState(false);
//   const dispatch = useAppDispatch();
//   const [radioId, setRadioId] = useState("");
//   const [open, setOpen] = useState(false);

//   const del = useCallback(async () => {
//     setSubmitting(true);
//     try {
//       console.log("edit", radioId);
//       await dispatch(EditProductsThunk({ data: { ...data, radioId }, id: data?.id })).unwrap();
//       setOpen(false);
//     } catch (error) {
//       // error
//     }
//     setSubmitting(false);
//   }, [data, dispatch, radioId]);

//   return (
//     <>
//       <div
//         className="px-4 py-2 flex items-center hover:bg-black hover:bg-opacity-5"
//         onClick={() => setOpen(true)}
//       >
//         <IconRadio className="w-5" />
//         <span className="pl-2">Add to Radio</span>
//       </div>
//       <Modal
//         isOpen={open}
//         onRequestClose={() => setOpen(false)}
//         size="sm"
//         className="overflow-visible"
//       >
//         <ModalTitle title="Add to Radio" onClose={() => setOpen(false)} />
//         <label htmlFor="radioId" className="sm:col-span-2" onClick={(e) => e.stopPropagation()}>
//           <span className="text-neutral-700 mb-2 inline-block">Select Radio</span>
//           <SearchAsyncSelect
//             id="radioId"
//             name="radioId"
//             className="bg-neutral-200"
//             styles={{
//               control: (base) => ({
//                 ...base,
//                 border: "none",
//                 boxShadow: "none",
//                 background: "transparent",
//                 borderRadius: ".2rem",
//               }),
//               valueContainer: (base) => ({ ...base, paddingInline: "1rem" }),
//             }}
//             filterFn={filterRadios}
//             onChange={(value: any) => setRadioId(value?.value)}
//             defaultInputValue={""}
//           />
//         </label>
//         <div className="flex justify-end pt-2 gap-2">
//           <Button
//             outlined
//             disabled={isSubmitting}
//             onClick={() => setOpen(false)}
//             size="xsm"
//             className="!rounded-full"
//           >
//             No, thanks
//           </Button>
//           <Button
//             onClick={del}
//             disabled={isSubmitting}
//             size="xsm"
//             className="!rounded-full"
//             icon={isSubmitting && <IconCircle color="inherit" size={16} />}
//           >
//             Yes, Activate
//           </Button>
//         </div>
//       </Modal>
//     </>
//   );
// }

function Bonuses({ product }: { product: any }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <>
      <div
        className="px-4 py-2 hover:bg-black hover:bg-opacity-5 cursor-pointer flex items-center"
        onClick={showModal}
      >
        <GiftIcon className="w-4" />
        <span className="pl-3">Bonuses</span>
      </div>

      {isModalOpen && <BonusComponent product={product} setIsModalOpen={setIsModalOpen} />}
    </>
  );
}

function BonusComponent({ product, setIsModalOpen }: { product: any; setIsModalOpen: any }) {
  const dispatch = useAppDispatch();

  const submit = async (data: any) => {
    try {
      if (view == "assign") {
        await dispatch(AssignBonusThunk({ data, id: product.productId })).unwrap();
      } else {
        await dispatch(UnassignBonusThunk({ data, id: product.productId })).unwrap();
      }
      setIsModalOpen(false);
    } catch (e: any) {
      console.log(e);
    }
  };

  const [products, setProducts] = useState<any[]>();
  const [options, setOptions] = useState<any[]>();
  const [bonuses, setBonuses] = useState<any[]>();

  const getData = async () => {
    try {
      const d = await dispatch(GetAllProductsThunk({ isBonus: true })).unwrap();
      console.log("all products:",d);
      
      const bonuses = await dispatch(ProductBonusesThunk({ id: product.productId })).unwrap();
      setProducts(d.list.filter((p: any) => p.isBonus));
      setBonuses(bonuses.bonusProducts);
    } catch (error: any) {
      // error
    }
  };

  const initialValues = {
    bonusProductIds: bonuses?.map((b) => b.productId) || [],
  };

  useEffect(() => {
    getData();
  }, []);

  const [view, setView] = useState("bonuses");
  const changeView = (v: string) => {
    setView(v);
    if (v == "unassign") {
      setOptions(bonuses);
    } else if (v == "assign") {
      setOptions(products);
    }
  };

  return (
    <>
      <Modal isOpen={true} onRequestClose={() => setIsModalOpen(false)} size="sm">
        <ModalTitle title={`Bonuses`} onClose={() => setIsModalOpen(false)} />
        <div className="py-6 flex flex-col gap-5  min-h-[300px] max-h-[90vh]">
          <div className="flex gap-4">
            <div
              onClick={() => changeView("bonuses")}
              className={`cursor-pointer p-2 border-b border-b-2 ${view == "bonuses" ? "text-primary border-primary" : "border-transparent"}`}
            >
              Bonuses
            </div>
            <div
              onClick={() => changeView("assign")}
              className={`cursor-pointer p-2 border-b border-b-2 ${view == "assign" ? "text-primary border-primary" : "border-transparent"}`}
            >
              Assign
            </div>
            <div
              onClick={() => changeView("unassign")}
              className={`cursor-pointer p-2 border-b border-b-2 ${view == "unassign" ? "text-primary border-primary" : "border-transparent"}`}
            >
              Unassign
            </div>
          </div>

          <div>
            {view == "bonuses" && (
              <>
                {bonuses?.length == 0 && (
                  <p className="text-xs text-red-500 px-2">There is no bonus assigned yet</p>
                )}
                {bonuses?.map((b: any) => (
                  <div className="border border-gray-100 border-1 px-4 py-2 my-2 rounded-md flex gap-3 items-center w-ful">
                    <IconGift className="w-7 text-gray-500" />
                    <div>
                      <div className="font-medium">{b.productName}</div>
                      <div className="font-light text-sm">{b.englishName}</div>
                    </div>
                  </div>
                ))}
              </>
            )}

            {view != "bonuses" && (
              <>
                <Formik
                  enableReinitialize
                  initialValues={initialValues}
                  validationSchema={Yup.object().shape({
                    bonusProductIds: Yup.array().min(1, "Select at least one"),
                  })}
                  onSubmit={submit}
                >
                  {({ errors, handleSubmit, isSubmitting, touched }) => {
                    return (
                      <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-3 my-4">
                        {options?.length == 0 && (
                          <p className="text-xs text-red-500 px-2">
                            There is no bonus to {view == "assign" ? "assign" : "remove"}
                          </p>
                        )}
                        {options?.map((p: any) => (
                          <div key={p.productId}>
                            <Field
                              name="bonusProductIds" // This corresponds to an array in Formik's values
                              component={SimpleCheckbox}
                              label={p.productName}
                              value={p.productId}
                            />
                          </div>
                        ))}

                        {touched.bonusProductIds && errors.bonusProductIds && (
                          <div className="text-red-500 text-sm">
                            {errors.bonusProductIds as string}
                          </div>
                        )}

                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          size="xsm"
                          className="!rounded-full"
                          icon={isSubmitting && <IconCircle size={16} />}
                        >
                          <span>Save</span>
                        </Button>
                      </form>
                    );
                  }}
                </Formik>
              </>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}
