import { getUserById } from "@/actions/get-user";
import NextAuth from "next-auth/next";
import { authOptions } from "./options";

enum Role {
    Admin,
    User,
  }
  
  export const handler = NextAuth({

    events: {
      async linkAccount({ user }) {
        console.log("user", user);
        //   await db.user.update({
        //     where: { id: user.id },
        //     data: { emailVerified: new Date() }
        //   })
      },
    },
    callbacks: {
      async signIn({ user, account }) {
        if (account?.provider !== "credentials") return true;
  
        return true;
      },
      async session({ token, session, user }) {
        if (token.sub && session.user) {
          session.user.id = token.sub;
        }
  
        if (token.role && session.user) {
          session.user.role = token.role as Role;
        }
  
        if (session.user) {
          session.user.name = token.name;
          session.user.email = token.email;
        }
  
        return session;
      },
      async jwt({ token }) {
        if (!token.sub) return token;
  
        const existingUser = await getUserById(token.sub);
  
        if (!existingUser) return token;
  
        token.name = existingUser.name;
        token.email = existingUser.email;
        token.role = existingUser.role;
  
        return token;
      },
    },
    session: { strategy: "jwt" },
    ...authOptions,
  });

export { handler as GET, handler as POST };

