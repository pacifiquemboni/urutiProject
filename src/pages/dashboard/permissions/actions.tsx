import Button from "@/components/button";
import { Input } from "@/components/form";
import Modal, { ModalTitle } from "@/components/modal";
import {
  AddPermissionsThunk,
  DeletePermissionsThunk,
  UpdatePermissionsThunk,
} from "@/redux/features/actions/permissions";
import { useAppDispatch } from "@/redux/hook";
import { IconCircle, IconEdit, IconNewSection, IconTrash } from "@tabler/icons-react";
import { Formik, FormikHelpers } from "formik";
import { useCallback, useState } from "react";
import * as Yup from "yup";

export function Add() {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const submit = useCallback(
    async (
      values: any,
      { setErrors, setStatus, setSubmitting, setTouched, resetForm }: FormikHelpers<any>,
    ) => {
      try {
        const { submit, ...data } = values;

        await dispatch(AddPermissionsThunk({ data })).unwrap();
        setSubmitting(false);
        setStatus({ success: true });
        setTouched({});
        resetForm();
      } catch (err: any) {
        setStatus({ success: false });
        setErrors({ submit: err.message || "Something went wrong, please try again." });
        setSubmitting(false);
      }
    },
    [dispatch],
  );

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="flex items-center justify-center gap-2 p-3 py-5 rounded-md border border-dashed text-primary border-primary border-opacity-30 cursor-pointer"
      >
        <IconNewSection />
        <p>Add Permission</p>
      </div>
      <Modal isOpen={open} onRequestClose={() => setOpen(false)} size="sm">
        <ModalTitle title="Add Permission" onClose={() => setOpen(false)} />
        <Formik
          initialValues={{ name: "", description: "", submit: null }}
          validationSchema={Yup.object().shape({
            name: Yup.string().max(50).required("Name is required"),
            description: Yup.string().min(5).max(100).required("Description is required"),
          })}
          onSubmit={submit}
        >
          {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => {
            return (
              <form
                method="post"
                className="flex flex-col gap-4 justify-center [&_input]:!rounded-xl"
                onSubmit={handleSubmit}
              >
                {errors.submit ? (
                  <p className="text-red-500 -my-2">{errors.submit}</p>
                ) : (
                  <p className="text-transparent select-none -my-2">error</p>
                )}
                <Input
                  name="name"
                  label="Name"
                  placeholder="Enter Name"
                  autoComplete="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  error={errors.name}
                  isTouched={Boolean(touched.name)}
                  required
                />
                <Input
                  name="description"
                  label="Description"
                  placeholder="Enter description"
                  error={errors.description}
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isTouched={Boolean(touched.description)}
                  required
                />
                <div className="flex justify-end pt-2 gap-2">
                  <Button
                    type="reset"
                    outlined
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
                    Add Permission
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

export function Edit({ data }: { data: any }) {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const submit = useCallback(
    async (
      values: any,
      { setErrors, setStatus, setSubmitting, setTouched, resetForm }: FormikHelpers<any>,
    ) => {
      try {
        const { submit, ...v } = values;

        await dispatch(UpdatePermissionsThunk({ data: v, id: data?.id })).unwrap();
        setSubmitting(false);
        setStatus({ success: true });
        setTouched({});
        resetForm();
      } catch (err: any) {
        setStatus({ success: false });
        setErrors({ submit: err.message || "Something went wrong, please try again." });
        setSubmitting(false);
      }
    },
    [data?.id, dispatch],
  );

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="flex items-center justify-center cursor-pointer"
      >
        <IconEdit className="text-grey size-5" />
      </div>
      <Modal isOpen={open} onRequestClose={() => setOpen(false)} size="sm">
        <ModalTitle title="Edit Permission" onClose={() => setOpen(false)} />
        <Formik
          initialValues={{ name: data?.name, description: data?.description, submit: null }}
          validationSchema={Yup.object().shape({
            name: Yup.string().max(50).required("Name is required"),
            description: Yup.string().min(5).max(100).required("Description is required"),
          })}
          onSubmit={submit}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            resetForm,
            isSubmitting,
            touched,
            values,
          }) => {
            return (
              <form
                method="post"
                className="flex flex-col gap-4 justify-center [&_input]:!rounded-xl"
                onSubmit={handleSubmit}
              >
                {errors.submit ? (
                  <p className="text-red-500 -my-2">{errors.submit}</p>
                ) : (
                  <p className="text-transparent select-none -my-2">error</p>
                )}
                <Input
                  name="name"
                  label="Name"
                  placeholder="Enter Name"
                  autoComplete="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  error={errors.name as any}
                  isTouched={Boolean(touched.name)}
                  readOnly
                  required
                />
                <Input
                  name="description"
                  label="Description"
                  placeholder="Enter description"
                  error={errors.description as any}
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isTouched={Boolean(touched.description)}
                  required
                />
                <div className="flex justify-end pt-2 gap-2">
                  <Button
                    outlined
                    disabled={isSubmitting}
                    onClick={() => resetForm()}
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
                    Edit Permission
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

export function Delete({ data }: { data: any }) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const dispatch = useAppDispatch();

  const del = useCallback(async () => {
    setSubmitting(true);
    try {
      await dispatch(DeletePermissionsThunk({ id: data?.id })).unwrap();
    } catch (error) {
      // error
    }
    setSubmitting(false);
  }, [data?.id, dispatch]);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="flex items-center justify-center cursor-pointer"
      >
        <IconTrash className="text-red-400 size-5" />
      </div>
      <Modal isOpen={open} onRequestClose={() => setOpen(false)} size="sm">
        <ModalTitle title="Delete Permission" onClose={() => setOpen(false)} />
        <p>
          Are you sure you want to delete <br />
          permission <b>{data?.name}</b>
        </p>
        <div className="flex justify-end pt-2 gap-2">
          <Button
            outlined
            disabled={isSubmitting}
            onClick={() => setOpen(false)}
            size="xsm"
            className="!rounded-full"
          >
            No, thanks
          </Button>
          <Button
            onClick={del}
            disabled={isSubmitting}
            size="xsm"
            className="!rounded-full"
            icon={isSubmitting && <IconCircle color="inherit" size={16} />}
          >
            Yes, Delete
          </Button>
        </div>
      </Modal>
    </>
  );
}
