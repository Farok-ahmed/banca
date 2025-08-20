"use client";
import { useTheme } from "@/contextAPi/ThemeContext";
import React from "react";
import Select from "react-select";
import { OptionTypes } from ".";


const LoanTypeSelect = ({options}: {options: OptionTypes[]}) => {
  const { theme } = useTheme();
  const isLightTheme = theme === "light";

  return (
    <Select
      options={options}
      styles={{
        container: (base) => ({
          ...base,
          position: "inherit",
          border: "none",
        }),
        control: (base, state) => ({
          ...base,
          backgroundColor: isLightTheme
            ? state.isFocused
              ? "#f9f9f9"
              : "#fff"
            : "#2c303a",
          border: "none",
          color: isLightTheme ? "#000" : "#fff",
          boxShadow: "none",
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
        menu: (base) => ({
          ...base,
          zIndex: 1000,
          width: "100%",
          top: "100%",
          left: 0,
        }),
        singleValue: (base) => ({
          ...base,
          color: isLightTheme ? "#000" : "#fff",
        }),
        menuList: (base) => {
          return {
            ...base,
            zIndex: 1000,
            padding: 0,
          };
        },
      }}
    />
  );
};

export default LoanTypeSelect;
