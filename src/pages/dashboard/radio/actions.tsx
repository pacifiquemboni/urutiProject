import { EditIcon } from "@/assets/icons";
import Button from "@/components/button";
import DropDown from "@/components/dropdown";
import CheckRole from "@/components/etc/CheckRoles";
import { Input, Textarea } from "@/components/form";
import Modal, { ModalTitle } from "@/components/modal";
import { uploadImage } from "@/helpers/etc";
import {
  ActivateCategoriesThunk,
  AddRadiosThunk,
  DisactivateCategoriesThunk,
  EditRadiosThunk,
  GetCategoriesThunk,
} from "@/redux/features/actions/radios";
import { useAppDispatch } from "@/redux/hook";
import { IconCircle, IconRadioOff } from "@tabler/icons-react";
import { Row } from "@tanstack/react-table";
import { Formik, FormikHelpers } from "formik";
import { useCallback, useState } from "react";
import * as Yup from "yup";
import ImageInputs from "./imageInput";

export function Add() {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const dispatch = useAppDispatch();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFile(selectedFile || null);
  };

  const reGetData = useCallback(async () => {
    try {
      await dispatch(GetCategoriesThunk({})).unwrap();
    } catch (error) {
      // Handle error (optional)
    }
  }, [dispatch]);

  const submit = useCallback(
    async (values: any, { setErrors, setStatus, setSubmitting, resetForm }: FormikHelpers<any>) => {
      try {
        let imageUrl = values.categoryPicture; 

        
        if (file) {
          const res = await uploadImage(file); 
          imageUrl = res.url; 
        }
        console.log("Uploaded Image URL:", imageUrl);
        
        const data = { ...values, picture: imageUrl };
        await dispatch(AddRadiosThunk(data)).unwrap();
        await reGetData();
        setSubmitting(false);
        setStatus({ success: true });
        resetForm();
        setOpen(false);
      } catch (err: any) {
        setStatus({ success: false });
        setErrors({ submit: err.message || "Something went wrong, please try again." });
        setSubmitting(false);
      }
    },
    [dispatch, reGetData, file],
  );

  return (
    <>
      <Button onClick={() => setOpen(true)} className="gap-2" size="xsm">
        Add Category
      </Button>
      <Modal isOpen={open} onRequestClose={() => setOpen(false)} size="sm">
        <ModalTitle title="Add Category" onClose={() => setOpen(false)} />
        <Formik
          initialValues={{ name: "", description: "", categoryPicture: "", submit: null }}
          validationSchema={Yup.object().shape({
            name: Yup.string().max(50).required("Name is required"),
            description: Yup.string(),
          })}
          onSubmit={submit}
        >
          {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, values }) => (
            <form className="flex flex-row gap-4 justify-center" onSubmit={handleSubmit}>
              {errors.submit && <p className="text-red-500">{errors.submit}</p>}
              <ImageInputs
                files={file ? [file] : []} 
                values={{ categoryPicture: values.categoryPicture }} 
                onFileChange={handleFileChange} 
                onUrlChange={(url: string) =>
                  handleChange({ target: { name: "categoryPicture", value: url } })
                } 
              
              />
              <div className="flex flex-col justify-between flex-1 gap-2">
                <input
                  name="name"
                  placeholder="Enter Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  required
                  className="border p-3 rounded-xl"
                />
                <textarea
                  name="description"
                  placeholder="Enter Description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                  className="border p-3 rounded-xl"
                />
                <div className="flex justify-end pt-2 gap-2">
                  <Button type="reset" outlined disabled={isSubmitting} size="xsm">
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isSubmitting} size="xsm">
                    Add Category
                  </Button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </Modal>
    </>
  );
}

export function Edit({ data }: { data: any }) {
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();

  const reGetData = useCallback(async () => {
    try {
      await dispatch(GetCategoriesThunk({})).unwrap();
    } catch (error) {
      // error continue
    }
  }, [dispatch]);

  const submit = useCallback(
    async (
      values: any,
      { setErrors, setStatus, setSubmitting, setTouched, resetForm }: FormikHelpers<any>,
    ) => {
      try {
        const { submit, ...v } = values;

        await dispatch(EditRadiosThunk({ data: v, id: data?.id })).unwrap();
        await reGetData();
        setSubmitting(false);
        setStatus({ success: true });
        setTouched({});
        resetForm();
        setOpen(false);
      } catch (err: any) {
        setStatus({ success: false });
        setErrors({ submit: err.message || "Something went wrong, please try again." });
        setSubmitting(false);
      }
    },
    [data?.id, dispatch, reGetData],
  );

  return (
    <>
      <div className="px-4 py-2 hover:bg-black hover:bg-opacity-5" onClick={() => setOpen(true)}>
        <EditIcon className="w-4" />
        <span className="pl-3">Edit</span>
      </div>
      <Modal isOpen={open} onRequestClose={() => setOpen(false)} size="sm">
        <ModalTitle title="Edit Radio" onClose={() => setOpen(false)} />
        <Formik
          initialValues={{
            name: data?.name || "",
            description: data?.description || "",
            submit: null,
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().max(50).required("Name is required"),
            description: Yup.string(),
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
                  value={values?.name}
                  error={`${errors?.name || ""}`}
                  isTouched={Boolean(touched.name)}
                  required
                  boxClassName="[&_input]:!rounded"
                />
                <Textarea
                  name="description"
                  label="Description"
                  placeholder="Enter Description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                  error={errors.description?.toString?.()}
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
                    Reset
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="xsm"
                    className="!rounded-full"
                    icon={isSubmitting && <IconCircle color="inherit" size={16} />}
                  >
                    Edit Role
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

export function DisActivate({ data }: { data: any }) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const dispatch = useAppDispatch();

  const del = useCallback(async () => {
    setSubmitting(true);
    try {
      console.log("disactivate");

      await dispatch(DisactivateCategoriesThunk({ id: data?.id })).unwrap();
      setOpen(false);
    } catch (error) {
      // error
    }
    setSubmitting(false);
  }, [data?.id, dispatch]);

  return (
    <>
      <div
        className="px-4 py-2 flex items-center hover:bg-black hover:bg-opacity-5 text-red-400"
        onClick={() => setOpen(true)}
      >
        <IconRadioOff className="w-5" />
        <span className="pl-2">Disactivate</span>
      </div>
      <Modal isOpen={open} onRequestClose={() => setOpen(false)} size="sm">
        <ModalTitle title="Disactivate Radio" onClose={() => setOpen(false)} />
        <p>
          Are you sure you want to Disactivate <br />
          Radio <b>{data?.name}</b>
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
            Yes, Disactivate
          </Button>
        </div>
      </Modal>
    </>
  );
}

export function Activate({ data }: { data: any }) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const dispatch = useAppDispatch();

  const del = useCallback(async () => {
    setSubmitting(true);
    try {
      console.log("Activate");

      await dispatch(ActivateCategoriesThunk({ id: data?.id })).unwrap();
      setOpen(false);
    } catch (error) {
      // error
    }
    setSubmitting(false);
  }, [data?.id, dispatch]);

  return (
    <>
      <div
        className="px-4 py-2 flex items-center hover:bg-black hover:bg-opacity-5 text-green-500"
        onClick={() => setOpen(true)}
      >
        <IconRadioOff className="w-5" />
        <span className="pl-2">Activate</span>
      </div>
      <Modal isOpen={open} onRequestClose={() => setOpen(false)} size="sm">
        <ModalTitle title="Activate Radio" onClose={() => setOpen(false)} />
        <p>
          Are you sure you want to Activate <br />
          Radio <b>{data?.name}</b>
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
            Yes, Activate
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default function Actions({ data }: { data?: Row<any> }) {
  return (
      <DropDown>
        <CheckRole permission={["update_radio"]}>
          <Edit data={data?.original} />
        </CheckRole>
        <CheckRole permission={["delete_roles"]}>
          {data?.original?.status == "inactive" ? (
            <Activate data={data?.original} />
          ) : (
            <DisActivate data={data?.original} />
          )}
        </CheckRole>
      </DropDown>
  );
}
