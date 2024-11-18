import { useCallback } from "react";
import Button from "../button";
import { logout } from "@/redux/features/slices/user";
import { useAppDispatch } from "@/redux/hook";

const LogoutButton = () => {
  const dispatch = useAppDispatch();

  const click = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <Button className="text-white p-2 rounded-md disabled:bg-gray-300 w-full" onClick={click}>
      Logout
    </Button>
  );
};

export default LogoutButton;
