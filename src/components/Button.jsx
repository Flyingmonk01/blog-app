import React from "react";

export default function Button({
  children,
  type = "button",
  className = "",
  ...props
}) {
  return (
    <button type={type} className={`px-4 py-2 rounded-3xl ${className} hover:transition duration-500`} {...props} >
      {children}
    </button>
  );
}
