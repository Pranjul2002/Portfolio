import React from 'react'

import '../Home/HomeStyle.css'
import selfImage from '../Home/Images/self.JPG'


const Home = () => {
  return (
    <div className='home'>
        <div className="home-left-box">
            <div className="name-head">
                Pranjul Khankriyal
            </div>
            <div className="designation-box">
                Software devloper
            </div>
            <div className="quote">
                just a regular person who <br/>
                loves devloping.
            </div>
        </div>

        <div className="home-right-box">
            <img src={selfImage} alt="" className='self-image'/>
        </div>
    </div>
  )
}

export default Home