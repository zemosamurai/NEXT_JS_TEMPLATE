"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginFormSchema } from "../model/loginForm.schema";
import { ILoginForm } from "@/4-entities/auth";

import s from "./styles.module.scss";
import { Button, ControlInput } from "@/5-shared/ui";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const router = useRouter();
  const { control, handleSubmit, setError } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(loginFormSchema()),
  });

  const onSubmitHandler = async (data: ILoginForm) => {
    const res = await signIn("credentials", { ...data, redirect: false });

    if (res && !res.error) {
      console.log("success", res);
      router.push("/home");
    } else {
      console.log("error login", res);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className={s.form}>
      <h2 className={s.title}>Добро пожаловать</h2>
      <ControlInput
        type="email"
        placeholder="Email"
        name={"email"}
        control={control}
      />
      <ControlInput
        type="password"
        placeholder="Password"
        name={"password"}
        control={control}
      />
      <Button type="submit">Login</Button>
    </form>
  );
};
