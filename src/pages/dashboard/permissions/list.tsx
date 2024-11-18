import Loader2 from "@components/etc/loader2";
import { customTableProps } from "@components/table";
import CheckRole from "@components/etc/CheckRoles";
import { Add, Delete, Edit } from "./actions";

export function List({ page, loading }: customTableProps<any>) {
  if (loading)
    return (
      <div className="w-full flex justify-center">
        <Loader2 />
      </div>
    );
  return (
    <div className="grid gap-2 grid-cols-[repeat(auto-fill,_minmax(min(100%,15rem),1fr))]">
      <CheckRole permission="view_roles">
        {page.map((row) => (
          <div key={row?.original?.id} className="py-3 px-4 rounded-md bg-light-grey bg-opacity-40">
            <p>{row?.original?.name}</p>
            <small className="text-grey block pt-2">{row?.original?.description}</small>
            <div className="flex justify-end gap-2">
              <Delete data={row?.original} />
              <Edit data={row?.original} />
            </div>
          </div>
        ))}
      </CheckRole>
      <CheckRole permission="create_roles">
        <Add />
      </CheckRole>
    </div>
  );
}
