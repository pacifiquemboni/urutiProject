import { NavLink, Navigate, useNavigate, useParams } from "react-router-dom";
import { LOGIN_ROUTE, SIGNUP_ROUTE } from "@/helpers/routes";
import Step1, { Step1Title } from "./step1";
import Step2, { Step2Title } from "./step2";
import Step3, { Step3Title } from "./step3";
import css from "./style.module.scss";
import { useCallback, useState } from "react";
import { useAppDispatch } from "@/redux/hook";
import { SignupThunk } from "@/redux/features/actions/users/me";

const initialValues = JSON.parse(`${localStorage.getItem("signupData")}`) || {
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
};

export default function SignupPage() {
  const { step } = useParams();
  const [formData, setFormData] = useState(initialValues);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submit = useCallback(
    async (data: any) => {
      try {
        await dispatch(SignupThunk(data)).unwrap();
        navigate(LOGIN_ROUTE);
      } catch (error) {
        // error
      }
    },
    [dispatch, navigate],
  );

  const changeFormData = useCallback(
    (values: any, canSubmit?: boolean) => {
      setFormData((p: any) => {
        const newData = { ...p, ...values };
        localStorage.setItem("signupData", JSON.stringify(newData));

        if (canSubmit) submit(newData);

        return newData;
      });
    },
    [submit],
  );

  return (
    <section className="flex flex-col gap-4 my-6 max-w-[min(24rem,100%)] w-96 mx-auto px-4 justify-center">
      <div className="capitalize">
        {!step ? (
          <Step1Title />
        ) : Number(step) == 2 ? (
          <Step2Title />
        ) : Number(step) == 3 ? (
          <Step3Title />
        ) : (
          <></>
        )}
      </div>
      <div className={css.steps}>
        <NavLink
          to={`${SIGNUP_ROUTE}/3`}
          className={({ isActive }) => (isActive ? css.active : "")}
          onClick={(e) => e.preventDefault()}
        />
        <b></b>
        <NavLink
          to={`${SIGNUP_ROUTE}/2`}
          className={({ isActive }) => (isActive ? css.active : "")}
          onClick={(e) => {
            !step ? e.preventDefault() : null;
          }}
        />
        <b></b>
        <NavLink to={SIGNUP_ROUTE} className={({ isActive }) => (isActive ? css.active : "")} />
      </div>
      {!step ? (
        <Step1 setFormData={changeFormData} defaultData={formData} />
      ) : Number(step) == 2 ? (
        <Step2 setFormData={changeFormData} defaultData={formData} />
      ) : Number(step) == 3 ? (
        <Step3 setFormData={changeFormData} defaultData={formData} />
      ) : (
        <Navigate to={SIGNUP_ROUTE} />
      )}
    </section>
  );
}
