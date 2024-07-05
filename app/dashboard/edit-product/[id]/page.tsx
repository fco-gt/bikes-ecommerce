"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import axios from "axios";

// API
import crud from "@/services/crud";

import { MdOutlineFileDownload } from "react-icons/md";
import { Bike } from "@/types/bikes";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";

export default function Page() {
  // Get the bike id from the URL
  const { id } = useParams<{ id: string }>();

  const [bike, setBike] = useState<Bike | null>(null);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [stock, setStock] = useState<string>("");
  const [size, setSize] = useState<string>("N/A");
  const [type, setType] = useState<string>("N/A");
  const [fileName, setFileName] = useState<string>("");
  const [file, setFile] = useState<File | undefined>(undefined);

  // Fetch the bike data
  useEffect(() => {
    crud.getProduct(id).then((response) => {
      setBike(response.data);
    });
  }, [id]);

  // Set the bike data to the state
  useEffect(() => {
    if (!bike) {
      return;
    }

    setName(bike.name);
    setDescription(bike.description);
    setPrice(bike.price.toString());
    setStock(bike.stock.toString());
    setSize(bike.age);
    setType(bike.category);
    setFileName(bike.imageUrl);
  }, [bike]);

  const handle = (e: ChangeEvent<HTMLSelectElement>) => {
    if (!e.target.value) {
      setSize("");
      return;
    }

    setSize(e.target.value);
  };

  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (!e.target.value) {
      setType("");
      return;
    }

    setType(e.target.value);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) {
      return;
    }

    setFileName(selectedFile.name);
    setFile(selectedFile);
  };

  const triggerFileInput = () => {
    document.getElementById("file")?.click();
  };

  const handleSubmit = async () => {
    const formData = new FormData();

    /*
    if (file) {
      formData.append("imageUrl", file);
    }
      */

    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("age", size);
    formData.append("category", type);
    formData.append("imageUrl", fileName);

    try {
      const response = await crud.updateProduct(id, formData);

      toast.success("Producto actualizado correctamente", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      console.log(error);

      toast.error("Error al actualizar el producto", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div className="flex flex-col gap-5 justify-between items-center h-screen w-screen">
      <div className="flex flex-col items-center justify-center w-[90%] h-[90%] rounded-lg border-1 border-[#5E5E5E]">
        <div className="w-[90%] h-[90%] grid grid-cols-2 grid-rows-5 gap-9 items-center">
          <Input
            value={name}
            onValueChange={setName}
            type="text"
            variant="bordered"
            label="Nombre"
            className="col-start-1 col-end-2 row-start-1 row-end-2 ml-2"
          />

          <Select
            label="Talla"
            variant="bordered"
            selectedKeys={[size]}
            className="col-start-2 col-end-3 row-start-1 row-end-2 mr-[15px]"
            onChange={handle}
            id={size}
          >
            <SelectItem key="child" value="child">
              Niño
            </SelectItem>
            <SelectItem key="adult" value="adult">
              Adulto
            </SelectItem>
          </Select>

          <Textarea
            value={description}
            onValueChange={setDescription}
            label="Descripcion"
            variant="bordered"
            disableAnimation
            disableAutosize
            classNames={{
              base: "col-start-1 col-end-3 row-start-2 row-end-4 mx-2",
              input: "resize-y min-h-[40px]",
            }}
          />
          <Input
            value={price}
            onValueChange={setPrice}
            type="number"
            variant="bordered"
            label="Precio"
            className="col-start-1 col-end-2 row-start-4 row-end-5 mx-2"
          />
          <Select
            label="Tipo de bicicleta"
            variant="bordered"
            placeholder="Selecciona el tipo de bicicleta"
            selectedKeys={[type]}
            className="col-start-2 col-end-3 row-start-4 row-end-5 mx-2"
            onChange={handleTypeChange}
          >
            <SelectItem key="mountain" value="mountain">
              Montaña
            </SelectItem>
            <SelectItem key="road" value="road">
              Paseo
            </SelectItem>
            <SelectItem key="urban" value="urban">
              Urbana
            </SelectItem>
            <SelectItem key="electric" value="electric">
              Eléctrica
            </SelectItem>
            <SelectItem key="tricicle" value="tricicle">
              Triciclo
            </SelectItem>
          </Select>
          <Input
            value={stock}
            onValueChange={setStock}
            type="number"
            variant="bordered"
            label="Stock"
            className="col-start-1 col-end-2 row-start-5 row-end-6 mx-2"
          />
          <Input
            value={fileName}
            onValueChange={setFileName}
            type="string"
            variant="bordered"
            label="URL de la imagen"
            className="col-start-2 col-end-3 row-start-5 row-end-6 mx-2"
          />
          {/*
          <div className="flex flex-row items-center col-start-2 col-end-3 row-start-5 row-end-6 rounded-lg border-2 border-[#414141] h-[45%] mx-2">
            <label
              htmlFor="file"
              className="flex justify-between items-center cursor-pointer text-gray-500 w-full mx-5"
            >
              <span>{file ? fileName : "Seleccione la imagen"}</span>
              <Button isIconOnly variant="flat" onClick={triggerFileInput}>
                <MdOutlineFileDownload size={25} />
              </Button>
            </label>
            <input
              type="file"
              id="file"
              className="hidden"
              onChange={handleFileChange}
              accept="image/*"
            />
          </div>

         */}
        </div>

        <div className="flex flex-row-reverse w-full gap-9">
          <Button
            onClick={handleSubmit}
            size="lg"
            variant="bordered"
            className="w-[155px] mr-[59px]"
          >
            Actualizar
          </Button>
        </div>
      </div>
    </div>
  );
}
