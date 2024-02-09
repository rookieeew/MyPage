import './ExperienceContent.css'

function ExperienceContent() {
    return (
        <div className={"experience-contents"}>
            <div className={"experience-content"}>
                <p className={"experience-content-year"}>2022 - 2024</p>
                <p className={"experience-content-name"}>Information Visualize,Distributed Healthy Management
                    System, <a className={"project-link"} href={"https://github.com/rookieeew/DHMS.git"}>DHMS</a></p>
                <p className={"experience-content-college"}>University College Dublin</p>
                <ul className={"experience-content-details"}>
                    <li>Design and Implement the information visualization</li>
                    <li>Developed an interactive Dashboard in front-end via React</li>
                    <li>Employ diverse protocols to establish connections with various microservices, ensuring efficient
                        data exchange and integration
                    </li>
                </ul>
            </div>
            <div className={"experience-content"}>
                <p className={"experience-content-year"}>2022 - 2024</p>
                <p className={"experience-content-name"}>Back-end Leader, Find quiet places and roads for users in
                    Manhattan, <a className={"project-link"}
                                  href={"https://github.com/rookieeew/Zenzone.git"}>Zenzone</a></p>
                <p className={"experience-content-college"}>University College Dublin</p>
                <ul className={"experience-content-details"}>
                    <li>Proficient in designing RESTful APIs and structuring databases using PostgreSQL</li>
                    <li>Experienced in developing algorithms for optimal route determination from source to target
                        points
                    </li>
                    <li>Skilled in Docker deployment for hosting projects on both UCD's server infrastructure and AWS
                        cloud platform
                    </li>
                </ul>
            </div>
            <div className={"experience-content"}>
                <p className={"experience-content-year"}>2022 - 2024</p>
                <p className={"experience-content-name"}>Data Analyst, Use trained models to predict the usage of
                    shared bikes, <a className={"project-link"}
                                     href={"https://github.com/rookieeew/DublinBikes.git"}>DublinBikes</a></p>
                <p className={"experience-content-college"}>University College Dublin</p>
                <ul className={"experience-content-details"}>
                    <li>Proficient in creating Python scripts for data scraping from diverse sources</li>
                    <li>Skilled in data manipulation and analysis using Pandas and NumPy within Jupyter</li>
                    <li>Experienced in leveraging the Scikit-learn library to build and fine-tune machine learning
                        models, optimizing model accuracy
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ExperienceContent