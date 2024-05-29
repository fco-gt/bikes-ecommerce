import React from "react";

import { Divider } from "@nextui-org/react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-divider">
          <Divider className="divider" />
          <p className="text-center">
            COPYRIGHT © 2024 Master Bikes. Algunos derechos reservados
          </p>
          <p>
            POWERED BY{" "}
            <Link href="https://bikes-api.onrender.com/" target="_blank">
              GT-Bikes API REST
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}
