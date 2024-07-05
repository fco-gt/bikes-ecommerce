"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { GiCardboardBoxClosed } from "react-icons/gi";
import {
  MdCreateNewFolder,
  MdCreate,
  MdOutlineFormatListBulleted,
} from "react-icons/md";

export default function SidebarDashboard() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col fixed h-[90%] w-[250px] md:w-[315px] mw-[90%] bottom-0 left-0 overflow-hidden shadow-md rounded-r-xl rounded-t-xl border-t-1 border-r-1 bg-[#1A171A] border-[#5E5E5E]">
      <div className="flex flex-row text-[25px] items-center ml-5 mt-9 gap-2">
        {<GiCardboardBoxClosed size={35} />}
        <strong>Gestión de Productos</strong>
      </div>
      <nav className="flex flex-col gap-2 mt-5 font-light">
        <Link href="/dashboard/new-product">
          <div
            className={`flex flex-row gap-2 py-2 pl-11 hover:bg-[#272727] transition ease-in hover:translate-x-1 rounded-lg
                  ${pathname === "/dashboard/new-product" ? "bg-[#252525]" : ""}
                  `}
          >
            <MdCreateNewFolder size={25} />
            <span>Crear Producto</span>
          </div>
        </Link>
        <Link href="/dashboard/products">
          <div
            className={`flex flex-row gap-2 py-2 pl-11 hover:bg-[#272727] transition ease-in hover:translate-x-1 rounded-lg
                  ${pathname === "/dashboard/products" ? "bg-[#252525]" : ""}
                  `}
          >
            <MdOutlineFormatListBulleted size={25} />
            <span>Productos</span>
          </div>
        </Link>
      </nav>
    </aside>
  );
}
