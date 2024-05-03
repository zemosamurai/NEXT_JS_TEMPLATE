"use client";

import { useRouter, usePathname } from "@/6-shared/lib/i18n";
import { ChangeEvent, ReactNode, useTransition } from "react";

type IProps = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export const LangSwitcherSelect = ({
  children,
  defaultValue,
  label,
}: IProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value;

    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <label>
      <p>{label}</p>
      <select
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
    </label>
  );
};
