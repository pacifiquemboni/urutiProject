import Button from "@/components/button";
import CheckRole from "@/components/etc/CheckRoles";
import Separator from "@/components/etc/separator";
import { Select } from "@/components/form";
import Modal, { ModalTitle } from "@/components/modal";
import DataTable, { ColumnType, customTableProps } from "@/components/table";
import { AssignRoleThunk, UnassignRoleThunk } from "@/redux/features/actions/users";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
// import { useAppDispatch } from "@/redux/hook";
import { IconCircle, IconNewSection, IconTrash, IconUserShield } from "@tabler/icons-react";
import { Formik, FormikHelpers } from "formik";
import { useCallback, useMemo, useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

export default function AssignRole({ data }: { data?: any }) {
  const [open, setOpen] = useState(false);

  const rolesColumns = useMemo<ColumnType<any>[]>(
    () => [
      {
        Header: "Title",
        accessor: "name",
      },
      {
        Header: "",
        accessor: "id",
        Cell: () => (
          <Button size="xsm3" progress="fail">
            Remove
          </Button>
        ),
      },
    ],
    [],
  );

  return (
    <>
      <div
        className="px-4 py-2 hover:bg-black hover:bg-opacity-5 flex items-center"
        onClick={() => setOpen(true)}
      >
        <IconUserShield className="w-5" />
        <span className="pl-2">Roles</span>
      </div>
      <Modal isOpen={open} onRequestClose={() => setOpen(false)}>
        <ModalTitle title={data?.username} onClose={() => setOpen(false)} />
        <Separator className="mt-0 h-[.8px]" />
        <DataTable
          data={data?.groups}
          columns={rolesColumns}
          hidePagination
          defaultPageSize={100}
          title={<small>Assigned Roles</small>}
          CustomTable={(props) => <List {...props} user={data} />}
        />
      </Modal>
    </>
  );
}

function Card({ data, user }: { data: any; user: any }) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const dispatch = useAppDispatch();

  const del = useCallback(async () => {
    setSubmitting(true);
    try {
      await dispatch(UnassignRoleThunk({ userId: user?.id, groupId: data?.id })).unwrap();
    } catch (error) {
      // error
    }
    setSubmitting(false);
  }, [data?.id, dispatch, user?.id]);

  return (
    <div className="py-2 px-4 flex items-center justify-between rounded-md bg-light-grey bg-opacity-40">
      <p>{data?.name}</p>
      <div className="flex items-center justify-between gap-2">
        <CheckRole permission={"unassign_users_to_group"}>
          <div
            onClick={() => setOpen(true)}
            className="flex items-center justify-center cursor-pointer"
          >
            <IconTrash className="text-red-400 size-5" />
          </div>
          <Modal
            isOpen={open}
            onRequestClose={() => setOpen(false)}
            size="sm"
            className="max-w-[40ch]"
          >
            <ModalTitle title="Delete Permission" onClose={() => setOpen(false)} />
            <p>
              Are you sure you want to remove permission <b>{data?.name}</b> from{" "}
              <b>
                {`${user?.firstName} ${user?.lastName}`} <small>({user?.username})</small>
              </b>
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
        </CheckRole>
      </div>
    </div>
  );
}

function List({ page, user }: customTableProps<any> & { user: any }) {
  return (
    <div className="grid gap-2 grid-cols-[repeat(auto-fill,_minmax(min(100%,10rem),1fr))]">
      {page.map((row) => (
        <Card key={row?.original?.id} data={row?.original} user={user} />
      ))}
      <CheckRole permission={"assign_users_to_group"}>
        <Add user={user} />
      </CheckRole>
    </div>
  );
}

function Add({ user }: { user: any }) {
  const [open, setOpen] = useState(false);
  const { list: roles } = useAppSelector((s) => s.roles);
  const dispatch = useAppDispatch();

  const submit = useCallback(
    async (
      values: any,
      { setErrors, setStatus, setSubmitting, setTouched, resetForm }: FormikHelpers<any>,
    ) => {
      try {
        const { submit, ...data } = values;
        const group = data?.group?.split?.("_**_");

        await dispatch(
          AssignRoleThunk({ userId: user?.id, groupId: group?.[0], groupName: group?.[1] }),
        ).unwrap();
        setSubmitting(false);
        setStatus({ success: true });
        setTouched({});
        resetForm();
        toast(`Role assigned successfully!`, {
          type: "success",
          autoClose: 5000,
        });
      } catch (err: any) {
        setStatus({ success: false });
        setErrors({ submit: err.message || "Something went wrong, please try again." });
        setSubmitting(false);
        toast(`Error in Assigning Role.`, {
          type: "success",
          autoClose: 5000,
        });
      }
    },
    [dispatch, user],
  );

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="flex items-center justify-center gap-2 p-3 py-3 rounded-md border border-dashed text-primary border-primary border-opacity-30 cursor-pointer"
      >
        <IconNewSection />
        <p>Add Role</p>
      </div>
      <Modal isOpen={open} onRequestClose={() => setOpen(false)} size="sm">
        <ModalTitle title="Add Role" onClose={() => setOpen(false)} />
        <Formik
          initialValues={{ group: "", submit: null }}
          validationSchema={Yup.object().shape({
            group: Yup.string().required("Role is required"),
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
                <Select
                  name="group"
                  label="Select Role"
                  placeholder="Select Role"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.group}
                  error={errors.group}
                  isTouched={Boolean(touched.group)}
                  options={roles?.map((s) => ({ value: `${s?.id}_**_${s?.name}`, text: s?.name }))}
                  required
                />
                <div className="flex justify-end pt-2 gap-2">
                  <Button
                    onClick={() => resetForm()}
                    outlined
                    disabled={isSubmitting}
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
                    Assign Role
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
