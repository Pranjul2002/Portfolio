import React from 'react'
import { Link } from 'react-router-dom'

import '../Projects/ProjectStyle.css'

const Project = () => {
  return (
    <div className='project'>
        <div className="head">Projects</div>
        <div className="project-wrapper">
            <div className="project-box-wrapper">
                <div className="project-box">
                    <div className="number">01</div>
                </div>
            </div>
            <div className="project-box-wrapper project-wrapper-box1">
                <div className="project-box">
                    <div className="number">02</div>
                </div>
            </div>
            <div className="project-box-wrapper  project-wrapper-box2">
                <div className="project-box">
                    <div className="number">03</div>
                </div>
            </div>
            <div className="project-box-wrapper  project-wrapper-box3">
                <div className="project-box">
                    <div className="number">04</div>
                </div>
            </div>
            <div className="project-box-wrapper  project-wrapper-box4">
                <div className="project-box">
                    <div className="number">05</div>
                </div>
            </div>

            <Link to="">
                <div className="more-projects">
                    <p>MORE PROJECTS</p>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Project