import { ReactNode } from "react";

interface IFooter{
  children: ReactNode;
  year: number;
}
const Footer = ({children, year}: IFooter) => {
  return (
    <footer>
      <p>Copyright {children} {year}</p>
    </footer>
  )
}

export default Footer