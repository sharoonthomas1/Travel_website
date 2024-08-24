import React , {useref }from "react"
import {Navbar} from "./index.js"
import {NavbarSm} from "./index.js"
import { Outlet } from "react-router-dom"
import {Footer} from "./index.js"
import {PickUp} from "/src/index.js"

function App() {

  return (
  <>
  {/* style={{boxShadow:' rgba(0, 0, 0, 0.16) 0px 1px 4px'}} */}
    <div >
        <div className="container-xxl px-0 fixed-top" >
        <div id="header-lg">
          <Navbar/>
      </div>
      <div id="header-sm">
          <NavbarSm/>
      </div>
        </div>
    </div>
    <div className=" container-xxl px-lg-5" id='fixedTop'>
      <Outlet/>
    </div>
    <div style={{backgroundColor:'#faf1ed',marginTop:'200px'}}>
    <div className=" container-xxl px-lg-5 mt-5">
      <Footer/>
      <PickUp/>
    </div>
    </div>
  </>
  )
}

export default App
