"use client";
import React, { useState } from "react";
import Select, { SingleValue, StylesConfig } from "react-select";
import "./custom.css";

// Option type define
interface OptionType {
  value: string;
  label: string;
}

// Options array
const options: OptionType[] = [
  { value: "english", label: "English" },
  { value: "bangla", label: "Bangla" },
  { value: "french", label: "French" },
  { value: "hindi", label: "Hindi" },
];

const LanguageSelect: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<SingleValue<OptionType>>(options[0]);

  // custom styles type
  const customStyles: StylesConfig<OptionType, false> = {
    control: (base) => ({
      ...base,
      backgroundColor: "#171d24",
      borderColor: "#171d24",
      color: "#fff",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#171d24",
      },
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? "#131417"
        : state.isFocused
        ? "#131417"
        : "#2c303a",
    focus: "none",
      color: state.isSelected ? "white" : "#c3c3c3",
      "&:hover": {
        color: "white",
      },
      cursor: "pointer",
    }),
    singleValue: (base) => ({
      ...base,
      color: "#fff",
    }),
  };

  return (
    <Select<OptionType, false>
      value={selectedOption}
      onChange={setSelectedOption}
      options={options}
      menuPlacement="auto"
      className="language-select"
      classNamePrefix="custom"
      styles={customStyles}
    />
  );
};

export default LanguageSelect;
