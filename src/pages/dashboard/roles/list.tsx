import { useCallback, useLayoutEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hook";
import { SingleRoleThunk } from "@redux/features/actions/roles";
import Loader2 from "@components/etc/loader2";
import CheckRole from "@components/etc/CheckRoles";
import { customTableProps } from "@components/table";
import Modal, { ModalTitle } from "@components/modal";
import { IconSettingsCheck } from "@tabler/icons-react";
import { Add, Delete, Edit, More } from "./actions";

function Card({ data }: { data: any }) {
  const [open, setOpen] = useState(false);
  const { single, singleStatus } = useAppSelector((s) => s.roles);
  const dispatch = useAppDispatch();

  const getSingle = useCallback(
    async (id: string) => {
      if (!id) return;
      try {
        if (!single[id] && singleStatus[id] !== "pending")
          await dispatch(SingleRoleThunk({ id })).unwrap();
      } catch (error) {
        // do something
      }
    },
    [dispatch, single, singleStatus],
  );

  useLayoutEffect(() => {
    if (!single[data?.id] && singleStatus[data?.id] !== "pending") getSingle(data?.id);
  });

  return (
    <div className="py-3 px-4 rounded-md bg-light-grey bg-opacity-40">
      <p>{data?.name}</p>
      <div className="flex items-center justify-between gap-2 pt-2">
        <small className="text-grey cursor-pointer flex items-center" onClick={() => setOpen(true)}>
          <IconSettingsCheck className="h-4" /> <span>Edit Permissions</span>
        </small>
        <Modal isOpen={open} onRequestClose={() => setOpen(false)}>
          <ModalTitle title={data?.name} onClose={() => setOpen(false)} />
          <More data={data} />
        </Modal>
        <div className="flex justify-end gap-2">
          <Delete data={data} />
          <Edit data={data} />
        </div>
      </div>
    </div>
  );
}

export function List({ page, loading }: customTableProps<any>) {
  if (loading)
    return (
      <div className="w-full flex justify-center">
        <Loader2 />
      </div>
    );
  return (
    <div className="grid gap-2 grid-cols-[repeat(auto-fill,_minmax(min(100%,15rem),1fr))]">
      {page.map((row) => (
        <Card key={row?.original?.id} data={row?.original} />
      ))}
      <CheckRole permission={"create_groups"}>
        <Add />
      </CheckRole>
    </div>
  );
}
