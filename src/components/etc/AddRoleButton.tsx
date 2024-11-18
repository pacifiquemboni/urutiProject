import { useState } from "react";
import { IconEdit } from "@tabler/icons-react";

const AddRoleButton = ({ updateRole }: { updateRole?: any }) => {
  // const initialValues = {
  //   name: updateRole?.name || "",
  //   description: updateRole?.description || "",
  //   submit: null,
  // };

  const [, setIsModalOpen] = useState(false);
  // const clientQuery = useQueryClient();

  const showModal = () => {
    setIsModalOpen(true);
  };

  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };

  // const nav = useNavigate();

  // const handleCancel = (role?: Role) => {
  //   setIsModalOpen(false);
  //   if (role) {
  //     toastMessage(
  //       `🎉 You have ${updateRole ? "updated" : "added new"} role <b>${role.name}</b> successfully to the lottery.`,
  //       "info",
  //     );

  //     if (!updateRole) {
  //       nav("/dashboard/users/roles", { replace: true });
  //       clientQuery.setQueryData(["roles"], (roles: any) => [...(roles || []), role]);
  //     } else {
  //       clientQuery.setQueryData(["roles"], (roles: any) =>
  //         roles?.map((r: Role) => (r.roleId === role.roleId ? role : r)),
  //       );
  //     }
  //   }
  //   if (updateRole) {
  //     clientQuery.setQueryData(["roles", updateRole.roleId], role);
  //   }
  // };
  return (
    <>
      {updateRole ? (
        <div onClick={showModal}>
          <IconEdit size={18} className="" />
        </div>
      ) : (
        <button
          className="bg-[#00A0DE] text-white p-2 px-5 flex items-center gap-2"
          onClick={showModal}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.327 0.75C15.0472 0.75 16.875 2.6595 16.875 5.50125V12.1237C16.875 14.9655 15.0472 16.875 12.327 16.875H5.298C2.57775 16.875 0.75 14.9655 0.75 12.1237V5.50125C0.75 2.6595 2.57775 0.75 5.298 0.75H12.327ZM12.327 1.875H5.298C3.219 1.875 1.875 3.29775 1.875 5.50125V12.1237C1.875 14.3272 3.219 15.75 5.298 15.75H12.327C14.4067 15.75 15.75 14.3272 15.75 12.1237V5.50125C15.75 3.29775 14.4067 1.875 12.327 1.875ZM8.8125 5.49547C9.123 5.49547 9.375 5.74748 9.375 6.05797V8.2425L11.5624 8.24265C11.8729 8.24265 12.1249 8.49465 12.1249 8.80515C12.1249 9.11565 11.8729 9.36765 11.5624 9.36765L9.375 9.3675V11.5532C9.375 11.8637 9.123 12.1157 8.8125 12.1157C8.502 12.1157 8.25 11.8637 8.25 11.5532V9.3675L6.06262 9.36765C5.75137 9.36765 5.50012 9.11565 5.50012 8.80515C5.50012 8.49465 5.75137 8.24265 6.06262 8.24265L8.25 8.2425V6.05797C8.25 5.74748 8.502 5.49547 8.8125 5.49547Z"
              fill="white"
            />
          </svg>
          <span>Add Role</span>
        </button>
      )}
      {/* <Modal
        title={<p className="text-lg">{updateRole ? "Update" : "Add"} Role</p>}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={() => handleCancel()}
        footer={false}
        closeIcon={<IconSquareRoundedX className="text-black" size={22} />}
        style={{ fontFamily: "Outfit" }}
        styles={{ body: { padding: "2px" } }}
        destroyOnClose={updateRole != undefined} // centered
      >
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("Role name is required"),
            description: Yup.string().required("Role description is required"),
          })}
          onSubmit={async (
            values,
            { setErrors, setStatus, setSubmitting, setValues, setTouched },
          ) => {
            try {
              if (updateRole) {
                const result = await Fetcher.patch<Role>(
                  "users/role/" + updateRole.roleId,
                  { ...values },
                  RoleSchema,
                );
                handleCancel(result);
              } else {
                const result = await Fetcher.post<Role>(
                  "users/role",
                  { ...values, submit: null },
                  RoleSchema,
                );
                handleCancel(result);
                setValues(initialValues);
              }
              setSubmitting(false);
              setStatus({ success: true });
              setTouched({});
            } catch (err: any) {
              setStatus({ success: false });
              setErrors({ submit: err.message || "Something went wrong, please try again." });
              setSubmitting(false);
            }
          }}
        >
          {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => {
            return (
              <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-3 my-4">
                {errors.submit && (
                  <p
                    className="bg-red-500 p-2 px-4 text-white text-sm text-center"
                    dangerouslySetInnerHTML={{ __html: errors.submit }}
                  ></p>
                )}
                <Input
                  type="text"
                  name="name"
                  label="Role name"
                  placeholder="Enter role name"
                  error={errors.name}
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isTouched={Boolean(touched.name)}
                  className="outline-none p-3 px-4-light bg-opacity-50 w-full mb-0.5"
                  disabled={updateRole?.name === "player" || updateRole?.name === "admin"}
                />
                <Input
                  type="text"
                  name="description"
                  label="Role description"
                  placeholder="Enter role description"
                  error={errors.description}
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isTouched={Boolean(touched.description)}
                  className="outline-none p-3 px-4-light bg-opacity-50 w-full mb-0.5 resize-none"
                  multiLines={true}
                />
                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="bg-[#00A0DE] disabled:bg-gray-400 text-white p-2.5 px-6 flex items-center gap-2"
                    disabled={isSubmitting}
                  >
                    <span>
                      {isSubmitting ? "Please wait..." : updateRole ? "Update Role" : "Create Role"}
                    </span>
                  </button>
                </div>
              </form>
            );
          }}
        </Formik>
      </Modal> */}
    </>
  );
};

export default AddRoleButton;
