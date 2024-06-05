import React, { useId } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { MdClear } from "react-icons/md";
import "@/components/Cart.css";

import { useCart } from "@/hooks/useCart";

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

function CartItem({
  name,
  price,
  imageUrl,
  quantity,
  addToCart,
}: {
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
  addToCart: () => void;
}) {
  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <strong>{name}</strong> - ${price}
      </div>

      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
}

export function Cart() {
  const cartId = useId();
  const { cart, clearCart, addToCart } = useCart();

  return (
    <>
      <label className="cart-button" htmlFor={cartId}>
        <CiShoppingCart size={35} />
      </label>
      <input id={cartId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {cart.map((product: CartItemProps) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>
        <button>
          <MdClear size={25} />
        </button>
      </aside>
    </>
  );
}
