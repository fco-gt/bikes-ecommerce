"use client";

import { Button } from "@nextui-org/button";
import { Image, Input } from "@nextui-org/react";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState(""); // [1
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const validateName = (value: string) => value.length > 0;

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const validatePassword = (value: string) =>
    value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{8,}$/);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const isInvalidName = useMemo(() => {
    return validateName(name) ? false : true;
  }, [name]);

  const isInvalidMail = useMemo(() => {
    if (email === "") return false;
    return validateEmail(email) ? false : true;
  }, [email]);

  const isInvalidPassword = useMemo(() => {
    if (password === "") return false;
    return validatePassword(password) ? false : true;
  }, [password]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (isInvalidName || isInvalidMail || isInvalidPassword) {
      setError("Por favor, completa todos los campos correctamente.");
      return;
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      alert("Registro exitoso. Ahora puedes iniciar sesión.");
    } catch (error: any) {
      setError(error.message || "Error en el registro");
    }
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
            Registrate usando tu correo
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <Input
            isRequired
            value={name}
            isInvalid={isInvalidName}
            onValueChange={setName}
            type="text"
            label="Nombre"
            color={isInvalidName ? "danger" : "success"}
            className="max-w-full mb-5"
            size="sm"
            variant="underlined"
            startContent={<FaRegUser size={19} />}
          />
          <Input
            type="text"
            label="Apellidos"
            className="max-w-full mb-5"
            size="sm"
            variant="underlined"
          />
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
            isInvalid={isInvalidPassword}
            onValueChange={setPassword}
            type={showPassword ? "text" : "password"}
            label="Contraseña"
            color={isInvalidPassword ? "danger" : "success"}
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
            errorMessage={
              isInvalidPassword &&
              "La contraseña debe contener al menos 8 caracteres, una letra mayuscula, un numero y un caracter especial."
            }
          />
          {error && (
            <div className="text-red-500 text-center mb-4">{error}</div>
          )}
          <div className="text-center md:text-left">
            <Button
              className="mt-4 bg-[#238991] px-5 py-2 text-white uppercase rounded text-xs tracking-wider hover:scale-105 hover:brightness-125"
              type="submit"
            >
              Registrarse
            </Button>
          </div>
        </form>
        <div className="mt-5 font-semibold text-sm text-slate-500 text-center md:text-left">
          ¿Ya tienes cuenta?
          <Link className="text-[#238991] ml-1" href="/login">
            Iniciar sesion
          </Link>
        </div>
      </div>
    </section>
  );
}
