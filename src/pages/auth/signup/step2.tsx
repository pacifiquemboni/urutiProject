import Button from "@components/button";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { SIGNUP_ROUTE } from "@helpers/routes";
import { Input } from "@components/form";
import { Formik, FormikHelpers, FormikValues } from "formik";
import * as Yup from "yup";

export function Step2Title() {
  return (
    <>
      <h2 className="text-4xl text-primary">OTP verification</h2>
      <p className="text-dark-grey mt-4">verify your email andress</p>
    </>
  );
}

export default function Step2({
  setFormData,
  defaultData,
}: {
  defaultData: { [key: string]: string };
  setFormData: (values: any) => void;
}) {
  const navigate = useNavigate();

  const submit = useCallback<any>(
    async (
      values: FormikValues,
      { setErrors, setStatus, setSubmitting }: FormikHelpers<FormikValues>,
    ) => {
      try {
        setFormData(values);
        setSubmitting(false);
        setStatus({ success: true });

        navigate(`${SIGNUP_ROUTE}/3`);
      } catch (err: any) {
        setStatus({ success: false });
        setErrors({ submit: err.message || "Something went wrong" });
        setSubmitting(false);
      }
    },
    [navigate, setFormData],
  );

  return (
    <Formik
      initialValues={{
        email: defaultData?.email,
        phoneNumber: defaultData?.phoneNumber,
        submit: null,
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().max(50).required("Email is required"),
        phoneNumber: Yup.string().max(50).required("Phone Number is required"),
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
              name="email"
              label="Email"
              placeholder="Enter Email"
              autoComplete="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={errors.email}
              isTouched={Boolean(touched.email)}
              required
            />
            <Input
              name="phoneNumber"
              label="Phone Number"
              placeholder="Enter Your Phone Number"
              autoComplete="phoneNumber"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phoneNumber}
              error={errors.phoneNumber}
              isTouched={Boolean(touched.phoneNumber)}
              required
            />
            <Button type="submit" className="!rounded-xl !py-3" disabled={isSubmitting}>
              {isSubmitting ? <>Please wait...</> : "Continue"}
            </Button>
          </form>
        );
      }}
    </Formik>
  );
}
