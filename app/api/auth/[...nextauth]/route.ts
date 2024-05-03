import { authApi } from "@/5-entities/auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { type: "text" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const res = await authApi.login(credentials);

          return {
            email: res.email,
            name: `${res.first_name} ${res.last_name}`,
            id: String(res.user_id),
          };
        } catch (e) {
          return null;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
