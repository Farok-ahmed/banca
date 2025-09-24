"use client";
import React, { useState } from "react";
import Select, { SingleValue, StylesConfig } from "react-select";

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

const LanguageSelectTwo: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<SingleValue<OptionType>>(
    options[0]
  );

  // custom styles type
  const customStyles: StylesConfig<OptionType, false> = {
    control: (base) => ({
      ...base,
      backgroundColor: "#0f1122",
      borderColor: "#0f1122",
      color: "#000",
      boxShadow: "none",
      
      "&:hover": {
        borderColor: "#0f1122",
      },
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? "#0f1122"
        : state.isFocused
        ? "#1d2037"
        : "#0f1122",
      focus: "none",
      color: state.isSelected ? "white" : "#c3c3c3",
      "&:hover": {
        color: "white",
      },
      cursor: "pointer",
    }),
    indicatorSeparator: (base) => ({
          ...base,
          width:0,
        }),
    singleValue: (base) => ({
      ...base,
      color: "#fff",
    }),
  };

  return (
    <Select<OptionType, false>
      instanceId="language-select"
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

export default LanguageSelectTwo;
