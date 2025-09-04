"use client";
import { useTheme } from "@/contextAPi/ThemeContext";
import React, { useState } from "react";
import Select, { SingleValue } from "react-select";
import { OptionType } from "./type";
const FormSelect = ({ options,name="" }: { options: OptionType[], name: string }) => {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(
    options[0]
  );
  const { theme } = useTheme();
  const isLightTheme = theme === "light";

  return (
    <Select<OptionType>
      value={selectedOption}
      onChange={(option: SingleValue<OptionType>) => setSelectedOption(option)}
      instanceId="form-select"
      classNamePrefix="custom-select"
      options={options}
      name={name}
      styles={{
        control: (base, state) => ({
          ...base,
          backgroundColor: isLightTheme
            ? state.isFocused
              ? "#f9f9f9"
              : "#f2f2f2"
            : "#2c303a",
          borderColor: isLightTheme
            ? state.isFocused
              ? "#f2f2f2"
              : "#f2f2f2"
            : "#494949",
          padding: "0.5rem",
          color: isLightTheme ? "#000" : "#fff",
          boxShadow: "none",
          "&:hover": {
            borderColor: isLightTheme ? "#f2f2f2" : "#494949",
          },
        }),
        option: (base, state) => ({
          ...base,
          backgroundColor: isLightTheme
            ? state.isSelected
              ? "#e6e6e6"
              : state.isFocused
              ? "#f2f2f2"
              : "#fff"
            : state.isSelected
            ? "#131417"
            : state.isFocused
            ? "#131417"
            : "#2c303a",
          color: isLightTheme ? "#000" : state.isSelected ? "#fff" : "#c3c3c3",
          cursor: "pointer",
        }),
        indicatorSeparator: (base) => ({
          ...base,
          width:0,
        }),
        singleValue: (base) => ({
          ...base,
          color: isLightTheme ? "#000" : "#fff",
        }),
        menuList: (base) => ({
          ...base,
          padding: "0",
        }),
      }}
    />
  );
};

export default FormSelect;
