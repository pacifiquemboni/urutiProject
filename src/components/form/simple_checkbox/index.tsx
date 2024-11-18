import { FC } from "react";
import { FieldProps } from "formik";

interface ICheckbox extends FieldProps {
  label?: string;
  value: any;
}

const SimpleCheckbox: FC<ICheckbox> = ({ field, form, label, value }) => {
  const id = Math.random() * 100;
  console.log(form.values[field.name], value);
  const savedValue = form.values[field.name];
  let isChecked = false;
  if (Array.isArray(savedValue)) {
    isChecked = savedValue.includes(value);
  } else {
    // Check if savedValue is a single value (not an array)
    isChecked = savedValue === value;
  }

  const handleChange = () => {
    if (value && typeof value == "boolean") {
      form.setFieldValue(field.name, !isChecked);
    } else {
      const set = new Set(form.values[field.name]);

      if (isChecked) {
        set.delete(value);
      } else {
        set.add(value);
      }

      form.setFieldValue(field.name, Array.from(set));
    }
  };

  return (
    <label htmlFor={`check-${id}`} className="flex items-center space-x-2">
      <input
        id={`check-${id}`}
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="h-5 w-5 checkbox rounded cursor-pointer"
      />
      {label && <span className="text-gray-700 cursor-pointer capitalize">{label}</span>}
    </label>
  );
};

export default SimpleCheckbox;
