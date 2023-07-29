import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_NEXT_APP_GITHUB_ID,
      clientSecret: process.env.NEXT_PUBLIC_NEXT_APP_GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_NEXT_APP_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_NEXT_APP_GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

// console.log(process.env.NEXT_PUBLIC_NEXT_APP_GITHUB_SECRET);

export default NextAuth(authOptions);
