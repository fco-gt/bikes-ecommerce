"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { title } from "@/components/primitives";

export default function Page() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <div className="flex flex-col mb-[25%] text-center">
        <h2 className={title({ size: "md", color: "blue" })}>
          Bienvenido {session?.user?.name}
        </h2>
        <p className="mt-5">
          Utiliza la barra de navegacion para moverte entre las paginas
        </p>
      </div>
    </div>
  );
}
