import React from 'react'
import { Link } from 'react-router-dom'

import StockMarketPricePredictionProjectImg from './Images/stock.jpg'

import '../Projects/ProjectStyle.css'

const Project = () => {
  return (
    <div className='project'>
        <div className="head">Projects</div>
        <div className="project-wrapper">
            <Link to="https://github.com/Pranjul2002" target='_'>
            <div className="project-box-wrapper">
                <div className="project-box">
                    <div className="number">01</div>
                    <h1>Stock Market Price Prediction</h1>
                    <p>Represent past Stock which help to analyse more acuratly and it give feature of Pridicting future price of stock based on input year. <br />
                        <h4> <u> USED TECH-STACK</u> : Python, Flask, Reactjs, JavaScript, HTML, CSS. </h4>
                    </p>
                    <img src={StockMarketPricePredictionProjectImg} alt="" className='stock-prediction-img'/>
                </div>
            </div>
            </Link>
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