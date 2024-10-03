import { useState } from "react";

export const useForm = (inititalForm = {}) => {
  const [formState, setFormState] = useState(inititalForm);

  const inputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return { formState, inputChange };
};
