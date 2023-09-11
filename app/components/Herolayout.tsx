import React from "react";

interface layoutSelctionPorps {
  children: React.ReactNode;
  ref?: React.RefObject<HTMLDivElement>;
}

const Herolayout = ({ children, ref }: layoutSelctionPorps) => {
  return <div className="p-10">{children}</div>;
};

export default Herolayout;
