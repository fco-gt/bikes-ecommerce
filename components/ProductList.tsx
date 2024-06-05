import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Pagination,
  Spinner,
} from "@nextui-org/react";
import Link from "next/link";

import { Bike } from "@/types/bikes";

export default function ProductList({ products }: { products: Bike[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const bikesToShow = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const formatNumberToCLP = (number: number): string => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
    }).format(number);
  };

  return (
    <section className="flex flex-col">
      {bikesToShow.length === 0 ? (
        <div className="flex flex-col justify-center items-center mr-52 mt-28">
          <Spinner color="primary" size="lg" />
          <p>No se han encontrado productos</p>
        </div>
      ) : (
        <article className="grid grid-cols-2 gap-5 mt-5 md:ml-[113px]">
          {bikesToShow.map((bike) => (
            <Card
              key={bike.id}
              shadow="sm"
              isPressable
              as={Link}
              href={`/productos/${bike.id}`}
            >
              <CardBody className="overflow-visible p-5">
                <Image
                  width="100%"
                  alt={bike.name}
                  className="w-[370px] object-contain h-[95px] md:h-[250px]"
                  src={bike.imageUrl}
                ></Image>
              </CardBody>
              <CardFooter className="text-samll flex-col justify-center">
                <b>{bike.name}</b>
                <p>{formatNumberToCLP(bike.price)}</p>
              </CardFooter>
            </Card>
          ))}
        </article>
      )}

      <div className="flex flex-row justify-end items-end mt-9">
        <Pagination
          showControls
          total={Math.ceil(products.length / itemsPerPage)}
          initialPage={1}
          onChange={(newPage) => setCurrentPage(newPage)}
        />
      </div>
    </section>
  );
}
