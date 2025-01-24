import { UpdateUsersThunk } from "@/redux/features/actions/users";
import { GetUserThunk } from "@/redux/features/actions/users/me";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ProfileSettings = () => {
  const dispatch = useAppDispatch();
  const { user, access_token } = useAppSelector((s) => s.user);

  const [isProfileSettings, setProfileSettings] = useState(true);
  const [isUpdatePassword, setUpdatePassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // State to manage input fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
  });

  // Tab handlers
  const openProfileSettings = () => {
    setProfileSettings(true);
    setUpdatePassword(false);
    dispatch(GetUserThunk());
  };

  const openUpdatePassword = () => {
    setProfileSettings(false);
    setUpdatePassword(true);
  };

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
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.username) {
      toast.error("All fields except email are required!");
      return;
    }

    setLoading(true);
    try {
     await dispatch(UpdateUsersThunk({ data: formData, id: user?.id })).unwrap();
      toast.success("Profile updated successfully!");
    } catch (error: any) {
      toast.error(error.message || "Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full p-5">
      {/* Navigation Tabs */}
      <div className="flex">
        <div
          onClick={openProfileSettings}
          className={`p-3 ${isProfileSettings ? "bg-[#19232c] text-white" : ""}`}
        >
          Profile Settings
        </div>
        <div
          onClick={openUpdatePassword}
          className={`p-3 ${isUpdatePassword ? "bg-[#19232c] text-white" : ""}`}
        >
          Update Password
        </div>
      </div>
      <hr />
      <div className="py-5 ">
        {isProfileSettings && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 items-center">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="bg-[#F1F4FC] h-10 w-[100%] lg:w-[48%] px-2"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="bg-[#F1F4FC] h-10 w-[100%] lg:w-[48%] px-2"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              readOnly
              placeholder="Email"
              className="bg-[#F1F4FC] h-10 w-[100%] lg:w-[48%] px-2"
            />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="bg-[#F1F4FC] h-10 w-[100%] lg:w-[48%] px-2"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-[#FF9671] rounded-2xl text-white h-10 w-[100%] lg:w-[48%] flex justify-center items-center"
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </form>
        )}
        {isUpdatePassword && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Update Password</h3>
            <p>Update password functionality goes here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileSettings;
