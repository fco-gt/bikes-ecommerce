"use client";
import React, { useState } from "react";
import axios from "axios";

export default function Page() {
  const [file, setFile] = useState<File | undefined>(undefined);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number | string>(0);
  const [category, setCategory] = useState<string>("N/A");
  const [age, setAge] = useState<string>("N/A");
  const [stock, setStock] = useState<number | string>(0);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(file);

    const formData = new FormData();
    if (file) {
      formData.append("imageUrl", file);
    }
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", String(price));
    formData.append("category", category);
    formData.append("age", age);
    formData.append("stock", String(stock));

    try {
      const response = await axios.post(
        "http://localhost:8000/api/products/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen"></div>
  );
}
