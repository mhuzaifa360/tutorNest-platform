import React from "react";

function Btn({ variant = "solid", size = "md", children, className, ...props }) {
  // 1. Your Custom Color Types
  const variantStyle = {
    blue: "bg-blueBG text-secondary ",
    white: "bg-secondary text-textBlack hover:bg-lightGreyBG",
  };

  // 3. BASE STYLE: Added your specific padding here
  // p-2 = top/bottom | px-6 = left/right (shorthand for pr-6 pl-6)
  const baseStyle =
    "font-medium text-sm px-6  border rounded-md whitespace-nowrap flex justify-center items-center min-h-10 button";

  return (
    <button
      className={`${baseStyle} ${variantStyle[variant]} ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Btn;
