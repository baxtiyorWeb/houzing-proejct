import React from "react";

interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Div: React.FC<DivProps> = ({ children, className = "", ...props }) => {
  return (
    <div className={`  border border-[#E6E9EC] rounded-sm  ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Div;
