import React from "react";

function Typography({ variant, children, style }) {
  // FOR ASSIGN TAG NAME TO TAG-VARIANT
  const tagVariant = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    price: "price",
    small: "small",
  };

  const tagStyle = {
    h1: "text-[36px] md:text-[48px] lg:text-[60px]", //banner text
    h2: "text-[30px] md:text-[36px] lg:text-[36px]", // section titles
    h3: "text-[18px] md:text-[20px] lg:text-[20px]", // banner desc
    h4: "text-[18px]", // every card title
    h5: "text-[16px]", // small title
    h6: "text-[14px]", // small disc
    price: "text-[24px]", // price text
    small: "text-[12px]",
  };
  const Tag = tagVariant[variant];

  return (
    <div>
      <Tag className={`${tagStyle[variant]} ${style}`}>{children}</Tag>
    </div>
  );
}

export default Typography;
