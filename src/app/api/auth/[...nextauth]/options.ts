import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/sign-in",
    signOut: "/sign-out",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (user) {
        return true;
      }
      return '/unauthorized';
    },
  },
};
