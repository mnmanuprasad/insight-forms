import { AuthOptions, Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";


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
        try {
          const userExist = await db
            .select()
            .from(users)
            .where(eq(users.email, user.email as string));

          if (userExist.length == 0) {
            await db
              .insert(users)
              .values({ name: user.name, email: user.email });
          }
          return true;
        } catch (error) {
          return "/unauthorized";
        }
      }
      return "/unauthorized";
    },
    async jwt({token, account, profile}) {
        if(profile?.email){
          const userDetails = await db
            .select()
            .from(users)
            .where(eq(users.email, profile.email));
            
            token.userId = userDetails[0].id
        }
    
        return token
    },
    async session({session, token}){
      if(session.user){
        // @ts-ignore
        session.user.userId = token.userId
      }
      return session
    }
  },
};
