import { getUserByEmail } from "@/actions/get-user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "../../../../../schemas";

export const authOptions = {
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID || "",
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    // }),
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
          const validatedFields = LoginSchema.safeParse(credentials);

          if (validatedFields.success) {
              const { email, password } = validatedFields.data;

              const user = await getUserByEmail(email);
              if (!user || !user.password) return null;

              const passwordsMatch = await bcrypt.compare(password, user.password);

              if (passwordsMatch) return user;
          }

          return null;
      },
  }),
  ],
  secret: process.env.NEXT_AUTH_SECRET,
  jwt: {
    async encode({ secret, token }) {
      return jwt.sign(token, secret)
    },
    async decode({ secret, token }) {
      return jwt.verify(token, secret)
    },
  },
} satisfies NextAuthConfig;
