import Button from "@/components/button";
import { Input } from "@/components/form";
import { useCallback } from "react";
import { Formik, FormikHelpers, FormikValues } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { SIGNUP_ROUTE } from "@/helpers/routes";

export function Step1Title() {
  return (
    <>
      <h2 className="text-4xl text-primary">create account</h2>
      <p className="text-dark-grey mt-4">fill in your credentials</p>
    </>
  );
}

export default function Step1({
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

        navigate(`${SIGNUP_ROUTE}/2`);
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
        username: defaultData?.username,
        firstName: defaultData?.firstName,
        lastName: defaultData?.lastName,
        submit: null,
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().max(50).required("Username is required"),
        firstName: Yup.string().max(50).required("firstName is required"),
        lastName: Yup.string().max(50).required("lastName is required"),
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
              name="username"
              label="Username"
              placeholder="Enter Username"
              autoComplete="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              error={errors.username}
              isTouched={Boolean(touched.username)}
              required
            />
            <Input
              name="firstName"
              label="First Name"
              placeholder="Enter Your First Name"
              autoComplete="firstname"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
              error={errors.firstName}
              isTouched={Boolean(touched.firstName)}
              required
            />
            <Input
              name="lastName"
              label="Last Name"
              placeholder="Enter Your Last Name"
              autoComplete="lastname"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
              error={errors.lastName}
              isTouched={Boolean(touched.lastName)}
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
