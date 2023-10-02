"use client";
import React, { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import classNames from "classnames";
import { Spinner } from "../Spinner";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "danger";
  variant?: "filled" | "outlined";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isLoading?: boolean;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      size = "md",
      color = "primary",
      variant = "outlined",
      leftIcon,
      rightIcon,
      isLoading,
      ...props
    }: ButtonProps,
    ref
  ) => {
    const sizeClass = {
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    }[size];

    const colorClass = {
      primary:
        "text-white bg-main-default hover:bg-main-dark focus:ring-main-default",
      secondary:
        "text-gray-700 bg-gray-200 hover:bg-gray-300 focus:ring-gray-500",
      danger: "text-white bg-red-500 hover:bg-red-600 focus:ring-red-500",
    }[color];

    const variantClass = {
      filled: "rounded-md shadow-sm",
      outlined: "border border-gray-300 rounded-md",
    }[variant];

    return (
      <button
        ref={ref}
        className={classNames(
          "inline-flex items-center font-medium focus:outline-none transition ease-in-out duration-150",
          sizeClass,
          colorClass,
          variantClass,
          className
        )}
        {...props}
      >
        {leftIcon && (
          <span className={typeof children !== "string" ? "" : "mr-2"}>
            {leftIcon}
          </span>
        )}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
        {isLoading && (
          <div className="ml-2">
            <Spinner />
          </div>
        )}
      </button>
    );
  }
);
Button.displayName = "Button"; 

export default Button;
