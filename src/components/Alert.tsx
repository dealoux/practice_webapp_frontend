import { ReactNode } from "react";

interface IAlert {
  children: ReactNode;
  type?: "primary" | "success" | "info";
  onClose: () => void;
}
const Alert = ({ children, type = "info", onClose }: IAlert) => {
  return (
    <div className={"alert alert-" + type + " alert-dismissible"}>
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
