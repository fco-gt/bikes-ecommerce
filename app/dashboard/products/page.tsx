"use client";
import React, { useEffect, useState } from "react";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Tooltip,
  Spinner,
  Image,
} from "@nextui-org/react";

import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";

// API
import crud from "@/services/crud";

import { Bike } from "@/types/bikes";
import { toast } from "react-toastify";

const stockStatusColorMap = {
  isStock: "success",
  noStock: "danger",
  lowStock: "warning",
};

export default function Page() {
  const [bikes, setBikes] = useState<Bike[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    crud.getProducts().then((bikes) => {
      setBikes(bikes.data);
    });
  }, []);

  function handleEdit(id: number) {
    // Redirect to /dashboard/edit-product/:id
    window.location.href = `/dashboard/edit-product/${id}`;
  }

  function handleDel(id: number) {
    // Delete product by id
    crud
      .deleteProduct(id)
      .then(() => {
        toast.success("Producto eliminado con éxito", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        // Update the products list
        crud.getProducts().then((bikes) => {
          setBikes(bikes.data);
        });
      })
      .catch((err) => {
        console.log(err);

        toast.error("Error al eliminar el producto");
      });
  }

  const getStockStatus = (stock: number): keyof typeof stockStatusColorMap => {
    if (stock === 0) return "noStock";
    if (stock <= 10) return "lowStock";
    return "isStock";
  };

  useEffect(() => {
    if (bikes.length > 0) {
      setIsLoading(false);
    }
  }, [bikes]);

  return (
    <div className="flex flex-col gap-5 items-center h-screen w-screen">
      <h3 className="text-[55px] font-biker">Productos</h3>
      <Table
        isHeaderSticky
        color="success"
        selectionMode="single"
        defaultSelectedKeys={["2"]}
        classNames={{
          base: "overflow-x-auto",
        }}
      >
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>Nombre</TableColumn>
          <TableColumn>Precio</TableColumn>
          <TableColumn>Categoria</TableColumn>
          <TableColumn>Talla</TableColumn>
          <TableColumn>Stock</TableColumn>
          <TableColumn>Disponibilidad</TableColumn>
          <TableColumn>Opciones</TableColumn>
        </TableHeader>
        <TableBody
          isLoading={isLoading}
          loadingContent={<Spinner label="Loading..." />}
        >
          {bikes.map((bike) => (
            <TableRow key={bike.id}>
              <TableCell>{bike.id}</TableCell>
              <TableCell className="flex flex-row items-center">
                <Image
                  src={bike.imageUrl}
                  alt={bike.name}
                  height={55}
                  width={55}
                  className="rounded-full max-w-sm max-h-sm"
                />
                <strong className="ml-5">{bike.name}</strong>
              </TableCell>
              <TableCell>{bike.price}</TableCell>
              <TableCell>{bike.category}</TableCell>
              <TableCell>{bike.age}</TableCell>
              <TableCell>
                <span className="flex items-center justify-center">
                  {bike.stock}
                </span>
              </TableCell>
              <TableCell>
                <Chip
                  color={
                    stockStatusColorMap[getStockStatus(bike.stock)] as
                      | "success"
                      | "danger"
                      | "warning"
                      | "default"
                      | "primary"
                      | "secondary"
                      | undefined
                  }
                >
                  {getStockStatus(bike.stock) === "isStock"
                    ? "Disponible"
                    : "" || getStockStatus(bike.stock) === "noStock"
                    ? "No Disponible"
                    : "" || getStockStatus(bike.stock) === "lowStock"
                    ? "Poco Stock"
                    : ""}
                </Chip>
              </TableCell>
              <TableCell>
                <Tooltip content="Details">
                  <div className="relative flex items-center gap-2">
                    <Tooltip content="Editar">
                      <span
                        className="text-lg text-default-400 cursor-pointer active:opacity-50"
                        onClick={() => handleEdit(bike.id)}
                      >
                        <CiEdit />
                      </span>
                    </Tooltip>
                    <Tooltip color="danger" content="Eliminar">
                      <span
                        className="text-lg text-danger cursor-pointer active:opacity-50"
                        onClick={() => handleDel(bike.id)}
                      >
                        <MdOutlineDelete />
                      </span>
                    </Tooltip>
                  </div>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
