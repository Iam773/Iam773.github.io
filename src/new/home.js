import React, { useState } from 'react';
import "./css/theme.css"
import "./css/Nav.css"
import "./css/Body.css"
import "./css/Login.css"
import { AiOutlineLogin } from "react-icons/ai"

import { FiMenu } from "react-icons/fi"

import { FaRegMoon , FaMoon } from "react-icons/fa"

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [LogMode, setLogMode] = useState(false);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
    <div className={darkMode ? 'nav-container nav-light' : 'nav-container nav-dark'}>
      <span>Home</span>
      <div className="login" onClick={handleClick}>
      <FiMenu />
      </div>
      <ul className={click ? darkMode ? "menu active menu-light" : "menu active menu-dark" : "menu"} onClick={closeMobileMenu}>
                    <li className='menu-link menu-contact' onClick={closeMobileMenu}>
        
                        <h6 onClick={() => setDarkMode(!darkMode)}> 
                        {darkMode ? (
                          <div className="dark">
                            Dark &nbsp; <FaRegMoon />
                          </div>
                        ) : (
                          <div className="white">
                            White &nbsp; <FaMoon />
                          </div>
                        )}
                        
                        </h6>
                        
                    </li>
                    <li className='menu-link menu-blog' onClick={() => setLogMode(!LogMode)}>
                        {/* <a href="">BLOG</a> */}
                        Login &nbsp; <AiOutlineLogin />
                    </li>
      </ul>
    </div>

    <div className={darkMode ? 'body-container light-mode' : 'body-container dark-mode'}>
                        
                        <div className={LogMode ? darkMode ? "login-container light" : "login-container dark" : darkMode ? "login-container hide" : "login-container hide"}>
                          <form>
                            <h1>LOGIN</h1>
                            <label>
                              Username: &nbsp;
                            <input type="text" name="" id="" />
                            </label>
                           
                            <label>
                              Passwords: &nbsp;
                            <input type="password" />
                            </label>
                            <input className='' type="submit" />
                          </form>
                        </div>

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


