import { ButtonHTMLAttributes, ReactNode } from "react";
import { buttonStyleVariants, ButtonStyleVariantsTypes } from "./Button.css";

type ButtonProps = {
  children: ReactNode;
} & ButtonStyleVariantsTypes &
  ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  baseStyle,
  bgcolour,
  textcolour,
  fontSize,
  fontWeight,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={buttonStyleVariants({
        baseStyle,
        bgcolour,
        textcolour,
        fontSize,
        fontWeight,
      })}
      {...props}
    >
      {children}
    </button>
  );
};
