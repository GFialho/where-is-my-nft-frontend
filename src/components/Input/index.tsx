import React, { forwardRef, InputHTMLAttributes } from "react";

type CustomInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  placeholder?: string;
  inputClassName?: string;
};

const Input = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, placeholder, inputClassName, ...props }: CustomInputProps, ref) => {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <input
          ref={ref}
          className={
            "w-full px-4 py-2 mt-1 text-sm text-gray-800 placeholder-gray-400 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-300" +
            inputClassName
          }
          placeholder={placeholder}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input Field";

export default Input;
