import { Sidebar } from "@/3-widgets/sidebar";

import s from "./styles.module.scss";

interface IProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function AppLayout({ children, params: { locale } }: IProps) {
  return (
    <section className={s.layout}>
      <Sidebar />
      <div className={s.content}>{children}</div>
    </section>
  );
}
