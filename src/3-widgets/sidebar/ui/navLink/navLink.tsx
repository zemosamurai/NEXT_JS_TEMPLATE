"use client";

import { Link } from "@/6-shared/lib/i18n";
import s from "./styles.module.scss";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { useSession } from "next-auth/react";

interface IProps {
  label: string;
  to: string;
}

export const NavLink = ({ label, to }: IProps) => {
  const pathname = usePathname();
  const session = useSession();
  const isActive = pathname.includes(to);

  return (
    <Link href={to}>
      <div className={classNames(s.link, { [s.active]: isActive })}>
        <span className={s.title}>{label}</span>
      </div>
    </Link>
  );
};
