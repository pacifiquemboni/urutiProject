import DropDown from "@/components/dropdown";
import AddUserButton from "@/components/etc/AddUserButton";
import { RowType } from "@/components/table";
import DeleteUser from "./delete";
import CheckRole from "@/components/etc/CheckRoles";
import AssignRole from "./assignRole";

export default function Actions({ data }: { data?: RowType<any> }) {
  return (
    <DropDown>
      <CheckRole permission="assign_users_to_group">
        <AssignRole data={data?.original} />
      </CheckRole>
      <CheckRole permission="edit_user">
        <AddUserButton updateUser={data?.original} />
        <DeleteUser data={data?.original} />
      </CheckRole>
    </DropDown>
  );
}
