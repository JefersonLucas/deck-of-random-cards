import { ChangeEvent, useState } from "react";

type validate = "name";

const validation = {
  name: {
    regex: /^[\w\s]+$/,
    message: "Fill in the field.",
  },
};

function useForm(type: validate) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  function validate(value: string) {
    if (type === null) {
      return true;
    }
    if (value.length === 0) {
      setError("Fill in a value.");
      return false;
    } else if (validation[type] && !validation[type].regex.test(value)) {
      setError(validation[type].message);
      return false;
    } else {
      setError("");
      return true;
    }
  }

  function onChange({ target }: ChangeEvent<HTMLInputElement>) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    error,
    setValue,
    onChange,
    setError,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
}

export default useForm;
