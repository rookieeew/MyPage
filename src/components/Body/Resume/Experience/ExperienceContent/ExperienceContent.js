import './ExperienceContent.css'

function ExperienceContent() {
    return (
        <div className={"experience-contents"}>
            <div className={"experience-content"}>
                <p className={"experience-content-year"}><span className={"experience-content-month"}>Jan</span> 2024
                    - <span className={"experience-content-month"}>Feb</span> 2024</p>
                <p className={"experience-content-name"}>Back-end Developer,Hyperspectral Imaging GUI, <a
                    className={"project-link"} href={"https://github.com/rookieeew/SPRG"}>SPRG</a></p>
                <p className={"experience-content-college"}>University College Dublin</p>
                <ul className={"experience-content-details"}>
                    <li>Design UI and Implement the UI design via PyQt6 framework</li>
                    <li>Utilized numpy, spectral, and matplotlib libraries to load and generate grayscale images</li>
                    <li>Enabled users to select different wavelengths and view corresponding grayscale images</li>
                    <li>Packaged the code using Pyinstaller to ensure cross-platform compatibility</li>
                </ul>
            </div>
            <div className={"experience-content"}>
                <p className={"experience-content-year"}><span className={"experience-content-month"}>Jan</span> 2024
                    - <span className={"experience-content-month"}>Feb</span> 2024</p>
                <p className={"experience-content-name"}>Full-stack Developer,Personal Website, <a
                    className={"project-link"} href={"https://github.com/rookieeew/TongHub"}>Tong Hub</a></p>
                <p className={"experience-content-college"}>University College Dublin</p>
                <ul className={"experience-content-details"}>
                    <li>Designed and implemented the portfolio UI using React</li>
                    <li>Deployed the website on AWS EC2, configured an Elastic IP address, and associated it with a
                        domain name
                    </li>
                    <li>Implemented Nginx as a reverse proxy to enhance performance and security</li>
                </ul>
            </div>
            <div className={"experience-content"}>
                <p className={"experience-content-year"}><span className={"experience-content-month"}>Dec</span> 2023
                    - <span className={"experience-content-month"}>Jan</span> 2024</p>
                <p className={"experience-content-name"}>Information Visualize,Distributed Healthy Management
                    System, <a className={"project-link"} href={"https://github.com/rookieeew/DHMS"}>DHMS</a></p>
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
                <p className={"experience-content-year"}><span className={"experience-content-month"}>Jun</span> 2023 -
                    <span className={"experience-content-month"}>Aug</span> 2023</p>
                <p className={"experience-content-name"}>Back-end Leader, Find quiet places and roads for users in
                    Manhattan, <a className={"project-link"}
                                  href={"https://github.com/rookieeew/Zenzone"}>Zenzone</a></p>
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
                <p className={"experience-content-year"}><span className={"experience-content-month"}>Mar</span> 2023
                    - <span className={"experience-content-month"}>May</span> 2023</p>
                <p className={"experience-content-name"}>Data Analyst, Use trained models to predict the usage of
                    shared bikes, <a className={"project-link"}
                                     href={"https://github.com/rookieeew/DublinBikes"}>DublinBikes</a></p>
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