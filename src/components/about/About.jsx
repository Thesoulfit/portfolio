import React from 'react'
import abt from "../../img/abt.jpg"
import "./about.css"


const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={abt} alt="" srcset="" className='a-img'/>
                </div>
            </div>
            <div className="a-right">
                <h1 className='a-title'>About Me</h1>
                <p className='a-sub'>
                It is a long established fact that a reader will be distracted by the
          readable content.
                </p>
                <p className='a-desc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptates ad pariatur nemo aperiam, non distinctio aliquam mollitia ea ratione ipsam officia minus nam deleniti aliquid esse blanditiis optio porro.
                </p>
            </div>
        </div>
    )
}

export default About
