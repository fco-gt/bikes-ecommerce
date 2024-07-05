"use client";
import { useSession } from "next-auth/react";

export default function Page() {
  const { data: session } = useSession();

  console.log(session);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Acceso denegado</h2>
        <p className="text-lg text-gray-500">
          No tienes permisos para acceder a esta página.
        </p>
      </div>
    </div>
  );
}
