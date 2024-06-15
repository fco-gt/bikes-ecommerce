import NextAuth, {
  NextAuthOptions,
  User as NextAuthUser,
  Session,
} from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connect } from "@/lib/db";
import UserModel from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

interface Credentials {
  email: string;
  password: string;
}

interface User extends Omit<NextAuthUser, "id"> {
  role?: string;
  id: string;
}

interface Token extends JWT {
  role?: string;
  id?: string;
}

interface SessionWithRole extends Session {
  user: {
    role?: string;
    id?: string;
  } & Session["user"];
}

const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: { label: "Correo", type: "email" },
        password: { label: "Contraseña", type: "password" },
      },
      async authorize(
        credentials: Record<string, any> | undefined,
        res: NextRequest
      ) {
        if (!credentials) {
          return NextResponse.json(
            { message: "Credenciales no proporcionadas" },
            { status: 400 }
          );
        }

        const { email, password } = credentials as Credentials;

        await connect();

        const user = await UserModel.findOne({ email });

        if (!user)
          return NextResponse.json(
            { message: "Usuario no encontrado" },
            { status: 404 }
          );

        const passwordValid = await user.comparePassword(password);

        if (!passwordValid)
          return NextResponse.json(
            { message: "Contraseña incorrecta" },
            { status: 401 }
          );

        return {
          name: user.name,
          email: user.email,
          role: user.role,
          id: user._id.toString(),
        } as User;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      const userWithRole = user as User;
      if (userWithRole?.role) {
        token.role = userWithRole.role;
        token.id = userWithRole.id;
      }
      return token;
    },
    session({ session, token }) {
      const sessionWithRole = session as SessionWithRole;
      if (sessionWithRole.user) {
        if (typeof token.id === "string") {
          sessionWithRole.user.id = token.id;
        }
        if (typeof token.role === "string") {
          sessionWithRole.user.role = token.role;
        }
      }
      return sessionWithRole;
    },
  },
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
