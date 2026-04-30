import React from "react";

function Btn({ variant = "solid", size = "md", children, className, ...props }) {
  // 1. Your Custom Color Types
  const variantStyle = {
    blue: "bg-blueBG text-secondary ",
    white: "bg-secondary text-textBlack hover:bg-lightGreyBG",
  };

  // 2. Size now only controls text, since padding is global
  const sizeStyle = {
    sm: "text-[12px]",
    md: "text-[16px]",
    lg: "text-[20px]",
  };

  // 3. BASE STYLE: Added your specific padding here
  // p-2 = top/bottom | px-6 = left/right (shorthand for pr-6 pl-6)
  const baseStyle =
    "font-medium text-sm px-8 border rounded-md whitespace-nowrap gap-2 flex justify-center items-center min-h-10 button";

  return (
    <button
      className={`${baseStyle} ${variantStyle[variant]} ${sizeStyle[size]} ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Btn;
