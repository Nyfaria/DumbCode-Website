import { FC } from "react"
import Footer from "./Footer"
import Header, { HeaderProps } from "./Header"
import Navbar from "./Navbar"

const BasicPage: FC<HeaderProps> = (props) => {
  return (
    <div className="h-screen overflow-x-hidden bg-neutral-800 relative">
      <Header {...props} />
      <div className="flex flex-col w-full h-full">
        <Navbar />
        <div className="w-full flex-grow overflow-y-scroll dumbcode-scrollbar">
          {props.children}
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default BasicPage