import React from 'react'

import "./Content.css";

function Content() {
  return (
    <div className='container'>
        <section className='content-con'>
            <div className="content-l">
                <img src="https://images.unsplash.com/photo-1594904351111-a072f80b1a71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHByb2dyYW1tZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>

            <div className="content-r">
                <h2>Some title</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem unde odio quibusdam aliquid perspiciatis voluptas assumenda et excepturi, consequuntur sunt quisquam incidunt asperiores possimus nesciunt harum quaerat porro beatae non!
                </p>
            </div>
        </section>

        <section className='content-con'>
            <div className="content-r">
                <h2>Some title</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem unde odio quibusdam aliquid perspiciatis voluptas assumenda et excepturi, consequuntur sunt quisquam incidunt asperiores possimus nesciunt harum quaerat porro beatae non!
                </p>
            </div>

            <div className="content-l">
                <img src="https://images.unsplash.com/photo-1594904351111-a072f80b1a71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHByb2dyYW1tZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            
        </section>

        <section className='content-con'>
            <div className="content-l">
                <img src="https://images.unsplash.com/photo-1594904351111-a072f80b1a71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHByb2dyYW1tZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>

            <div className="content-r">
                <h2>Some title</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem unde odio quibusdam aliquid perspiciatis voluptas assumenda et excepturi, consequuntur sunt quisquam incidunt asperiores possimus nesciunt harum quaerat porro beatae non!
                </p>
            </div>
        </section>
    </div>
  )
}

export default Content