import { useCart } from "@/hooks/useCart";
import "./Footer.css";

export function FooterDev() {
  // const { filters } = useFilters()
  const { cart } = useCart();

  return (
    <footer className="footer">
        {
            JSON.stringify(cart, null, 2)
        }
    </footer>
  );
}
