import React from 'react'

import "./Profile.css"
import Typical from 'react-typical';
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
                        <i className='fa fa-google-plus-square'> </i>
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
                    Hello, I'M <span className='highlighted-text'>773</span>
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
                            "test1 asdasdasd",
                            1000,
                            "asdasdasdasd",
                            1000,  
                            "asdadasdasdasdas",
                            1000,
                            "asdassdsdsdasddasd",
                            1000,
                            "asdasasdadssddasd",
                            1000,
                            "asdasdsdsdsddsdasd",
                            1000,
                            "asdasdasdasdasdaasd",
                            1000,
                        ]}
                        />
                        </h1>
                        <span className='profile-role-tagline'>
                            officia perferendis voluptatem amet beatae distinctio et id delectus?
                        </span>
                    </span>
                </div>
                        <div className="profile-option">
                            <button className='btn primary-btn'>
                                {" "}
                                Hire Me{" "}
                            </button>
                            <a href="#">
                            <button className='btn highlighted-btn'>
                            Get Resume
                            </button>
                            </a>
                          
                           
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