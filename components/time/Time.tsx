import { ReactNode, TimeHTMLAttributes } from "react";

type TimeProps = {
  children: ReactNode;
} & TimeHTMLAttributes<HTMLTimeElement>;

export const Time = ({ children, ...props }: TimeProps) => {
  return <time {...props}>{children}</time>;
};
