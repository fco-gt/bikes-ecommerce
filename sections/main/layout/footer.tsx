import React from "react";

import { Divider } from "@nextui-org/react";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-divider">
          <Divider className="divider" />
          <p className="text-center">
            COPYRIGHT © 2024 Master Bikes. Algunos derechos reservados
          </p>
        </div>
      </footer>
    </>
  );
}
