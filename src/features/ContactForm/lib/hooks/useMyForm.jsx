import { useCallback, useMemo } from "react";
import * as Yup from "yup";

export const useMyForm = () => {
  const initialValues = {
    name: "",
    email: "",
    telephone: "",
    preferred_time: "",
    comment: "",
  };

  const schema = useMemo(
    () =>
      Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        telephone: Yup.string().min(18).required(),
        preferred_time: Yup.string()
          .test((value) => {
            if (!value) return true;
            const match = value.match(/^с (\d{2}):(\d{2}) до (\d{2}):(\d{2})$/);
            if (!match) return false;

            const [, fromH, fromM, toH, toM] = match.map(Number);

            console.log(match.map(Number))
            const fromTotal = fromH * 60 + fromM;
            const toTotal = toH * 60 + toM;

            return toTotal > fromTotal;
          })
          .required(),
      }),
    []
  );

  const sendData = useCallback(async (e) => {
    fetch("api/callback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Иван",
        email: "ivan@example.com",
        phone: "+7 (900) 123-45-67",
        preferred_time: "с 12:00 до 14:00",
        comment: "Перезвоните завтра, пожалуйста",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Ответ сервера:", data);
      })
      .catch((err) => {
        console.error("Ошибка:", err);
      });
  }, []);

  return { initialValues, schema, sendData };
};
