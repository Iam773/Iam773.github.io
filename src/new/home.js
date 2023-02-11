import React, { useState } from 'react';
import "./css/theme.css"
import "./css/Nav.css"
import "./css/Body.css"
import { AiOutlineLogin } from "react-icons/ai"

import { FiMenu } from "react-icons/fi"

import { FaRegMoon , FaMoon } from "react-icons/fa"

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
    <div className="nav-container">
      <span>Home</span>
      <div className="login" onClick={handleClick}>
      <FiMenu />
      </div>
      <ul className={click ? "menu active" : "menu"}>
                    <li className='menu-link menu-contact' onClick={closeMobileMenu}>
                        {/* <a href="">CONTACT</a> */}
                        Dark &nbsp; <FaMoon />
                    </li>
                    <li className='menu-link menu-blog' onClick={closeMobileMenu}>
                        {/* <a href="">BLOG</a> */}
                        Login &nbsp; <AiOutlineLogin />
                    </li>
      </ul>
    </div>

    <div className="body-container">
      
    </div>
    </>
    // <div className={darkMode ? 'dark-mode' : 'light-mode'}>
    //   <h1>Hello World</h1>
    //   <button onClick={() => setDarkMode(!darkMode)}>
    //     {darkMode ? 'Light Mode' : 'Dark Mode'}
    //   </button>
    // </div>
  );
}

export default App;


