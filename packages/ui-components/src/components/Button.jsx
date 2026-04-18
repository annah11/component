import React from "react";

export function Button({ children, variant = "primary", ...props }) {
  return (
    <button className={`ui-btn ui-btn--${variant}`} {...props}>
      {children}
    </button>
  );
}
