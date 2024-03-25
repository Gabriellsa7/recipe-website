import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: Props) {
  return <div className={className}>{children}</div>;
}
export function Top({ children, className }: Props) {
  return <main className={className}>{children}</main>;
}
export function Bottom({ children, className }: Props) {
  return <main className={className}>{children}</main>;
}
