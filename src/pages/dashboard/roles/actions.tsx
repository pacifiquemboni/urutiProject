import Button from "@/components/button";
import SearchList from "@/components/etc/searchList";
import Separator from "@/components/etc/separator";
import { Input } from "@/components/form";
import Modal, { ModalTitle } from "@/components/modal";
import {
  AddRoleThunk,
  AssignPermissionsThunk,
  DeleteRoleThunk,
  GetRolesThunk,
  UnassignPermissionsThunk,
  UpdateRoleThunk,
} from "@/redux/features/actions/roles";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { IconCircle, IconEdit, IconNewSection, IconTrash } from "@tabler/icons-react";
import { Formik, FormikHelpers } from "formik";
import { Fragment, ReactNode, useCallback, useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

export function Add() {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const reGetData = useCallback(async () => {
    try {
      await dispatch(GetRolesThunk()).unwrap();
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
        const { submit, ...data } = values;

        await dispatch(AddRoleThunk({ data })).unwrap();
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
    [dispatch, reGetData],
  );

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="flex items-center justify-center gap-2 p-3 py-5 rounded-md border border-dashed text-primary border-primary border-opacity-30 cursor-pointer"
      >
        <IconNewSection />
        <p>Add Role</p>
      </div>
      <Modal isOpen={open} onRequestClose={() => setOpen(false)} size="sm">
        <ModalTitle title="Add Role" onClose={() => setOpen(false)} />
        <Formik
          initialValues={{ name: "", submit: null }}
          validationSchema={Yup.object().shape({
            name: Yup.string().max(50).required("Name is required"),
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
                    Add Role
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

        await dispatch(UpdateRoleThunk({ data: v, id: data?.id })).unwrap();
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
          initialValues={{ name: data?.name || "", submit: null }}
          validationSchema={Yup.object().shape({
            name: Yup.string().max(50).required("Name is required"),
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

export function Delete({ data }: { data: any }) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const dispatch = useAppDispatch();

  const del = useCallback(async () => {
    setSubmitting(true);
    try {
      await dispatch(DeleteRoleThunk({ id: data?.id })).unwrap();
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

export function More({ data }: { data: any }) {
  const { single } = useAppSelector((s) => s.roles);
  const { list, status } = useAppSelector((s) => s.permissions);

  return (
    <>
      <Separator className="!my-2" />
      <div className="flex gap-2 justify-between items-center my-2">
        <h4 className="">arrowed permissions</h4>
        <AssignPermissions data={data} />
      </div>
      <SearchList<any>
        data={list.filter((s) => single[data?.id]?.realmRoles?.includes(s?.name))}
        columns={[{ accessor: "name" }]}
        loading={status == "pending"}
      >
        {({ rows, selectedRows, prepareRow }) => (
          <>
            <div className="text-grey flex gap-2 justify-between items-center mt-4">
              {selectedRows?.length > 0 ? (
                <>
                  <small>{selectedRows?.length} selected</small>
                  <UnassignButton
                    role={single[data?.id]?.id}
                    values={selectedRows?.map((p) => p?.original)}
                    size="xsm"
                    className="!rounded-full"
                  >
                    Unassign Selected
                  </UnassignButton>
                </>
              ) : (
                <small>{rows?.length} Assigned Permissions</small>
              )}
            </div>
            <div className="grid mt-4 overflow-x-hidden">
              {rows?.map((row) => {
                prepareRow(row);
                const props = (row as any)?.getToggleRowSelectedProps?.();

                return (
                  <Fragment key={row?.original?.id}>
                    <Separator className="!h-[0.8px] !my-0" />
                    <div
                      className={`text-grey flex flex-wrap justify-between py-2 items-center gap-2`}
                    >
                      <div className="flex items-center gap-2">
                        <input
                          id={row?.id}
                          className="accent-primary"
                          type="checkbox"
                          {...props}
                          indeterminate={props?.indeterminate || undefined}
                        />
                        <label className="cursor-pointer" htmlFor={row?.id}>
                          {row?.original?.name}
                        </label>
                      </div>
                      {/* <Button outlined size="xsm3">
                        <small>remove</small>
                      </Button> */}
                      <UnassignButton role={single[data?.id]?.id} values={[row?.original]}>
                        remove
                      </UnassignButton>
                    </div>
                  </Fragment>
                );
              })}
            </div>
          </>
        )}
      </SearchList>
    </>
  );
}

function AssignPermissions({ data }: { data: any }) {
  const [open, setOpen] = useState(false);
  const { single } = useAppSelector((s) => s.roles);
  const { list, status } = useAppSelector((s) => s.permissions);

  return (
    <>
      <Button outlined size="xsm" className="!rounded-full" onClick={() => setOpen(true)}>
        <small>Assign Selected</small>
      </Button>
      <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        size="sm"
        className="!max-h-[min(60%_-_1rem,100dvh_-_1rem)]"
      >
        <ModalTitle title="Assign Permission" onClose={() => setOpen(false)} />
        <SearchList
          data={list.filter((s) => !single[data?.id]?.realmRoles?.includes(s?.name))}
          columns={[{ accessor: "name" }]}
          loading={status == "pending"}
        >
          {({ rows, selectedRows, prepareRow }) => (
            <>
              <div className="text-grey flex gap-2 justify-between items-center mt-4">
                {selectedRows?.length > 0 ? (
                  <>
                    <small>{selectedRows?.length} selected</small>
                    <AssignButton
                      role={single[data?.id]?.id}
                      values={selectedRows?.map((p) => p?.original)}
                      size="xsm"
                      className="!rounded-full"
                    >
                      Assign Selected
                    </AssignButton>
                  </>
                ) : (
                  <small>{rows?.length} Unassigned Permissions</small>
                )}
              </div>
              <div className="grid gap-2 mt-4">
                {rows?.map((row) => {
                  prepareRow(row);
                  const props = (row as any)?.getToggleRowSelectedProps?.();

                  return (
                    <Fragment key={row?.original?.id}>
                      <Separator className="!h-[0.8px] !my-0" />
                      <div className={`text-grey flex justify-between items-center gap-2 `}>
                        <div className="flex items-center gap-2">
                          <input
                            id={row?.id}
                            className="accent-primary"
                            type="checkbox"
                            {...props}
                            indeterminate={props?.indeterminate || undefined}
                          />
                          <label className="cursor-pointer" htmlFor={row?.id}>
                            {row?.original?.name}
                          </label>
                        </div>
                        <AssignButton role={single[data?.id]?.id} values={[row?.original]}>
                          Assign
                        </AssignButton>
                      </div>
                    </Fragment>
                  );
                })}
              </div>
            </>
          )}
        </SearchList>
      </Modal>
    </>
  );
}

type props = {
  children: ReactNode;
  size?: "xsm" | "sm" | "xsm2" | "xsm3";
  className?: string;
  values: any[];
  role: string;
};
function AssignButton({ children, size = "xsm3", className, values, role }: props) {
  const dispatch = useAppDispatch();
  const [load, setLoad] = useState(false);

  const submit = useCallback(async () => {
    const toastId = toast.loading("Assigning...");
    try {
      setLoad(true);
      await dispatch(
        AssignPermissionsThunk({ data: values?.map((v) => v?.id), id: role, values }),
      ).unwrap();
      toast.update(toastId, {
        render: `Permission Assigned successfully!`,
        type: "success",
        isLoading: false,
        autoClose: 5000,
      });
    } catch (error) {
      toast.update(toastId, {
        render: `Error in Assigning Permission.`,
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    } finally {
      setLoad(false);
    }
  }, [dispatch, role, values]);

  return (
    <Button progress="complete" onClick={submit} size={size} disabled={load} className={className}>
      <small>{children}</small>
    </Button>
  );
}

function UnassignButton({ children, size = "xsm3", className, values, role }: props) {
  const dispatch = useAppDispatch();
  const [load, setLoad] = useState(false);

  const submit = useCallback(async () => {
    const toastId = toast.loading("Removing Permission...");
    try {
      setLoad(true);
      await dispatch(
        UnassignPermissionsThunk({ data: values?.map((v) => v?.id), id: role, values }),
      ).unwrap();
      toast.update(toastId, {
        render: `Permission Removed successfully!`,
        type: "success",
        isLoading: false,
        autoClose: 5000,
      });
    } catch (error) {
      toast.update(toastId, {
        render: `Error in Removing Permission.`,
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    } finally {
      setLoad(false);
    }
  }, [dispatch, role, values]);

  return (
    <Button progress="complete" onClick={submit} size={size} disabled={load} className={className}>
      <small>{children}</small>
    </Button>
  );
}
