import { authApi } from "@/5-entities/auth";
import { redirect } from "@/6-shared/lib/i18n";

export default async function RootPage() {
  const res = await authApi.me();

  if (!res) {
    redirect(`/login`);
    return;
  }

  redirect(`/home`);
}
