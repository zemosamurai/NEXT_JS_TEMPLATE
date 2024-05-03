import s from "./styles.module.scss";
import { redirect } from "@/6-shared/lib/i18n";
import { getServerSession } from "next-auth";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (session?.user) {
    redirect("/");
  }

  return <section className={s.layout}>{children}</section>;
}
