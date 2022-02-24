import "./intro.css"
import me from "../../img/me.png"

const Intro = ()=>  {
    return (
        <div className="intro-container">
            <div className="intro left">
                <div className="intro-left-wrap">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="name">Dhruv Gupta</h1>
                    <div className="intro-title">
                        <div className="intro-title-wrap">
                            <div className="intro-title-item">Web Developer</div>
                            <div className="intro-title-item">UI/UX Developer</div>
                            <div className="intro-title-item">Wordpress Developer</div>
                            <div className="intro-title-item">Fitness Enthusiast</div>
                            <div className="intro-title-item">Blogger</div>
                        </div>
                    </div>
                    <div className="desc">
                        I design and develop services for customers, specializing in creating stylish, modern looking websites, landing-pages, emailers as well as wordpress websites. 
                    </div>
                </div>
            </div>
            <div className="intro right">
                <div className="i-bg"></div>
                <img src={me} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro
