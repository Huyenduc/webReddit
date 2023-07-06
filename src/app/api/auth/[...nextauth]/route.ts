import { authOption } from "@/lib/auth";
import NextAuth from "next-auth/next";

const hander = NextAuth(authOption);

export { hander as GET, hander as POST };