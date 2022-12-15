import React, {useState} from 'react'
import { FiCode, FiX, FiMenu } from 'react-icons/fi'
import "./Header.css"

function Header() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const [logo_click, set_logo_click] = useState(false);
    const handle_logo_Click = () => set_logo_click(!logo_click);

  return (
    <div className="header">
        <div className="container">
            <div className="header-con">
                <div className={logo_click ? "logo-container scale-out-center" : "logo-container"} onClick={handle_logo_Click}>
                    <a href="#">{logo_click ? "Main1" : "Main2"} <FiCode /></a>
                </div>
                <ul className={click ? "menu active" : "menu"}>
                    <li className='menu-link' onClick={closeMobileMenu}>
                        <a href="">ABOUT</a>
                    </li>
                    <li className='menu-link' onClick={closeMobileMenu}>
                        <a href="">CONTACT</a>
                    </li>
                    <li className='menu-link' onClick={closeMobileMenu}>
                        <a href="">BLOG</a>
                    </li>
                </ul>
                <div className="mobile-menu" onClick={handleClick}>
                    {click ? (
                        <FiX />
                    ): (
                        <FiMenu />
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header