import "./Layout.css"
import { Navbar } from "./Navbar"
import { Sidebar } from "./Sidebar"
import { Footer } from "./Footer"


export const Layout = ({children})=>{
    return(
        <div className="main-body-container">
        <Navbar/>
            <div className="layout-body">
            {/* <Sidebar /> */}
              <div className="content">{children}</div>
            </div>
            <Footer/>
          </div>
           
       
    )
}