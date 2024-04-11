"use client";
import React from "react";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

export default function ProductbreadCrums({ name }: { name: string }) {
  return (
    <div>
      <Breadcrumbs>
        <BreadcrumbItem href="/productos">Productos</BreadcrumbItem>
        <BreadcrumbItem>{name}</BreadcrumbItem>
      </Breadcrumbs>
    </div>
  );
}
