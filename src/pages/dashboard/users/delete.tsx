import { TrashIcon } from "@/assets/icons";
import Button from "@/components/button";
import Modal, { ModalTitle } from "@/components/modal";
import { DeleteUsersThunk } from "@/redux/features/actions/users";
import { useAppDispatch } from "@/redux/hook";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";

export default function DeleteUser({ data }: { data?: any }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const deleteUser = useCallback(async () => {
    setLoading(true);
    const toastId = toast.loading("Deleting User...");

    try {
      await dispatch(DeleteUsersThunk({ id: `${data?.id}` })).unwrap();
      toast.update(toastId, {
        render: `User deleted Successfully!`,
        type: "success",
        isLoading: false,
        autoClose: 5000,
      });
    } catch (error) {
      toast.update(toastId, {
        render: `Error in deleting User.`,
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    }
    setLoading(false);
  }, [data, dispatch]);

  return (
    <>
      <div
        className="px-4 py-2 hover:bg-black hover:bg-opacity-5 text-red-600 flex items-center"
        onClick={() => setOpen(true)}
      >
        <TrashIcon className="w-4" />
        <span className="pl-3">delete</span>
      </div>
      <Modal size="sm" isOpen={open} onRequestClose={() => setOpen(false)}>
        <ModalTitle title="Delete User" onClose={() => setOpen(false)} />
        <p className="max-w-[40ch]">
          Are you sure you want to delete user <br />
          <b>
            {data?.firstName} {data?.lastName}
          </b>
          ?
        </p>
        <div className="flex mt-4">
          <div className="flex-1 flex justify-end gap-2">
            <Button
              size="xsm"
              className="!rounded-full"
              onClick={() => setOpen(false)}
              disabled={loading}
              outlined
            >
              No thanks
            </Button>
            <Button size="xsm" className="!rounded-full" onClick={deleteUser} disabled={loading}>
              Delete
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
