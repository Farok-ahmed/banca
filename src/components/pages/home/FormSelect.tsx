"use client"
import { useTheme } from '@/contextAPi/ThemeContext';
import React, { useState } from 'react'
import Select from 'react-select';
const options = [
    {
        value: 'Debt-Financing',
        label: 'Debt Loan'
    },
    {
        value: 'Equity-Finance',
        label: 'Installment loan'
    }
]

const FormSelect = () => {
     const [selectedOption, setSelectedOption] = useState(options[0]);
     const {theme} = useTheme();
     const isLightTheme = theme === 'light';
    
  return (
    <>
    <Select
        value={selectedOption}
        onChange={setSelectedOption}
        options={options}
        styles={{
            control: (base, state) => ({
                ...base,
                backgroundColor:  state.isFocused ? '#2c303a' : '#2c303a',
                borderColor: state.isFocused ? '#494949' : '#494949',
                padding: '0.5rem',
                color: '#fff',
                boxShadow: 'none',
                '&:hover': {
                borderColor: '#494949',
                },
            }),
            option: (base, state) => ({
                ...base,
                backgroundColor: state.isSelected
                ? '#131417'
                : state.isFocused
                ? '#131417'
                : '#2c303a',
                color: state.isSelected ? 'white' : '#c3c3c3',
                cursor: 'pointer',
            }),
            singleValue: (base) => ({
                ...base,
                color: '#fff',
            }),
        }}
      />
    </>
  )
}

export default FormSelect