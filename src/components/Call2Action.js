import React from 'react'

import "./Call2Action.css"
import { FiCode } from 'react-icons/fi'
function Call2Action() {
  return (
    <div className='cta-bg'>
        <div className="overlay">
            <div className="container">
                <div className="cta-text">
                    <FiCode />
                    <h2>We're react dev team</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse pariatur perferendis impedit nam fuga rem officia velit atque mollitia cum? Ab reiciendis corrupti quasi sequi ullam blanditiis voluptate molestias iusto?

                    </p>
                    <a href="#" className='cta-btn'>get to know us</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Call2Action