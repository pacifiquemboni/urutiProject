import Button from "@/components/button";
import { Input } from "@/components/form";
import { useCallback, useState } from "react";
import { DASHBOARD_ROUTE } from "@/helpers/routes";
import { LoginThunk } from "@/redux/features/actions/users/me";
import { useAppDispatch } from "@/redux/hook";
import { Formik, FormikValues, FormikHelpers } from "formik";
import * as Yup from "yup";
import Modal, { ModalTitle } from "@/components/modal";
import ResetPasswordForm from "@/components/etc/resetPasswordForm";

export default function Login() {
  const dispatch = useAppDispatch();
  const [openReset, setOpenReset] = useState(false);
  const [user, setuser] = useState<any>({});

  const submit = useCallback<any>(
    async (
      values: FormikValues,
      { setErrors, setStatus, setSubmitting }: FormikHelpers<FormikValues>,
    ) => {
      try {
        const data = await dispatch(
          LoginThunk({
            username: values.email,
            password: values.password,
          }),
        ).unwrap();
        setSubmitting(false);
        setStatus({ success: true });

        if (data?.accessToken) {
          if (
            data?.userInfo?.realmRoles?.includes("run_draw") &&
            !data?.userInfo?.realmRoles?.includes("view_dashboard")
          )
            // window.location.assign(ROULETTE_ROUTE);
          // else 
          window.location.assign(DASHBOARD_ROUTE);
        } else {
          // window.location.assign(HOME_ROUTE);
          setuser({ ...data, id: data?.userId });
          setOpenReset(true);
        }
      } catch (err: any) {
        setStatus({ success: false });
        setErrors({
          submit: err?.response?.data?.message || err.message || "Something went wrong",
        });
        setSubmitting(false);
      }
    },
    [dispatch],
  );

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "", submit: null }}
        validationSchema={Yup.object().shape({
          email: Yup.string().max(50).required("Email or phone number is required"),
          password: Yup.string().min(3).max(15).required("Password is required"),
        })}
        onSubmit={submit}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => {
          return (
            <form
              method="post"
              className="flex flex-col gap-4 my-6 w-[min(24rem,100%)] mx-auto px-4 justify-center [&_input]:!rounded-xl"
              onSubmit={handleSubmit}
            >
              <div className="capitalize">
                <h2 className="text-4xl text-primary">Welcome Back</h2>
                <p className="text-dark-grey mt-4">fill in your credentials</p>
              </div>
              {errors?.submit ? (
                <p className="text-red-500 -my-2">{errors?.submit}</p>
              ) : (
                <p className="text-transparent select-none -my-2">error</p>
              )}
              <Input
                name="email"
                label="Username or Email"
                placeholder="Username or Email"
                autoComplete="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={errors.email}
                isTouched={Boolean(touched.email)}
                required
              />
              <Input
                name="password"
                label="Password"
                type="password"
                placeholder="Enter Your Password"
                error={errors.password}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                isTouched={Boolean(touched.password)}
                required
              />
              <Button type="submit" className="!rounded-xl !py-3" disabled={isSubmitting}>
                {isSubmitting ? <>Please wait...</> : "Log In"}
              </Button>
            </form>
          );
        }}
      </Formik>
      <Modal size="sm" isOpen={openReset} onRequestClose={() => setOpenReset(false)}>
        <ModalTitle title="Reset Your Password" onClose={() => setOpenReset(false)} />
        <ResetPasswordForm user={user} onClose={() => setOpenReset(false)} />
      </Modal>
    </>
  );
}
