import { ReactNode } from "react";

interface IButton {
  children: ReactNode;
  colour?: "primary" | "secondary" | "danger";
  onClick: () => void;
}
const Button = ({ children, colour = "primary", onClick }: IButton) => {
  return (
    <button className={"btn btn-" + colour} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
