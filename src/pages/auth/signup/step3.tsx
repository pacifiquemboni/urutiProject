import Button from "@/components/button";
import { Input } from "@/components/form";
import { Formik, FormikHelpers, FormikValues } from "formik";
import { useCallback } from "react";
import * as Yup from "yup";

export function Step3Title() {
  return (
    <>
      <h2 className="text-4xl text-primary">create account</h2>
      <p className="text-dark-grey mt-4">fill in your credentials</p>
    </>
  );
}

export default function Step3({
  setFormData,
  defaultData,
}: {
  defaultData: { [key: string]: string };
  setFormData: (values: any, canSubmit?: boolean) => void;
}) {
  // const navigate = useNavigate();

  const submit = useCallback<any>(
    async (
      values: FormikValues,
      { setErrors, setStatus, setSubmitting }: FormikHelpers<FormikValues>,
    ) => {
      try {
        setFormData(values, true);
        setSubmitting(false);
        setStatus({ success: true });

        // navigate(`${SIGNUP_ROUTE}/3`);
      } catch (err: any) {
        setStatus({ success: false });
        setErrors({ submit: err.message || "Something went wrong" });
        setSubmitting(false);
      }
    },
    [setFormData],
  );

  return (
    <Formik
      initialValues={{
        password: defaultData?.password,
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
            className="flex flex-col gap-4 [&_input]:!rounded-xl"
            onSubmit={handleSubmit}
          >
            {errors.submit ? (
              <p className="text-red-500 -my-2">{errors.submit}</p>
            ) : (
              <p className="text-transparent select-none -my-2">error</p>
            )}
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
              required
            />
            <div className="flex items-center gap-2">
              <Input type="checkbox" id="remember" required />{" "}
              <label htmlFor="remember">
                By checking this box, you acknowledge that you have read and agree to Babi Games's
                Terms and Conditions.
              </label>
            </div>
            <Button type="submit" className="!rounded-xl !py-3" disabled={isSubmitting}>
              {isSubmitting ? <>Please wait...</> : "Continue"}
            </Button>
          </form>
        );
      }}
    </Formik>
  );
}
