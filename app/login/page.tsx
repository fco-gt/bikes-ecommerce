// src/Components/Login.js
import { Button } from "@nextui-org/button";
import Link from "next/link";
import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";

export default function Page() {
  return (
    <section className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="flex items-center text-center md:text-left">
          <label className="mr-1">Iniciar sesion con</label>
          <Button
            isIconOnly
            className="mx-1 h-9 w-9  rounded-full bg-[#238991] text-white shadow-[0_4px_9px_-4px_#3b71ca] hover:scale-105 hover:brightness-125"
          >
            <BiLogoFacebook
              size={20}
              className="flex justify-center items-center w-full"
            />
          </Button>
          <Button
            isIconOnly
            className="inlne-block mx-1 h-9 w-9 rounded-full bg-[#238991] uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] hover:scale-105 hover:brightness-125"
          >
            <AiOutlineTwitter
              size={20}
              className="flex justify-center items-center w-full"
            />
          </Button>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            Iniciar sesion con correo
          </p>
        </div>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          placeholder="Correo"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Contraseña"
        />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Recordarme</span>
          </label>
          <a className="text-[#238991]" href="#">
            Olvide mi contraseña
          </a>
        </div>
        <div className="text-center md:text-left">
          <Button
            className="mt-4 bg-[#238991] px-5 py-2 text-white uppercase rounded text-xs tracking-wider hover:scale-105 hover:brightness-125"
            type="submit"
          >
            Iniciar Sesion
          </Button>
        </div>
        <div className="mt-5 font-semibold text-sm text-slate-500 text-center md:text-left">
          ¿No tienes una cuenta?
          <Link className="text-[#238991] ml-1" href="/register">
            Registrarse
          </Link>
        </div>
      </div>
    </section>
  );
}
