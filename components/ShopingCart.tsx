"use client";
import React, { useId } from "react";

import { useCartComponent } from "@/hooks/useCartComponent";
import { Button } from "@nextui-org/button";

import { motion, AnimatePresence } from "framer-motion";

import { useCart } from "@/hooks/useCart";
import { Divider, Image } from "@nextui-org/react";

import { FaLongArrowAltRight, FaTrash } from "react-icons/fa";
import Link from "next/link";

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

const formatNumberToCLP = (number: number): string => {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  }).format(number);
};

function CartItem({
  name,
  price,
  imageUrl,
  quantity,
  addToCart,
  removeFromCart,
}: {
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
  addToCart: () => void;
  removeFromCart: () => void;
}) {
  return (
    <li className="mx-5 mb-2">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row justify-center items-center">
          <Image
            src={imageUrl}
            alt={name}
            width={95}
            height={95}
            className="object-contain w-[95px] h-[95px] mw-[95px] mh-[95px] rounded-xl"
          />
          <div className="flex flex-col ml-2">
            <strong>{name}</strong>
            <p>Talla: Adulto</p>
            <p>Cantidad: {quantity}</p>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center">
          <strong>Total: {formatNumberToCLP(price * quantity)}</strong>
          <div className="flex-end">
            <Button isIconOnly variant="light" onClick={removeFromCart}>
              {<FaTrash />}
            </Button>
          </div>
        </div>
      </div>
      <Divider />
    </li>
  );
}

export default function ShopingCart() {
  const { cart, clearCart, addToCart, removeFromCart } = useCart();
  const { cartIsOpen, openCart, closeCart } = useCartComponent();

  const handleButtonClick = () => {
    if (cartIsOpen) {
      closeCart();
    } else {
      openCart();
    }
  };

  const total: number = cart.reduce(
    (acc: number, product: CartItemProps) =>
      acc + product.price * product.quantity,
    0
  );

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        {!cartIsOpen && (
          <motion.aside
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 500, opacity: 0 }}
            className="flex flex-col justify-between fixed h-full w-[350px] md:w-[500px] mw-[90%] top-0 right-0 overflow-hidden z-[9999999] bg-[#272727] shadow-md rounded-l-xl"
          >
            <header className="flex items-center justify-center bg-[#222222] h-20 w-full font-biker text-[32px] rounded-b-xl drop-shadow-sm">
              <h3 className="text-[#26BCC6]">Carrito de Compras</h3>
            </header>

            <main className="overflow-auto w-full mt-5 pb-14">
              <ul className="text-center">
                {cart.length === 0 ? (
                  <div className="flex flex-col">
                    <strong className="font-biker text-[32px] font-extralight">
                      El carrito se encuentra vacío
                    </strong>
                    <Link
                      href={"/productos"}
                      className="items-center justify-center mx-9 text-[#27969e]"
                      onClick={handleButtonClick}
                    >
                      Ver Productos
                    </Link>
                  </div>
                ) : (
                  cart.map((product: CartItemProps) => (
                    <CartItem
                      key={product.id}
                      addToCart={() => addToCart(product)}
                      removeFromCart={() => removeFromCart(product)}
                      {...product}
                    />
                  ))
                )}
              </ul>
            </main>

            <footer className="flex flex-col">
              <div className="flex flex-row items-center justify-between h-[79px] bg-[#222222] mb-5 shadow-sm">
                <p className="text-[25px] ml-5">Subtotal: </p>
                <strong className="mr-5 text-[25px]">
                  {formatNumberToCLP(total)}
                </strong>
              </div>
              <div className="flex flex-col mb-5 mx-5">
                <Button
                  className="mb-2 bg-[#27969e] transition hover:scale-105 hover:brightness-125"
                  size="lg"
                  variant="faded"
                >
                  Finalizar Compra
                </Button>
                <Button
                  className="transition hover:scale-105 hover:brightness-125"
                  size="lg"
                  variant="bordered"
                  onClick={clearCart}
                >
                  Vaciar Carrito
                </Button>
              </div>
              <div className="flex items-center justify-center mx-9">
                <p
                  className="mb-9 text-[15px] cursor-pointer link-hover"
                  onClick={handleButtonClick}
                >
                  Seguir Comprando
                </p>
              </div>
            </footer>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
