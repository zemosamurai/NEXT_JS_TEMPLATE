import * as yup from "yup";

// import { I18nTranslate } from "@/7-shared/lib/i18n";

export const loginFormSchema = () =>
  yup.object().shape({
    email: yup.string().trim().required(),
    // .email(t("validation.email"))
    // .max(256, t("validation.max", { count: 256 }))
    // .required(t("validation.required")),
    password: yup.string().trim().required(),
    // .required(t("validation.required"))
    // .min(8, t("validation.min", { count: 8 }))
    // .max(40, t("validation.max", { count: 40 })),
    message: yup.string().nullable(),
  });
