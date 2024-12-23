import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { SignupClientThunk } from "@/redux/features/actions/users/me";
import { toast } from "react-toastify";
// import { Link } from "react-router-dom";
// import { Client_Login, HOME_ROUTE } from "@/helpers/routes";
// import { ClipLoader } from "react-spinners";

const ClientSignup = () => {
  const dispatch = useAppDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState<string | null>(null);

  const { loading } = useAppSelector((state) => state.user);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!firstName || !email || !phoneNumber || !password) {
      // setError("Username and password are required.");
      const toastId = toast.loading("Logging in...");
      toast.update(toastId, {
        render: `Name, Email, Phone number, and password are required`,
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
      return;
    }

    // setError(null); // Clear any previous errors

    dispatch(
      SignupClientThunk({
        username: phoneNumber,
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
      }),
    )
      .unwrap()
      .then((response) => {
        const toastId = toast.loading("Signing in...");
        toast.update(toastId, {
          render: `Signed in successfully!`,
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });

        // setTimeout(() => {
        //   window.location.assign(HOME_ROUTE);
        // }, 5000);

        console.log("Signup Successful:", response);
      })
      .catch((err) => {
        // setError(err || "An error occurred during signup.");
        const errorMessage = err?.response?.data?.message || "An error occurred during signup.";

        const toastId = toast.loading("Signing up...");
        toast.update(toastId, {
          render: `Phone Number or ${errorMessage}`,
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {/* Loader overlay */}
      {/* {!success && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="flex flex-row justify-center items-center  text-white p-2 rounded-lg">
            <p className="">Redirecting to login...</p>
            <ClipLoader color="#3498db" size={40} />
          </div>
        </div>
      )} */}

      
      <div className="flex items-center justify-center">
        <div className=" py-0">
          <div className="w-screen lg:w-96 h-128 lg:h-96  flex flex-col items-center lg:justify-around justify-center rounded-lg py-5">
            
            <form action="" onSubmit={handleSubmit} className="flex flex-col gap-2 w-4/5">
            <p className="font-bold text-sm text-center p-2 text-[#19232c]">Fill The Form </p>

              <div className="flex flex-col md:flex-row gap-2">
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstname(e.target.value)}
                  placeholder="First Name"
                  className="border w-full md:w-1/2 p-2 bg-[#DEDEDE] rounded"
                />
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastname(e.target.value)}
                  placeholder="Last Name"
                  className="border w-full md:w-1/2 p-2 bg-[#DEDEDE] rounded"
                />
              </div>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="border p-2 bg-[#DEDEDE] rounded"
              />
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Phone Number"
                className="border p-2 bg-[#DEDEDE] rounded"
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
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
              <div className="flex items-start gap-1">
                <input type="checkbox" />
                <p className="text-sm text-[#19232c]">I am at least 18 years old and agree to Babi Games
                Terms of Service and Privacy Policy.</p>
              </div>
              <button className="border p-2 bg-[#FF9671] rounded text-white font-bold">
                {loading ? "Signing in..." : "Signup"}
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <NewFooter /> */}
    </>
  );
};

export default ClientSignup;
