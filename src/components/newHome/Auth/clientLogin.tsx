import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { LoginClientThunk } from "@/redux/features/actions/users/me";
import { toast } from "react-toastify";

const ClientLogin = () => {
  const dispatch = useAppDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState<string | null>(null);

  const { loading } = useAppSelector((state) => state.user);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username || !password) {
      // setError("Username and password are required.");
      const toastId = toast.loading("Logging in...");
      toast.update(toastId, {
        render: `Username and password are required.`,
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
      return;
    }

    // setError(null); // Clear any previous errors

    dispatch(LoginClientThunk({ username, password }))
      .unwrap()
      .then((response) => {
        const toastId = toast.loading("Logging in...");
        toast.update(toastId, {
          render: `Logged in successfully!`,
          type: "success",
          isLoading: false,
          autoClose: 5000,
          closeButton:true,
        });
        // window.location.assign(My_Wallet);
        console.log("Login Successful:", response);
      })
      .catch((err) => {
        const errorMessage = err?.response?.data?.message || "An error occurred during login.";
        // setError(errorMessage || "An error occurred during login.");
        const toastId = toast.loading("Logging in...");
        toast.update(toastId, {
          render: `${errorMessage}`,
          type: "error",
          isLoading: false,
          autoClose: 5000,
          closeButton: true,
        });
        // console.log("errore",errorMessage);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <>
          <div
            className="flex items-center justify-center"
          >
            <div className=" py-0 ">
              <div className=" w-screen lg:w-96 h-128 lg:h-96  flex flex-col items-center  justify-center ">

                <p className="font-bold text-sm p-2 text-[#19232c]">Fill In Your Credentials</p>
                {/* {error && <div className="text-red-500">{error}</div>} */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-4/5">
                  {/* Username Input */}
                  <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Phone Number"
                    className="border p-2 bg-[#DEDEDE] rounded"
                  />

                  {/* Password Input */}
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="border p-2 bg-[#DEDEDE] rounded w-full"
                    />
                    <span
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </span>
                  </div>

                  {/* Forgot Password */}
                  <div className="text-right text-sm text-blue-500 cursor-pointer">
                    Forget Password?
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="border p-2 bg-[#FF9671] rounded text-white font-bold"
                  >
                    {loading ? "Loaging in..." : "Login"}
                  </button>

                  
                </form>
              </div>
            </div>
          </div>
        
      
      {/* <NewFooter /> */}
    </>
  );
};

export default ClientLogin;
