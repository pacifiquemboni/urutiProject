import Button from "@/components/button";
import DropDown from "@/components/dropdown";
import CheckRole from "@/components/etc/CheckRoles";
import { Input, Select } from "@/components/form";
import Modal, { ModalTitle } from "@/components/modal";
import { UpdateWonInfoThunk } from "@/redux/features/actions/draw/tempWon";
import { useAppDispatch } from "@/redux/hook";
import { IconCircle } from "@tabler/icons-react";
import { IconMoodEdit } from "@tabler/icons-react";
import { Row } from "@tanstack/react-table";
import { Formik, FormikHelpers } from "formik";
import moment from "moment";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

export default function Actions({ data }: { data?: Row<any> }) {
  return (
    <CheckRole permission={["update_won_token_user_info"]}>
      <DropDown>
        <CheckRole permission={["update_won_token_user_info"]}>
          <EditWinner data={data?.original} />
        </CheckRole>
      </DropDown>
    </CheckRole>
  );
}

function EditWinner({ data }: { data?: any }) {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const submit = useCallback(
    async (
      values: any,
      { setErrors, setStatus, setSubmitting, setTouched, resetForm }: FormikHelpers<any>,
    ) => {
      const toastId = toast.loading("confirming winner...");
      const { submit, ...dataValues } = values;

      try {
        await dispatch(UpdateWonInfoThunk({ token: data?.id, data: dataValues })).unwrap();
        toast.update(toastId, {
          render: `Winner confirmed successfully!`,
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });

        setStatus({ success: true });
        setTouched({});
        resetForm();
      } catch (error: any) {
        toast.update(toastId, {
          render: `Error in confirming winner.`,
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
        setStatus({ success: false });
        setErrors({ submit: error.message || "Something went wrong, please try again." });
      } finally {
        setSubmitting(false);
      }
    },
    [data?.id, dispatch],
  );

  return (
    <>
      <div
        className="px-4 py-2 hover:bg-black hover:bg-opacity-5 flex items-center"
        onClick={() => setOpen(true)}
      >
        <IconMoodEdit className="w-4" />
        <span className="pl-3">Edit User</span>
      </div>
      <Modal size="sm" isOpen={open} onRequestClose={() => setOpen(false)}>
        <Formik
          initialValues={{
            name: data?.name || "",
            age: data?.age || 0,
            gender: data?.gender || "",
            idNumber: data?.idNumber,
            handedOver: data?.handedOver,
            handedOverDate: moment(data?.handedOverDate).format("YYYY-MM-DD HH:mm"),
            submit: null,
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string(),
            age: Yup.string(),
            gender: Yup.string(),
            idNumber: Yup.string().required("Id Number is required"),
            handedOverDate: Yup.string(),
            // .required("Handed Over Date is required"),
          })}
          onSubmit={submit}
        >
          {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => {
            return (
              <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-3 my-4">
                <ModalTitle title="Edit Winner Info" onClose={() => setOpen(false)} />
                {errors.submit && (
                  <p
                    className="bg-red-500 p-2 px-4 text-white text-sm text-center rounded-md"
                    dangerouslySetInnerHTML={{ __html: errors.submit }}
                  />
                )}
                <div className="grid grid-cols-2 gap-3">
                  <Input
                    type="text"
                    name="name"
                    label="name"
                    placeholder="Enter name"
                    error={`${errors.name || ""}`}
                    defaultValue={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isTouched={Boolean(touched.name)}
                    boxClassName="col-span-2"
                  />
                  <Input
                    type="text"
                    name="age"
                    label="age"
                    placeholder="Enter age"
                    error={`${errors.age || ""}`}
                    defaultValue={values.age}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isTouched={Boolean(touched.age)}
                  />
                  <Select
                    name="gender"
                    label="gender"
                    placeholder="Select Gender"
                    error={`${errors.gender || ""}`}
                    defaultValue={values.gender}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isTouched={Boolean(touched.gender)}
                    options={[
                      { value: "M", text: "Male" },
                      { value: "F", text: "Female" },
                    ]}
                  />
                  <Input
                    type="text"
                    name="idNumber"
                    label="Id Number"
                    placeholder="Enter Id Number"
                    error={`${errors.idNumber || ""}`}
                    defaultValue={values.idNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isTouched={Boolean(touched.idNumber)}
                    boxClassName="col-span-2"
                  />
                  <label
                    htmlFor="handedOver"
                    className="h-full flex gap-4 items-center p-4 rounded bg-black bg-opacity-10"
                  >
                    <input
                      type="checkbox"
                      id="handedOver"
                      defaultChecked={values.handedOver}
                      onChange={handleChange}
                    />
                    <span>HandOver</span>
                  </label>
                  <Input
                    type="datetime-local"
                    name="handedOverDate"
                    label="handedOverDate"
                    placeholder="Enter handed Over Date"
                    error={`${errors.handedOverDate || ""}`}
                    defaultValue={values.handedOverDate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isTouched={Boolean(touched.handedOverDate)}
                  />
                </div>

                <div className="flex justify-end pt-2 gap-2">
                  <Button
                    outlined
                    // onClick={() => handleCancel()}
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
                    <span>Update Winner</span>
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
