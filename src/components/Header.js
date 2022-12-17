import React, {useState} from 'react'
import { FiCode, FiX, FiMenu } from 'react-icons/fi'
import "./Header.css"
import "./HeaderCss1.css"
import Banner from './Banner';
import Content from './Content';
import Footer from './Footer';
import Home from './page/Home';
// Home
// import Profile from './Profile';
// Profile
function Header() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const [logo_click, set_logo_click] = useState(false);
    const handle_logo_Click = () => set_logo_click(!logo_click);

  return (
    <>
    <div className="main-header-773">
        <div className="container">
            <div className="header-con">
                {/* <div className={logo_click ? "logo-container scale-in-out" : "logo-container"} onClick={handle_logo_Click}> */}
                <div className="logo-container"  onClick={handle_logo_Click}>
                    
                    <div className={logo_click ? "scale-in-out head-text" : "head-text scale-in-out1"}>
                        
                        {/* <i className='fa-solid fa-sand-back'></i> */}
                        <i className='fa fa-exchange'></i>

                        {/* <a href="#" className={logo_click ? "scale-in-out head-text change" : "head-text"}><FiCode /></a> */}
                       
                    </div>

                    
                </div>
                <ul className={click ? "menu active" : "menu"}>
                    <li className='menu-link menu-about' onClick={closeMobileMenu}>
                        <a href="">ABOUT</a>
                    </li>
                    <li className='menu-link menu-contact' onClick={closeMobileMenu}>
                        <a href="">CONTACT</a>
                    </li>
                    <li className='menu-link menu-blog' onClick={closeMobileMenu}>
                        <a href="">BLOG</a>
                    </li>
                </ul>
                <div className="mobile-menu" onClick={handleClick}>
                    {click ? (
                        <FiX />
                    ): (
                        <FiMenu />
                    )}
    </div> {/*head*/}
    </div> {/*container*/}
    </div> {/*header-con*/}
    </div>
    <div className="body-container">

   {
    logo_click ? 
    (
        <div className="slide-in-left">
            <Home />
        </div>

    )
        : 
    (
        <div className='slide-in-left1'>
        <Banner />
        </div>
    )
   }
    
    </div>
    </>


  )
}

export default Header