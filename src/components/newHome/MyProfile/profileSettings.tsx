import { GetUserThunk } from "@/redux/features/actions/users/me";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useEffect, useState } from "react";

const ProfileSettings = () => {
  const dispatch = useAppDispatch();
  const { user, access_token } = useAppSelector((s) => s.user);
  const [isProfileSettings, setProfileSettings] = useState(true)
  const [isUpdatePassword, setUpdatePassword] = useState(false)


  const OpenProfileSettings = (() => {
    setProfileSettings(true)
    setUpdatePassword(false)
  })
  const OpenUpdatePassword = (() => {
    setProfileSettings(false)
    setUpdatePassword(true)
  })
  // State to manage input fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
  });

  useEffect(() => {
    if (!user && access_token) {
      dispatch(GetUserThunk());
    }
  }, [access_token, dispatch, user]);

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        username: user.username || "",
      });
    }
  }, [user]);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated Data:", formData);
    // Dispatch an action to update the user data
    // dispatch(UpdateUserThunk(formData)); // Example
  };

  return (
    <div className="w-full p-5">
      <div className="flex">
        <div onClick={OpenProfileSettings} className={`p-3 ${isProfileSettings ? "bg-[#19232c] text-white" : ""}`}>Profile Settings</div>
        <div onClick={OpenUpdatePassword} className={`p-3 ${isUpdatePassword ? "bg-[#19232c] text-white" : ""}`}>Update Password</div>
      </div>
      <hr />
      <div className="py-5">
        {
          isProfileSettings && (
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="bg-[#F1F4FC] h-10 w-[48%] flex flex-row justify-between items-center px-2"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="bg-[#F1F4FC] h-10 w-[48%] flex flex-row justify-between items-center px-2"
              />
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                readOnly
                className="bg-[#F1F4FC] h-10 w-[48%] flex flex-row justify-between items-center px-2"
              />
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="bg-[#F1F4FC] h-10 w-[48%] flex flex-row justify-between items-center px-2"
              />
              <button
                type="submit"
                className="bg-[#FF9671] rounded-2xl text-white h-10 w-[48%] flex justify-center items-center"
              >
                Save Changes
              </button>
            </form>
          )
        }
        {
          isUpdatePassword && <p>Update password section</p>
        }
      </div>
    </div>
  );
};

export default ProfileSettings;
