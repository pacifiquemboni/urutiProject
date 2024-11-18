import { useCallback, useEffect, useMemo, useState } from "react";
import Button from "../button";
import { IconCircle, IconCubePlus } from "@tabler/icons-react";
import { Formik, FormikHelpers } from "formik";
// import { Field, Formik, FormikHelpers } from "formik";

import Modal, { ModalTitle } from "../modal";
import * as Yup from "yup";
import { EditIcon } from "@/assets/icons";
import { ImageInputs, Input, Textarea } from "../form";
import imageplaceholder from "@assets/img/placeholder.jpeg";
import { uploadImage } from "@/helpers/etc";
import { useAppDispatch } from "@/redux/hook";
import { AddProductsThunk, EditProductsThunk } from "@/redux/features/actions/products";
// import SimpleCheckbox from "../form/simple_checkbox";
import { GetCategoriesThunk } from "@/redux/features/actions/radios";
// import SearchAsyncSelect from "../form/select/searchSelect";
// import { axios } from "@/redux/axios";

// const filterRadios = async (inputValue: string) => {
//   try {
//     const res = await axios.get(`/v1/category?search=${inputValue}`, {
//       params: { pageSize: 8, pageNumber: 1 },
//     });

//     return res?.data?.list?.map?.((one: any) => ({
//       value: one?.id,
//       label: one?.name,
//     }));
//   } catch (error) {
//     return [];
//   }
// };

type Product = any;

export default function AddPrizeButton({ updateProduct }: { updateProduct?: Product }) {
  const initialValues = useMemo(
    () => ({
      name: updateProduct?.name || "",

      description: updateProduct?.description || "",

      picture: updateProduct?.picture || "",
      isAvailable: Boolean(updateProduct?.isAvailable),
      isCallNeeded: Boolean(updateProduct?.isCallNeeded),
      productCost: updateProduct?.productCost || 0,
      drawPeriod: updateProduct?.drawPeriod || 0,
      numberOfWinners: Number(updateProduct?.numberOfWinners) || 1,

      playAmount: updateProduct?.playAmount || 0,
      categoryId: updateProduct?.categoryId || "",
      submit: null,
    }),
    [
      updateProduct?.name,

      updateProduct?.description,
      updateProduct?.picture,
      updateProduct?.categoryId,
      updateProduct?.drawPeriod,
      updateProduct?.isAvailable,
      updateProduct?.isCallNeeded,
      updateProduct?.numberOfWinners,

      updateProduct?.playAmount,
      updateProduct?.productCost,
    ],
  );

  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [file, setFile] = useState<any>(null);
  const [categories, setCategories] = useState<any[]>([]);
  // const [radioId, setRadioId] = useState(null);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const params = {
          pageSize: 100, // Set your desired page size
          pageNumber: 1, // Default page number, adjust as necessary
        };

        // Dispatch GetCategoriesThunk and store the fetched categories in the local state
        const res = await dispatch(GetCategoriesThunk(params)).unwrap();
        console.log("retrieved categories", res);

        setCategories(res?.list || []);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, [dispatch]); // Fetch categories whenever fetchTimes changes

  const showModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);
  const handleOk = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const submit = useCallback(
    async (
      values: typeof initialValues,
      {
        setErrors,
        setStatus,
        setSubmitting,
        setValues,
        setTouched,
      }: FormikHelpers<typeof initialValues>,
    ) => {
      try {
        // eslint-disable-next-line prefer-const
        let { submit, picture, ...data } = values;
        let imageUrl = `${picture}`;

        if (file) {
          const res = await uploadImage(file);
          imageUrl = `${res?.url}`;
        }

        (data as any).picture = imageUrl;

        // if (radioId) data.radioId = radioId;
        // else {
        //   const { radioId, ...newData } = data;
        //   data = newData as any;
        // }
        if (updateProduct) {
          await dispatch(EditProductsThunk({ data, id: updateProduct?.productId })).unwrap();
        } else {
          const response = await dispatch(
            AddProductsThunk({ ...data, isAvailable: true }),
          ).unwrap();
          console.log("Response from AddProductsThunk:", response);
        }
        setStatus({ success: true });
        setTouched({});
        setValues(initialValues);
        handleOk();
      } catch (err: any) {
        setStatus({ success: false });
        setErrors({
          submit:
            err?.response?.data?.message
              ?.map?.((s: string) => `<p>error here${s},</p>`)
              ?.join?.(" ") ||
            err?.message ||
            "Something went wrong, please try again.",
        });
      }
      setSubmitting(false);
    },
    [dispatch, file, handleOk, initialValues, updateProduct],
  );

  return (
    <>
      {updateProduct ? (
        <div className="px-4 py-2 hover:bg-black hover:bg-opacity-5 flex gap-1" onClick={showModal}>
          <EditIcon className="w-4" />
          <span className="pl-3">Edit</span>
        </div>
      ) : (
        <Button icon={<IconCubePlus />} outlined size="xsm" onClick={showModal}>
          Add Prize
        </Button>
      )}
      <Modal isOpen={isModalOpen} onRequestClose={handleOk} size="sm">
        <ModalTitle title={`${updateProduct ? "Update" : "Add"} prize`} onClose={handleOk} />
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object().shape({
            name: Yup.string().max(50).required("Prize name is required"),
            description: Yup.string().max(200).required("Description is required"),
            productCost: Yup.number().min(0).required("Product cost is required"),
            drawPeriod: Yup.number().min(0).required("Draw period is required"),
            numberOfWinners: Yup.number().min(0).required("Number of winners is required"),
            playAmount: Yup.number().min(0).required("Play amount is required"),
            categoryId: Yup.string().max(50).required("Product Category is required"),
          })}
          onSubmit={submit}
        >
          {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => {
            console.log(errors);

            return (
              <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-3 my-4">
                {errors.submit && (
                  <p
                    className="bg-red-500 p-2 px-4 text-white text-sm text-center"
                    dangerouslySetInnerHTML={{ __html: errors.submit }}
                  ></p>
                )}
                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
                  <div className="grid gap-4 h-fit">
                    <ImageInputs hoverDiv className="rounded-lg aspect-video">
                      {({ files }) =>
                        files?.[0] || values.picture ? (
                          <ImageItem
                            name="picture"
                            setFile={setFile}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={`${errors?.picture || ""}`}
                            file={files?.[0]}
                            url={values?.picture}
                          />
                        ) : null
                      }
                    </ImageInputs>

                    <Input
                      type="url"
                      name="picture"
                      label="or insert image Url"
                      placeholder="Enter Picture Url"
                      value={values.picture}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isTouched={Boolean(touched.picture)}
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="flex flex-col justify-between">
                      <label htmlFor="" className="">Category</label>
                      <select
                        name="categoryId"
                        value={values.categoryId}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className=" w-full h-12 bg-[#DEDEDE] rounded sm:col-span-2"
                      >
                        <option value=""  className="text-grey">
                          Select a Category
                        </option>
                        {categories.length === 0 ? (
                          <option disabled>Loading categories...</option>
                        ) : (
                          categories.map((category) => (
                            <option key={category.id} value={category.id}>
                              {category.name}
                            </option>
                          ))
                        )}
                      </select>
                    </div>

                    <Input
                      type="text"
                      name="name"
                      label="name"
                      placeholder="Enter Name"
                      error={`${errors.name || ""}`}
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isTouched={Boolean(touched.name)}
                    />

                    {/* <Input
                      type="text"
                      name="englishName"
                      label="English name"
                      placeholder="Enter English Name"
                      error={`${errors.englishName || ""}`}
                      defaultValue={values.englishName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isTouched={Boolean(touched.englishName)}
                      boxClassName="sm:col-span-2"
                    /> */}
                    <Textarea
                      type="text"
                      name="description"
                      label="description"
                      placeholder="Enter Description"
                      error={`${errors.description || ""}`}
                      Value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isTouched={Boolean(touched.description)}
                      boxClassName="sm:col-span-2"
                    />
                    {/* <Select
                      name="radioId"
                      label="Radio"
                      options={[]}
                      boxClassName="sm:col-span-2"
                    /> */}
                    {/* {!updateProduct && ( */}
                    {/* <label
                      htmlFor="radioId"
                      className="sm:col-span-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="text-neutral-700 mb-2 inline-block">Select Radio</span>
                      <SearchAsyncSelect
                        id="radioId"
                        name="radioId"
                        className="bg-neutral-200"
                        styles={{
                          control: (base) => ({
                            ...base,
                            border: "none",
                            boxShadow: "none",
                            background: "transparent",
                            borderRadius: ".2rem",
                          }),
                          valueContainer: (base) => ({ ...base, paddingInline: "1rem" }),
                        }}
                        filterFn={filterRadios}
                        onChange={(value: any) => setRadioId(value?.value)}
                        defaultInputValue={values?.radioId || ""}
                      />
                      {Boolean(touched?.radioId) && errors?.radioId && (
                        <span className={`error`}>{errors?.radioId?.toString?.()}</span>
                      )}
                    </label> */}
                    {/* )} */}
                    <Input
                      type="number"
                      name="numberOfWinners"
                      label="number Of Winners"
                      placeholder="Enter Number Of Winners"
                      error={`${errors.numberOfWinners || ""}`}
                      Value={values.numberOfWinners}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isTouched={Boolean(touched.numberOfWinners)}
                    />
                    <Input
                      type="number"
                      name="productCost"
                      label={
                        <>
                          Cost <small className="text-xs">(TSH)</small>
                        </>
                      }
                      placeholder="Enter Cost"
                      error={`${errors.productCost || ""}`}
                      Value={values.productCost}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isTouched={Boolean(touched.productCost)}
                    />
                    <Input
                      type="number"
                      name="drawPeriod"
                      label="Draw Period"
                      placeholder="Enter Draw Period"
                      error={`${errors.drawPeriod || ""}`}
                      Value={values.drawPeriod}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isTouched={Boolean(touched.drawPeriod)}
                    />
                    <Input
                      type="number"
                      name="playAmount"
                      label={
                        <>
                          play Amount <small className="text-xs">(TSH)</small>
                        </>
                      }
                      placeholder="Enter Play Amount"
                      error={`${errors.playAmount || ""}`}
                      Value={values.playAmount}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isTouched={Boolean(touched.playAmount)}
                    />

                    {/* <Input
                      type="number"
                      name="priority"
                      label="Priority"
                      placeholder="Enter priority"
                      error={`${errors.priority || ""}`}
                      defaultValue={values.priority}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isTouched={Boolean(touched.priority)}
                    /> */}

                    {/* <Input
                      type="number"
                      name="product_margin"
                      label="Product margin"
                      placeholder="Enter product margin"
                      error={`${errors.product_margin || ""}`}
                      defaultValue={values.product_margin}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isTouched={Boolean(touched.product_margin)}
                    /> */}
                    {/* <Field
                      name="isBonus"
                      component={SimpleCheckbox}
                      value={true}
                      label="Is Bonus"
                    /> */}
                  </div>
                </div>
                <div className="flex justify-end pt-2 gap-2">
                  <Button
                    type="reset"
                    outlined
                    onClick={() => handleOk()}
                    disabled={isSubmitting}
                    size="xsm"
                    className="!rounded-full"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="xsm"
                    className="!rounded-full"
                    icon={isSubmitting && <IconCircle size={16} />}
                  >
                    <span>{updateProduct ? "Update" : "Add"} Prize</span>
                  </Button>
                </div>
              </form>
            );
          }}
        </Formik>
      </Modal>
    </>
  );
}

type imageItemProps = {
  url: string;
  file: any;
  name?: string;
  setFile?: (a: any) => void;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>,
    { value, validValue }: { value?: string | number; validValue?: string | number },
  ) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  error?: string | string[];
};

function ImageItem({ url, file, setFile }: imageItemProps) {
  const [src, setSrc] = useState("");

  useEffect(() => {
    if (url) {
      setSrc(url);
      setFile?.(null);
    }
  }, [setFile, url]);

  useEffect(() => {
    if (file) {
      setSrc(URL.createObjectURL(file));
      setFile?.(file);
    }
  }, [file, setFile]);

  return (
    <>
      <img
        loading="lazy"
        src={src || imageplaceholder}
        className="h-full w-[50ch] bg-grey bg-opacity-30 object-contain max-w-full rounded-lg mx-auto"
        onError={(e: any) => {
          e.target.onError = null;
          e.target.src = imageplaceholder;
        }}
      />
    </>
  );
}
