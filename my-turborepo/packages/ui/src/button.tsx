"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName?: string;
  ariaLabel?: string;
}

export const Button = ({
  children,
  className,
  appName = "app",
  ariaLabel,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={className}
      aria-label={ariaLabel ?? `Button from ${appName}`}
      onClick={() => console.log(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};
