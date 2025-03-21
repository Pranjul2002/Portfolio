import React from 'react'

import '../Resume/ResumeStyle.css'


const Resume = () => {
  return (
    <div className='resume'>
        <div className='resume-download-box'>
            <div className="resume-download-box-wrapper">
                <div className="resume-header">
                    Get Resume..
                </div>
                <div className="resume-download-button">
                    <button type='button'>Resume</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume