import { title } from "@/components/primitives";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import Link from "next/link";

import { FaLongArrowAltRight } from "react-icons/fa";

export default function Products() {
  return (
    <>
      <section className="productos text-center">
        <h3
          className={`${title({
            size: "lg",
          })} font-biker text-opacity`}
        >
          Productos
        </h3>
        <p className="text-center">
          ¿Que tipo de producto o servicio estás buscando?
        </p>
        <div className="text-[#26BCC6] flex items-center justify-center text-center">
          <Link href="/productos" className="mr-2 link-hover">
            Ver catalogo completo
          </Link>
          <FaLongArrowAltRight size={15} />
        </div>
      </section>

      <section className="products mt-5">
        <Card
          className="py-5 transition hover:scale-105 hover:brightness-125"
          isPressable
        >
          <CardBody className="overflow-visible h-full w-full py-2">
            <Image
              alt="Card Image"
              className="h-full w-full rounded object-cover"
              src="/imgs/products/mb-pic.jpg"
            />
          </CardBody>
          <CardFooter className="flex items-center justify-center">
            <p className="text-center">Bicicletas</p>
          </CardFooter>
        </Card>

        <Card
          className="py-5 transition hover:scale-105 hover:brightness-125"
          isPressable
        >
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card Image"
              className="h-full w-full rounded object-cover"
              src="/imgs/products/arriendo-pic.jpg"
            />
          </CardBody>
          <CardFooter className="flex items-center justify-center">
            <p className="text-center">Arriendos</p>
          </CardFooter>
        </Card>

        <Card
          className="py-5 transition hover:scale-105 hover:brightness-125"
          isPressable
        >
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card Image"
              className="h-full w-full rounded object-cover"
              src="/imgs/products/mantencion-pic.jpg"
            />
          </CardBody>
          <CardFooter className="flex items-center justify-center">
            <p className="text-center">Mantencion</p>
          </CardFooter>
        </Card>
      </section>
    </>
  );
}
