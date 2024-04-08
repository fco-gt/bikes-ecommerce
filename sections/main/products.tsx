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
        <p className="text-center">¿Que tipo de producto estás buscando?</p>
        <div className="text-[#26BCC6] flex items-center justify-center text-center">
          <Link href="/catalogo" className="mr-2 link-hover">
            Ver más
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
              src="/imgs/slider/bmx-1.png"
            />
          </CardBody>
          <CardFooter className="flex items-center justify-center">
            <p className="text-center">BMX</p>
          </CardFooter>
        </Card>

        <Card className="py-5" isPressable>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card Image"
              className="object-cover"
              src="/imgs/slider/bmx-1.png"
            />
          </CardBody>
          <CardFooter className="flex items-center justify-center">
            <p className="text-center">BMX</p>
          </CardFooter>
        </Card>

        <Card className="py-5" isPressable>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card Image"
              className="object-cover"
              src="/imgs/slider/bmx-1.png"
            />
          </CardBody>
          <CardFooter className="flex items-center justify-center">
            <p className="text-center">BMX</p>
          </CardFooter>
        </Card>
      </section>
    </>
  );
}
