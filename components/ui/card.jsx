import React from "react";
export function Card({ className="", children, ...props }) {
  return <div className={["bg-white rounded-2xl border shadow-sm", className].join(" ")} {...props}>{children}</div>;
}
export function CardContent({ className="", children }) {
  return <div className={["p-4", className].join(" ")}>{children}</div>;
}
