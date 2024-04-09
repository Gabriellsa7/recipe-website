import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

export default function Button({ children, onClick }: Props) {
  return <button onClick={onClick}>{children}</button>;
}
