import DropDown from "@/components/dropdown";
import { RowType } from "@/components/table";
import CheckRole from "@/components/etc/CheckRoles";
import { useCallback, useState } from "react";
import { IconChecks, IconTrashX } from "@tabler/icons-react";
import Modal, { ModalTitle } from "@/components/modal";
import Button from "@/components/button";
import { toast } from "react-toastify";
import { useAppDispatch } from "@/redux/hook";
import { ConfirmWonThunk, RejectTokenThunk } from "@/redux/features/actions/draw/tempWon";

export default function Actions({ data }: { data?: RowType<any> }) {
  return (
    <CheckRole permission={["register_won_token"]}>
      <DropDown>
        <CheckRole permission={["register_won_token"]}>
          <ConfirmWinners data={data?.original} />
        </CheckRole>
        <CheckRole permission={["reject_temp_winner"]}>
          <RejectWinners data={data?.original} />
        </CheckRole>
      </DropDown>
    </CheckRole>
  );
}

function ConfirmWinners({ data }: { data?: any }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const confirmWinner = useCallback(async () => {
    setLoading(true);
    const toastId = toast.loading("confirming winner...");

    try {
      await dispatch(ConfirmWonThunk(data?.tokenId)).unwrap();
      toast.update(toastId, {
        render: `Winner confirmed successfully!`,
        type: "success",
        isLoading: false,
        autoClose: 5000,
      });
    } catch (error) {
      toast.update(toastId, {
        render: `Error in confirming winner.`,
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    }
    setLoading(false);
  }, [data?.tokenId, dispatch]);

  return (
    <>
      <div
        className="px-4 py-2 hover:bg-black hover:bg-opacity-5 flex items-center"
        onClick={() => setOpen(true)}
      >
        <IconChecks className="w-4" />
        <span className="pl-3">Confirm Winner</span>
      </div>
      <Modal size="sm" isOpen={open} onRequestClose={() => setOpen(false)}>
        <ModalTitle title="Confirm Winner" onClose={() => setOpen(false)} />
        <p className="max-w-[40ch]">
          Are you sure you want to Confirm token <br />
          <b>{data?.tokenId}</b> as a winner?
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
            <Button size="xsm" className="!rounded-full" onClick={confirmWinner} disabled={loading}>
              Confirm
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

function RejectWinners({ data }: { data?: any }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const rejectWinner = useCallback(async () => {
    setLoading(true);
    const toastId = toast.loading("Rejecting winner...");

    try {
      await dispatch(RejectTokenThunk(data?.tokenId)).unwrap();
      toast.update(toastId, {
        render: `Winner Rejected successfully!`,
        type: "success",
        isLoading: false,
        autoClose: 5000,
      });
    } catch (error) {
      toast.update(toastId, {
        render: `Error in Rejectinng winner.`,
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    }
    setLoading(false);
  }, [data?.tokenId, dispatch]);

  return (
    <>
      <div
        className="px-4 py-2 text-red-500 hover:bg-black hover:bg-opacity-5 flex items-center"
        onClick={() => setOpen(true)}
      >
        <IconTrashX className="w-4" />
        <span className="pl-3">Reject Winner</span>
      </div>
      <Modal size="sm" isOpen={open} onRequestClose={() => setOpen(false)}>
        <ModalTitle title="Confirm Winner" onClose={() => setOpen(false)} />
        <p className="max-w-[40ch]">
          Are you sure you want to Reject token <br />
          <b>{data?.tokenId}</b>?
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
            <Button size="xsm" className="!rounded-full" onClick={rejectWinner} disabled={loading}>
              Reject
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
