import React from 'react'

import "./Banner.css"

let bannerData = {
    title: "React landing page",
    desc: "it laboriosam repellendus ut atque, maxime perferendis maiores eius sequi iste in laborum?"
}
function Banner() {
  return (
    <div className='banner-bg'>
        <div className="container">
            <div className="banner-con">
                <div className="banner-text">
                    <h1>{bannerData.title}</h1>
                    <p>
                        {bannerData.desc}
                    </p>
                    <a href="#" className='banner-btn'>Learn More</a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Banner