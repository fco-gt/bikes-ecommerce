"use client";

import {
  Button,
  Divider,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Image,
} from "@nextui-org/react";
import { useState, useEffect } from "react";
import PageBreadCrums from "@/components/breadCrums";

import { FaExclamation, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

import bikes from "@/services/bikes";
import { Bike } from "@/types/bikes";
import { useCart } from "@/hooks/useCart";

export default function Page({ params }: { params: { id: string } }) {
  const { addToCart } = useCart();
  const [producto, setProducto] = useState<any | null>(null);
  const [selectedButton, setSelectedButton] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [count, setCount] = useState(1);

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  const id = parseInt(params.id);

  useEffect(() => {
    bikes.getBikes().then((bike) => {
      const producto: Bike = bike.data.find((bike: Bike) => bike.id === id);
      setProducto(producto);
    });
  }, [id]);

  const formatNumberToCLP = (number: number): string => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
    }).format(number);
  };

  return (
    <div className="mt-0 md:mt-9">
      {producto && <PageBreadCrums name={producto.name} />}

      <Divider className="mt-5" />

      <article className="mt-11 flex flex-col md:flex-row">
        <div className="flex-1">
          <Image
            src={producto?.imageUrl}
            alt={producto?.name}
            width={500}
            height={500}
          />

          <p className="flex flex-row items-center gap-x-1 mt-5">
            Compartir:{" "}
            <Button isIconOnly variant="light">
              <FaFacebook size={35} />
            </Button>
            <Button isIconOnly variant="light">
              <FaInstagram size={35} />
            </Button>
            <Button isIconOnly variant="light">
              <RiTwitterXLine size={35} />
            </Button>
          </p>
        </div>

        <div className="flex flex-col max-w-lg w-full">
          <div className="ml-[83%]">
            <Button isIconOnly onPress={onOpen}>
              <FaExclamation />
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      {producto?.name}
                    </ModalHeader>
                    <ModalBody>
                      <p>{producto?.description}</p>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Cerrar
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
          <h2 className="text-[45px]">{producto?.name}</h2>
          <p className="text-[39px]">
            CLP {formatNumberToCLP(producto?.price)}
          </p>
          <div className="flex items-center">
            <p className="text-[25px] mr-5 mt-2">Talla: </p>
            <div className="mt-2">
              <Button
                isDisabled={producto?.age === "niño"}
                className={`bg-[#292929] text-white p-3 rounded-md mr-5 w-[95px] transition hover:scale-105 hover:brightness-125 ${
                  selectedButton === "adulto"
                    ? "border-1 border-[#26BCC6]"
                    : " "
                }`}
                onClick={() => handleButtonClick("adulto")}
              >
                Adulto
              </Button>
              <Button
                className={`bg-[#292929] text-white p-3 rounded-md mr-5 w-[95px] transition hover:scale-105 hover:brightness-125 ${
                  selectedButton === "niño" ? "border-1 border-[#26BCC6]" : " "
                }`}
                onClick={() => handleButtonClick("niño")}
              >
                Niño
              </Button>
            </div>
          </div>

          <div className="flex mt-5">
            <p className="flex flex-row items-center mr-5">
              <Button
                isDisabled={count <= 1}
                isIconOnly
                variant="light"
                className="mr-2"
                onPress={() => {
                  setCount(count - 1);
                }}
              >
                <FaMinus />
              </Button>
              {count}
              <Button
                isIconOnly
                variant="light"
                className="ml-2"
                onPress={() => {
                  setCount(count + 1);
                }}
              >
                <FaPlus />
              </Button>
            </p>
            <Button
              isDisabled={selectedButton === ""}
              className="bg-[#292929]"
              onClick={() => {
                addToCart(producto, count);
                setCount(1);
              }}
            >
              Agregar al carrito
            </Button>
          </div>

          <Button className="mt-5 max-w-[195px]">Comprar ahora</Button>
        </div>
      </article>
    </div>
  );
}
