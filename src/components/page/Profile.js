import React from 'react'
// import second from "react-dom"
// import ReactDOM from 'react-dom';
// import "@coreui/coreui/dist/css/core"
// import '@coreui/coreui/dist/css/coreui.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { CButton } from '@coreui/react'
// CButton
// import "@coreui/coreui/dist/css/"
// import second from ""
import "./Profile.css"
import "./Sprofile.css"
import "./button.css"
import Typical from 'react-typical';
import { FiCode, FiX, FiMenu } from 'react-icons/fi'

function Profile() {
  return (
    <div className='profile-container'>
        <div className="profile-parent">
            <div className="profile-details">
                <div className="colz">
                    <div className="colz-icon">
                    <a href="#">
                        <i className='fa fa-facebook-square'> </i>
                    </a>
                    <a href="#">
                        <i className="fa-brands fa-line"> </i>
                    </a>
                    <a href="#">
                    
                         <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#">
                        <i className='fa fa-youtube-square'> </i>
                    </a>
                    <a href="#">
                        <i className="fa-brands fa-discord"></i>
                    </a>
                    </div>
                </div>
                <div className="profile-details-name">
                    <span className='primary-text'>
                    {""}
                    Hello, I'm <span className='highlighted-text'>773</span>
                    </span>
                </div>
                <div className="profile-details-role">
                    <span className='primary-text'>
                        {" "}
                        <h1>
                        {" "}
                        <Typical 
                        loop={Infinity}
                        steps={[
                            "Back-end",
                            2000,
                            "Python",
                            2000,  
                            "Css",
                            2000,
                            "Javascript",
                            2000,
                            "Java",
                            2000,
                            "C++",
                            2000,
                            "Html",
                            2000,
                            "Php",
                            2000,
                            "Sql",
                            2000,
                            "Json Config",
                            2000,
                            "Yaml Config",
                            2000,
                            "Git",
                            2000,
                        ]}
                        />
                        </h1>
                        <span className='profile-role-tagline'>
                            Name: asdasdasdasdasdasdasdasd<br />
                            Nickname: asdasdasdasd<br />
                            Age: xx <br />
                            Hobby: Writing programs in spare time
                        </span>
                        
                    </span>
                </div>

                {/* <div class="box-2">
                    <div class="btn-main btn-main-two">
                        <span>HOVER ME</span>
                    </div>
                    </div> */}
                        <div className="btn-main btn-main-two">
                           <span>Learn More</span>
                           {/* <button>Test</button> */}
                            {/* <CButton color="danger" variant="outline">Danger</CButton> */}
                            {/* <CButton color="success" shape="rounded-pill">Success</CButton>
                             */}
                             {/* <CButton color="secondary" variant="outline">Secondary</CButton> */}
                             {/* <CButton color="light" className='primary-text' variant="ghost" shape="rounded-pill">Success</CButton> */}
                             {/* <CButton color="info" variant="outline" shape="rounded-pill">Learn More</CButton> */}
                             {/* <CButton color="light" variant="ghost">Light</CButton> */}
                            {/* <CButton color="danger" variant="outline">Danger</CButton> */}
                          
                           
                        </div>
            </div>

            <div className="profile-picture">
                <div className="profile-picture-bg">

                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default Profile