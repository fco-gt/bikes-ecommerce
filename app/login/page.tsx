"use client";

import React, { useMemo, useState } from "react";
import { Button } from "@nextui-org/button";
import { Image, Input, Checkbox } from "@nextui-org/react";
import Link from "next/link";

import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";

import { signIn } from "next-auth/react";

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const isInvalidMail = useMemo(() => {
    if (email === "") return false;

    return validateEmail(email) ? false : true;
  }, [email]);

  const handleButtonClick = async () => {
    const res = await signIn("credentials", {
      name: "test",
      email,
      password,
      callbackUrl: "/",
    });

    if (res?.error) setError(res.error);
  };

  return (
    <section className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <Image
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
          width={500}
          height={500}
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="flex items-center text-center md:text-left">
          <label className="mr-1">Iniciar sesion con</label>
          <Button
            isIconOnly
            className="mx-1 h-9 w-9  rounded-full bg-[#238991] text-white shadow-[0_4px_9px_-4px_#3b71ca] hover:scale-105 hover:brightness-125"
            onClick={async () => {
              await signIn("google", { callbackUrl: "/" });
            }}
          >
            <FaGoogle size={20} />
          </Button>
          <Button
            isIconOnly
            className="mx-1 h-9 w-9  rounded-full bg-[#238991] text-white shadow-[0_4px_9px_-4px_#3b71ca] hover:scale-105 hover:brightness-125"
          >
            <FaFacebook size={20} />
          </Button>
          <Button
            isIconOnly
            className="inlne-block mx-1 h-9 w-9 rounded-full bg-[#238991] uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] hover:scale-105 hover:brightness-125"
          >
            <FaTwitter size={20} />
          </Button>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            Iniciar sesion con correo
          </p>
        </div>
        <Input
          isRequired
          value={email}
          isInvalid={isInvalidMail}
          onValueChange={setEmail}
          type="email"
          label="Correo"
          color={isInvalidMail ? "danger" : "success"}
          className="max-w-full mb-5"
          size="sm"
          variant="underlined"
          startContent={<MdOutlineMailOutline size={20} />}
          errorMessage={isInvalidMail && "Correo invalido"}
        />

        <Input
          isRequired
          value={password}
          onValueChange={setPassword}
          type={showPassword ? "text" : "password"}
          label="Contraseña"
          className="max-w-full"
          size="sm"
          variant="underlined"
          startContent={<RiLockPasswordLine size={20} />}
          endContent={
            <Button isIconOnly variant="light" onClick={toggleShowPassword}>
              {showPassword ? (
                <IoEyeOutline size={20} />
              ) : (
                <IoEyeOffOutline size={20} />
              )}
            </Button>
          }
        />
        {error && <div className="text-red-500 text-center mt-5">{error}</div>}
        <div className="mt-4 flex justify-between font-semibold text-sm items-center">
          <Checkbox color="primary">
            <strong className="text-[#238991] font-normal">
              Recordar contraseña
            </strong>
          </Checkbox>
          <a className="text-[#238991] font-normal text-[15px]" href="#">
            Olvide mi contraseña
          </a>
        </div>
        <div className="text-center md:text-left">
          <Button
            isDisabled={isInvalidMail || password === ""}
            className="mt-4 bg-[#238991] px-5 py-2 text-white uppercase rounded text-xs tracking-wider hover:scale-105 hover:brightness-125"
            onClick={handleButtonClick}
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
