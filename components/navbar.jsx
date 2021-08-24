import Link from "next/link"
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

export default function Navbar() {
  const[navShowHandler , setNavShowHandler] = useState("")

 
  const navhideHandler = () => {
    setNavShowHandler("");
  }
    

  const navBtn = () => {
    if (navShowHandler == "show"){
      setNavShowHandler("");
    }
    else {
      setNavShowHandler("show");
    }
}




  return (
    <>
      <section className="header-section">
        <nav className="navbar navbar-expand-lg sticky-top navba custome-nav">
          <div className="container">
            <a className="navbar-brand d-block d-md-none" href="/"><img src="/images/logo.png" className="img-fluid animate__animated" /></a>
            <button className="navbar-toggler" onClick={navBtn} type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="toggle-icon" />
              <span className="toggle-icon" />
              <span className="toggle-icon" />
            </button>
            <div className={`collapse navbar-collapse justify-content-between ${navShowHandler}`} id="navbarTogglerDemo01">
              <a className="navbar-brand d-none d-md-flex " href="/"><img src="/images/logo.png " className=" animate__animated img-fluid" /></a>
              <form className="d-flex d-none d-md-flex">
                <input className="form-control me-2" id="search" type="text" placeholder="Search items, collections, and..." aria-label="Search" />
                <FontAwesomeIcon icon={faSearch} />
              </form>
              
              <div className="d-flex">
              

              <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link href="/">
                  <a onClick={navhideHandler} className="nav-link active animate__animated" aria-current="page" >Home</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/marketplace">
                  <a onClick={navhideHandler} className="nav-link animate__animated" >Marketplace</a>
                  </Link>
                </li>
                <li className="nav-item">
                <Link href="/exhibitions">
                  <a onClick={navhideHandler} className="nav-link animate__animated " >Exhibitions</a>
                  </Link>

                </li>
                <li className="nav-item">
                <Link href="/community">
                  <a onClick={navhideHandler} className="nav-link animate__animated " >Community</a>
                  </Link>
                </li>

                <li className="nav-item" href="wallet.html">
                <Link href="/create">
                  <a onClick={navhideHandler} className="nav-link animate__animated" >Create</a>
                  </Link>
                </li>
                
                
                <li>
                  <a onClick={navhideHandler} className="nav-link metamask-btn btn animate__animated" href="#">Connect</a>
                </li>
                {/* <li className="nav-item dropdown">
                  <a className="dropdown-toggle nav-link" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <span>John Doe</span>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><a className="dropdown-item" href="#">Log Out</a></li>
                  </ul>
                </li> */}
              </ul>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  )
}