import { useState } from "react";
import NEWHEADER from "../header";
import NewFooter from "../NewFooter";
import bgImage from "../../../assets/img/loginBck2.jpg";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { SignupClientThunk } from "@/redux/features/actions/users/me";
import { toast } from "react-toastify";

const ClientSignup = () => {
  const dispatch = useAppDispatch();

  const [showPassword, setShowPassword] = useState(false);
  
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const { loading } = useAppSelector((state) => state.user);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if ( !firstName || !lastName || !email || !phoneNumber || !password) {
      setError("Username and password are required.");
      return;
    }

    setError(null); // Clear any previous errors

    dispatch(SignupClientThunk({ username:phoneNumber, firstName, lastName, email, phoneNumber, password }))
      .unwrap()
      .then((response) => {
        const toastId = toast.loading("Signning in...");
        toast.update(toastId, {
          render: `Signed in successfully!`,
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });
        // window.location.assign(My_Wallet);
        console.log("Signup Successful:", response);
      })
      .catch((err) => {
        setError(err || "An error occurred during login.");
      });
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  console.log(error);

  return (
    <>
      <NEWHEADER />
      <div
        className="bg-orange-gradient flex items-center justify-end  h-144 lg:h-144"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="lg:mx-20">
          <div className="w-screen lg:w-96 h-128 lg:h-128 bg-white flex flex-col items-center lg:justify-around justify-center rounded-lg">
            <h1 className="font-bold text-xl">SIGN UP</h1>
            <p className="font-bold text-sm">
              Already have an account? <span>Login</span>
            </p>
            <form action="" onSubmit={handleSubmit} className="flex flex-col gap-2 w-4/5">
             
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstname(e.target.value)}
                placeholder="First Name"
                className="border p-2 bg-[#DEDEDE] rounded"
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastname(e.target.value)}
                placeholder="Last Name"
                className="border p-2 bg-[#DEDEDE] rounded"
              />
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
              <button className="border p-2 bg-[#FF9671] rounded text-white font-bold">
                {loading ? "Signing in..." : "Signup"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <NewFooter />
    </>
  );
};

export default ClientSignup;
