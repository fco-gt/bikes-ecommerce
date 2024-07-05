"use client";
import React, { useEffect, useState } from "react";
import { title } from "./primitives";

// Api
import bikesApi from "@/services/bikes";

// Utils
import { Bike } from "@/types/bikes";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";

export default function PopularProducts() {
  const [bikes, setBikes] = useState<Bike[]>([]);
  const [popularBikes, setPopularBikes] = useState<Bike[]>([]);

  const formatNumberToCLP = (number: number): string => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
    }).format(number);
  };

  useEffect(() => {
    bikesApi.getBikes().then((bikes) => {
      setBikes(bikes.data);
    });
  }, []);

  useEffect(() => {
    // For testin, select the first 9 bikes
    setPopularBikes(bikes.slice(0, 4));
  }, [bikes]);

  return (
    <section className="flex flex-col items-center justify-center text-center mt-28">
      <h3
        className={`${title({
          size: "lg",
        })} font-biker text-opacity`}
      >
        Mas comprados
      </h3>

      <div>
        {popularBikes.length === 0 ? (
          <p>No se han encontrado productos</p>
        ) : (
          <article className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">
            {popularBikes.map((bike) => (
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
                <CardFooter className="flex-col justify-center">
                  <b>{bike.name}</b>
                  <p>{formatNumberToCLP(bike.price)}</p>
                </CardFooter>
              </Card>
            ))}
          </article>
        )}
      </div>
    </section>
  );
}
