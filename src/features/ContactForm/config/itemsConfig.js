export const itemsConfig = [
  {
    name: "name",
    label: "Ваше имя",
    placeholder: "Иван Иванов",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "example@gmail.com",
  },
  {
    name: "telephone",
    label: "Телефон",
    mask: "+{7} (000) 000 00 00",
    placeholder: "+7 (999) 999 99 99",
  },
  {
    name: "time",
    label: "Удобное время для звонка",
    mask: "HH:MM",
    placeholder: "Укажите время",
    blocks: {
      HH: {
        mask: IMask.MaskedRange,
        from: 0,
        to: 23,
        maxLength: 2,
      },
      MM: {
        mask: IMask.MaskedRange,
        from: 0,
        to: 59,
        maxLength: 2,
      },
    },
  },
  {
    name: "textarea",
    label: "Комментарий",
    placeholder: "Опишите в свободной форме",
    as: "textarea",
  },
];
