import './About.css'
import React from "react";
function About() {
    return (
        <div className={"about"} id={"about"}>

            <div className={"about-title"}>
                <h1>Know<span id={"add-line"}>&nbsp;&nbsp;Me&nbsp;&nbsp;</span> More</h1>
                <p>About Me</p>
            </div>

            <div className={"about-content"}>
                <div id={"description"}>
                    <h2>I'm <span id={"name"}>Tong Wu</span>, a FULLSTACK Developer</h2>
                    <p>I help you build brand for your business at an affordable price. Thousands of clients have
                        procured exceptional results while working with our dedicated team. when an unknown printer took a galley
                        of  type and scrambled it to make a type specimen book.<br/><br/>
                        Delivering work within time and budget which meets client’s requirements is our moto. Lorem
                        Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.
                    </p>
                </div>
                <div id={"info-form"}>
                    <ul>
                        <li>
                            <p className={"value"}><span className={"key"}>Name: </span>Tong Wu</p>
                        </li>
                        <li>
                            <p className={"value"}><span className={"key"}>Email: </span>rookieeew@gmail.com</p>
                        </li>
                        <li>
                            <p className={"value"}><span className={"key"}>Age: </span>26</p>
                        </li>
                        <li>
                            <p className={"value"}><span className={"key"}>From: </span>Dublin, Ireland</p>
                        </li>
                        <li>
                            <a
                               href={"https://drive.google.com/file/d/1kPWfAjT7VwqerBMtyXTqo6Lxkarp-fzS/view?usp=sharing"}
                               target={"_blank"}
                               rel={"noreferrer"}>
                                <button id={"view-btn"}>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;View CV&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </button>
                            </a>

                            <a
                               href={"https://drive.google.com/file/d/1kPWfAjT7VwqerBMtyXTqo6Lxkarp-fzS/view?usp=sharing"}
                               download={"TongWuCV.pdf"}
                               target={"_blank"}
                               rel={"noreferrer"}>
                                <button id={"download-btn"}>Download CV</button>
                            </a>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About