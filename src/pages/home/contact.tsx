import Button from "@/components/button";
import { Input, InputAutoHeight } from "@/components/form";
import { ContactsUsThunk } from "@/redux/features/actions/contacts";
import { useAppDispatch } from "@/redux/hook";
import { Formik, FormikHelpers, FormikValues } from "formik";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import * as Yup from "yup";

export default function ContactSection() {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const submit = useCallback<any>(
    async (
      values: FormikValues,
      { setErrors, setStatus, setSubmitting }: FormikHelpers<FormikValues>,
    ) => {
      setSubmitting(true);
      setStatus({ success: true });
      const toastId = toast.loading("Sending Message...");

      try {
        const { submit, ...data } = values;

        await dispatch(ContactsUsThunk(data)).unwrap();

        toast.update(toastId, {
          render: `Message Sent Successfully!`,
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });
      } catch (error: any) {
        setStatus({ success: false });
        setErrors({ submit: error.message || "Something went wrong" });
        toast.update(toastId, {
          render: `Error in Sending Message.`,
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
      } finally {
        setSubmitting(false);
      }
    },
    [dispatch],
  );

  return (
    <section className="capitalize py-20 w-[min(100%,70ch)] mx-auto" id="contact">
      <h2 className="text-3xl font-extrabold text-center pb-4">{t("head.contact")}</h2>
      <p className="text-center pb-12">{t("contact-content")}</p>
      <Formik
        initialValues={{ email: "", name: "", message: "", submit: null }}
        validationSchema={Yup.object().shape({
          email: Yup.string().max(50).required("Email or phone number is required"),
          name: Yup.string().min(3).required("Name is required"),
          message: Yup.string().min(3).required("Message is required"),
        })}
        onSubmit={submit}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
            <Input
              defaultValue={values?.name}
              isTouched={touched?.name}
              error={errors?.name}
              onChange={handleChange}
              onBlur={handleBlur}
              label={t("Full Names")}
              name="name"
              placeholder={t("Enter Your Full Names")}
            />
            <Input
              defaultValue={values?.email}
              isTouched={touched?.email}
              error={errors?.email}
              onChange={handleChange}
              onBlur={handleBlur}
              label={t("Email")}
              type="email"
              name="email"
              placeholder={t("Enter Your Email")}
            />
            <InputAutoHeight
              defaultValue={values.message}
              isTouched={touched?.message}
              error={errors?.message}
              onChange={handleChange}
              onBlur={handleBlur}
              label={t("Message")}
              name="message"
              placeholder={t("Enter Your Message")}
              className="max-h-[25rem] min-h-20"
              boxClassName="sm:col-span-2"
            />
            <Button
              disabled={isSubmitting}
              className="sm:col-span-2 mx-auto !px-2 !py-3"
              type="submit"
            >
              Send
            </Button>
          </form>
        )}
      </Formik>
    </section>
  );
}
