import { productos } from "@/config/productos-catalogo";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function ProductList() {
  const formatNumberToCLP = (number: number): string => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
    }).format(number);
  };

  return (
    <div className="grid grid-cols-2 gap-5 mt-5 md:ml-[113px]">
      {productos.map((product) => (
        <Card
          shadow="sm"
          key={product.id}
          isPressable
          onPress={() => console.log("Item pressed")}
        >
          <CardBody className="overflow-visible p-5">
            <Image
              width="100%"
              alt={product.name}
              className="w-[370px] object-contain h-[95px] md:h-[350px]"
              src={`/imgs/catalog/${product.id}.png`}
            ></Image>
          </CardBody>
          <CardFooter className="text-small flex-col justify-center">
            <b className="text-xl">{product.name}</b>
            <p className="text-default-500 text-lg">
              {formatNumberToCLP(product.price)}
            </p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
