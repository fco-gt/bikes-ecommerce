"use client";

import React from "react";
import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";

import { MoonIcon } from "./icons/MoonIcon";
import { SunIcon } from "./icons/SunIcon";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [isSelected, setIsSelected] = React.useState(true);

  const onChange = (selected: boolean) => {
    if (selected) {
        setTheme("dark");
    } else {
        setTheme("light");
    }
  };

  onChange(isSelected);

  return (
    <Switch
      defaultSelected
      size="lg"
      color="primary"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      isSelected={isSelected}
      onValueChange={setIsSelected}
    >
    </Switch>
  );
}
