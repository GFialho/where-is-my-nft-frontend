import React, { forwardRef, TextareaHTMLAttributes } from "react";

type CustomTextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  placeholder?: string;
  inputClassName?: string;
};

const TextArea = forwardRef<HTMLTextAreaElement, CustomTextAreaProps>(
  (
    { label, placeholder, inputClassName, ...props }: CustomTextAreaProps,
    ref
  ) => {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <textarea
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
TextArea.displayName = "Button"; // Add this line to assign the display name

export default TextArea;
