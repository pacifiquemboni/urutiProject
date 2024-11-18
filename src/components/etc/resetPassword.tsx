import { IconPasswordMobilePhone } from "@tabler/icons-react";
import { useState } from "react";
import Modal, { ModalTitle } from "../modal";
import ResetPasswordForm from "./resetPasswordForm";

export default function ResetPassword({ user }: { user: any }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <span onClick={() => setOpen(true)} className="flex items-center gap-2 p-1">
        <IconPasswordMobilePhone size={20} />
        <span>Reset Password</span>
      </span>
      <Modal size="sm" isOpen={isOpen} onRequestClose={() => setOpen(false)}>
        <ModalTitle title="Reset Password" onClose={() => setOpen(false)} />
        <ResetPasswordForm user={user} />
      </Modal>
    </>
  );
}
