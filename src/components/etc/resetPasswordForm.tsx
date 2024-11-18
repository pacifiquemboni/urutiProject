import Button from "@/components/button";
import { Input } from "@/components/form";
import { ResetPasswordThunk } from "@/redux/features/actions/users/me";
import { useAppDispatch } from "@/redux/hook";
import { IconCircle } from "@tabler/icons-react";
import { Formik, FormikHelpers, FormikValues } from "formik";
import { useCallback } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

export default function ResetPasswordForm({ user, onClose }: { user: any; onClose?: () => void }) {
  const dispatch = useAppDispatch();

  const submit = useCallback<any>(
    async (
      values: FormikValues,
      { setErrors, setStatus, setSubmitting }: FormikHelpers<FormikValues>,
    ) => {
      const { submit, cpassword, ...data } = values;

      const toastId = toast.loading("Resetting Password...");
      try {
        setSubmitting(false);
        setStatus({ success: true });

        await dispatch(ResetPasswordThunk({ id: user?.id, password: data?.password })).unwrap();
        // navigate(`${SIGNUP_ROUTE}/3`);
        onClose?.();
        toast.update(toastId, {
          render: `Password Reset Successfully!`,
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });
      } catch (err: any) {
        setStatus({ success: false });
        setErrors({ submit: err.message || "Something went wrong" });
        setSubmitting(false);
        toast.update(toastId, {
          render: `Error in Resetting Password.`,
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
      }
    },
    [dispatch, onClose, user?.id],
  );

  return (
    <Formik
      initialValues={{
        password: "",
        cpassword: "",
        submit: null,
      }}
      validationSchema={Yup.object().shape({
        password: Yup.string().min(3).max(50).required("Password is required"),
        cpassword: Yup.string()
          .required("Please retype your password.")
          .oneOf([Yup.ref("password")], "Your passwords do not match."),
      })}
      onSubmit={submit}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => {
        return (
          <form
            method="post"
            className="flex flex-col gap-4 text-sm [&_input]:!rounded-xl"
            onSubmit={handleSubmit}
          >
            {errors.submit && <p className="text-red-500 -my-2">{errors.submit}</p>}
            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="Create Passsword"
              autoComplete="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              error={errors.password}
              isTouched={Boolean(touched.password)}
              className="!text-sm !px-4 !py-2.5"
              required
            />
            <Input
              label="Confirm Password"
              name="cpassword"
              type="password"
              placeholder="Confirm Your Password"
              autoComplete="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.cpassword}
              error={errors.cpassword}
              isTouched={Boolean(touched.cpassword)}
              className="!text-sm !px-4 !py-2.5"
              required
            />
            <div className="flex justify-end pt-2 gap-2">
              <Button
                type="reset"
                outlined
                disabled={isSubmitting}
                size="xsm"
                className="!rounded-full"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                size="xsm"
                className="!rounded-full"
                icon={isSubmitting && <IconCircle color="inherit" size={16} />}
              >
                Reset Password
              </Button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
}
