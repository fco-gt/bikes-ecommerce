import React from "react";
import { Slider } from "@nextui-org/react";

export default function PriceSlider() {
  return (
    <Slider
      label="Rango de precio"
      step={10000}
      maxValue={500000}
      minValue={15000}
      defaultValue={[15000, 250000]}
      showSteps={false}
      showTooltip={true}
      showOutline={true}
      disableThumbScale={true}
      formatOptions={{ style: "currency", currency: "CLP" }}
      tooltipValueFormatOptions={{
        style: "currency",
        currency: "CLP",
        maximumFractionDigits: 0,
      }}
      classNames={{
        base: "max-w-md mr-5 md:mr-0",
        filler: "bg-gradient-to-r from-primary-500 to-secondary-400",
        labelWrapper: "mb-2",
        label: "font-medium text-default-700 text-medium",
        value: "font-medium text-default-500 text-small",
        thumb: [
          "transition-size",
          "bg-gradient-to-r from-secondary-400 to-primary-500",
          "data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20",
          "data-[dragging=true]:w-7 data-[dragging=true]:h-7 data-[dragging=true]:after:h-6 data-[dragging=true]:after:w-6",
        ],
        step: "data-[in-range=true]:bg-black/30 dark:data-[in-range=true]:bg-white/50",
      }}
      tooltipProps={{
        offset: 10,
        placement: "bottom",
        classNames: {
          base: [
            // arrow color
            "before:bg-gradient-to-r before:from-secondary-400 before:to-primary-500",
          ],
          content: [
            "py-2 shadow-xl",
            "text-white bg-gradient-to-r from-secondary-400 to-primary-500",
          ],
        },
      }}
    />
  );
}
