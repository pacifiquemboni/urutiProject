import { useEffect, useState } from "react";
// import NEWHEADER from "../header";
// import NewFooter from "../NewFooter";
// import bgImage from "../../../assets/newassets/144.jpg";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { LoginClientThunk } from "@/redux/features/actions/users/me";
import { toast } from "react-toastify";
import { Client_Signup } from "@/helpers/routes";
import { Link } from "react-router-dom";
import ClientSignup from "./clientSignup";

const ClientLogin = () => {
  const dispatch = useAppDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState<string | null>(null);

  const { loading } = useAppSelector((state) => state.user);
  const { success } = useAppSelector((s) => s.user);

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
        });
        // console.log("errore",errorMessage);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [isLogin, setLogin] = useState(true)
  const [isSignup, setSignup] = useState(false)


  const OpenLogin = (() => {
    setLogin(true)
    setSignup(false)
  })
  const OpenSignup = (() => {
    setLogin(false)
    setSignup(true)
  })
  useEffect(() => {
    if (success) {
      setSignup(false)
    }
  }, [success])
  return (
    <>
      <div className="text-black flex">
        <div onClick={OpenLogin} className={`p-3 ${isLogin ? "bg-[#19232c] text-white" : ""}`}>LOGIN</div>
        <div onClick={OpenSignup} className={`p-3 ${isSignup ? "bg-[#19232c] text-white" : ""}`}>SIGNUP</div>
      </div>
      <hr />
      {
        isLogin && (
          <div
            className="flex items-center justify-center"
          >
            <div className=" py-0 ">
              <div className=" w-screen lg:w-96 h-128 lg:h-96 bg-white flex flex-col items-center  justify-center rounded-lg">

                <p className="font-bold text-sm p-2">Fill In Your Credentials</p>
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

                  {/* Signup Link */}
                  <div>
                    <p className="text-sm text-center">
                      Don't have an account?{" "}
                      <span className="text-green-500 font-semibold">
                        <Link to={Client_Signup}>Sign up</Link>
                      </span>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )
      }
      {
        isSignup && (
          <ClientSignup />
        )
      }
      {/* <NewFooter /> */}
    </>
  );
};

export default ClientLogin;
