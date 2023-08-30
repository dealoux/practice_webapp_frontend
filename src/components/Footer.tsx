import { IComponent } from "./Util"

const Footer = ({children}: IComponent) => {
  return (
    <footer>
      {children}
    </footer>
  )
}

export default Footer