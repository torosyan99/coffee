import { useMemo } from "react";
import * as Yup from "yup";

export const useMyForm = () => {
  const initialValues = {
    name: "",
    email: "",
    telephone: "",
    date: "",
    time: "",
    comment: "",
  };

  const SignupSchema = useMemo(
    () =>
      Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        telephone: Yup.string().min(18).required(),
        time: Yup.string().min(5).required(),
      }),
    []
  );

  return { initialValues, SignupSchema };
};
