import { Fragment, useCallback, useMemo, useState } from "react";
import Button from "../button";
import Modal, { ModalTitle } from "../modal";
import * as Yup from "yup";
import { Formik, FormikHelpers } from "formik";
import { Input } from "../form";
import { IconCircle } from "@tabler/icons-react";
import { EditIcon } from "@/assets/icons";
import { useAppDispatch } from "@/redux/hook";
import { AddUsersThunk, GetUsersThunk, UpdateUsersThunk } from "@/redux/features/actions/users";
import SelectRadio from "./selectRadio";

const AddUserButton = ({ updateUser }: { updateUser?: any }) => {
  const initialValues = useMemo(
    () =>
      updateUser
        ? {
            phoneNumber: updateUser?.attributes?.phoneNumber?.[0] || "",
            username: updateUser?.username || "",
            firstName: updateUser?.firstName || "",
            lastName: updateUser?.lastName || "",
            email: updateUser?.email || "",
            submit: null,
          }
        : {
            phoneNumber: "",
            username: "",
            firstName: "",
            lastName: "",
            radioId: "",
            email: "",
            password: "",
            cpassword: "",
            submit: null,
          },
    [updateUser],
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const [radioId, setRadioId] = useState<string | null>(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
        const { submit, cpassword, ...data } = values;

        if (updateUser) {
          await dispatch(UpdateUsersThunk({ data, id: updateUser?.id })).unwrap();
        } else {
          data.radioId = radioId || undefined;
          await dispatch(AddUsersThunk({ data })).unwrap();
          await dispatch(GetUsersThunk({})).unwrap();
        }
        setStatus({ success: true });
        setTouched({});
        setValues(initialValues);
      } catch (err: any) {
        setStatus({ success: false });
        setErrors({
          submit:
            err?.response?.data?.message?.map?.((s: string) => `<p>${s},</p>`)?.join?.(" ") ||
            err.message ||
            "Something went wrong, please try again.",
        });
      }
      setSubmitting(false);
      handleCancel();
    },
    [dispatch, initialValues, radioId, updateUser],
  );

  return (
    <Fragment>
      {updateUser ? (
        <div className="px-4 py-2 hover:bg-black hover:bg-opacity-5" onClick={showModal}>
          <EditIcon className="w-4" />
          <span className="pl-3">Edit</span>
        </div>
      ) : (
        <Button size="xsm" outlined onClick={showModal}>
          <span>Add User</span>
        </Button>
      )}
      <Modal
        size="sm"
        isOpen={isModalOpen}
        onRequestClose={() => handleCancel()}
        className="font-outfit"
      >
        <ModalTitle
          title={`${updateUser ? "Update" : "Add"} User`}
          onClose={() => handleCancel()}
        />
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object().shape({
            phoneNumber: Yup.string().required("Phone number is required"),
            username: Yup.string().required("Username is required"),
            firstName: Yup.string().required("First name is required"),
            lastName: Yup.string().required("Last name is required"),
            ...(!updateUser
              ? {
                  password: Yup.string().min(3).max(50).required("Password is required"),
                  cpassword: Yup.string()
                    .required("Please retype your password.")
                    .oneOf([Yup.ref("password")], "Your passwords do not match."),
                  email: Yup.string().email().required("Email is required"),
                }
              : {
                  email: Yup.string().email().required("Email is required"),
                }),
          })}
          onSubmit={submit}
        >
          {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => {
            return (
              <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-3 my-4">
                {errors.submit && (
                  <p
                    className="bg-red-500 p-2 px-4 text-white text-sm text-center rounded-md"
                    dangerouslySetInnerHTML={{ __html: errors.submit }}
                  />
                )}
                <div className="grid grid-cols-2 gap-3">
                  <Input
                    type="text"
                    name="username"
                    label="Username"
                    placeholder="Enter Username"
                    error={`${errors.username || ""}`}
                    defaultValue={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isTouched={Boolean(touched.username)}
                    className="mb-0.5"
                    boxClassName={updateUser ? "col-span-2" : ""}
                  />
                  {!updateUser && (
                    <SelectRadio
                      radioId={''}
                      setRadioId={setRadioId}
                      className="!col-span-1"
                    />
                  )}
                  <Input
                    type="text"
                    name="firstName"
                    label="First name"
                    placeholder="Enter first name"
                    error={`${errors.firstName || ""}`}
                    defaultValue={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isTouched={Boolean(touched.firstName)}
                    className="mb-0.5"
                  />
                  <Input
                    type="text"
                    name="lastName"
                    label="Last name"
                    placeholder="Enter last name"
                    error={`${errors.lastName || ""}`}
                    defaultValue={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isTouched={Boolean(touched.lastName)}
                    className="mb-0.5"
                  />
                  <Input
                    name="phoneNumber"
                    label="Phone number"
                    placeholder="Enter phone number"
                    error={`${errors.phoneNumber || ""}`}
                    defaultValue={values.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isTouched={Boolean(touched.phoneNumber)}
                    className="mb-0.5"
                  />
                  <Input
                    type="text"
                    name="email"
                    label="Email Address"
                    placeholder="Enter Email"
                    error={`${errors.email || ""}`}
                    defaultValue={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isTouched={Boolean(touched.email)}
                    className="mb-0.5"
                  />
                  {!updateUser && (
                    <>
                      <Input
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="Create Passsword"
                        autoComplete="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        error={errors.password}
                        isTouched={Boolean(touched.password)}
                        required
                      />
                      <Input
                        label="Confirm Password"
                        name="cpassword"
                        type="password"
                        placeholder="Confirm Your Password"
                        autoComplete="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.cpassword}
                        error={errors.cpassword}
                        isTouched={Boolean(touched.cpassword)}
                        required
                      />
                    </>
                  )}
                </div>

                <div className="flex justify-end pt-2 gap-2">
                  <Button
                    type="reset"
                    outlined
                    onClick={() => handleCancel()}
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
                    icon={isSubmitting && <IconCircle color="inherit" size={16} />}
                  >
                    <span>{updateUser ? "Update" : "Add"} User</span>
                  </Button>
                </div>
              </form>
            );
          }}
        </Formik>
      </Modal>
    </Fragment>
  );
};

export default AddUserButton;
