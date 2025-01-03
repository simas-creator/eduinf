import NextAuth, { CredentialsSignin } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import connect from "@/lib/mongodb";
import { User } from "@/lib/modals/user";
import { compare } from "bcryptjs";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "El.paštas", type: "email" },
        password: {  label: "Slaptažodis", type: "password" }
      },
      authorize: async (credentials) => {
        const email = credentials.email as string | undefined;
        const password = credentials.password as string | undefined;
        if (!email || !password) {
          throw new CredentialsSignin("Įveskite visus duomenis");
        }
        await connect();

        const user = await User.findOne({ email }).select("+password +role")
        if (!user) {
          throw new CredentialsSignin("Neteisingas el. paštas arba slaptažodis");
        }
        if(!user.password) {
          throw new CredentialsSignin("Neteisingas slaptažodis");
        }
        const isValid = await compare(password, user.password);
        if (!isValid) {
          throw new CredentialsSignin("Neteisingas slaptažodis");
        }
        const userData = {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          role: user.role,
          id: user._id
        };
        return userData;
      },
    }),
  ],
  pages: {
    signIn: "/prisijungti"
  }
});