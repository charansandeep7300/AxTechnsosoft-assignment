'use client'

import React, { useState, forwardRef } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const InputField = forwardRef(({ label, type, placeholder, name, showPassword, onTogglePassword, ...props }, ref) => {
  const [inputType, setInputType] = useState(type);

  const handleTogglePassword = () => {
    setInputType(inputType === "password" ? "text" : "password");
    if (onTogglePassword) onTogglePassword();
  };

  return (
    <div className="relative grid grid-cols-1 gap-2">
      <label className="block text-gray-700 text-sm pb-4 font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <div className="flex justify-between border py-2 px-4 relative">
        <input
          id={name}
          type={inputType}
          placeholder={placeholder}
          name={name}
          ref={ref} 
          className="w-full focus:outline-none"
          {...props}
        />
        {showPassword && (
          <button
            type="button"
            onClick={handleTogglePassword}
            className="absolute right-0 top-0 mt-2 mr-2"
          >
            {inputType === "password" ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
    </div>
  );
});

export default InputField;
