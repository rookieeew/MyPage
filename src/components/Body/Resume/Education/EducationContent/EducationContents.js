import './EducationContents.css'

function EducationContents() {
    return (
        <div className={"education-contents"}>
            <div className={"education-content"}>
                <p className={"education-content-year"}><span className={"education-content-month"}>Sep</span> 2022 -
                    <span className={"education-content-month"}>May</span> 2024</p>
                <p className={"education-content-major"}>Computer Science</p>
                <a href={"https://www.ucd.ie/"} className={"education-content-college"}>University College Dublin</a>
                <p className={"education-content-details"}>Java Programming/Data Struc & Algorithms/Data Analytics/Information Visualization/Big Data/
                    Distributed Systems/Cloud Computing
                </p>
            </div>
            <div className={"education-content"}>
                <p className={"education-content-year"}><span className={"education-content-month"}>Sep</span> 2018 -
                    <span className={"education-content-month"}>July</span> 2022</p>
                <p className={"education-content-major"}>Electrical Engineering</p>
                <a href={"https://en.hpu.edu.cn/"} className={"education-content-college"}>Henan Polytechnical University</a>
                <p className={"education-content-details"}>Advanced Mathematics/Probability & Statistics/Circuit Theory/Analog Electronics Technique/Digital
                    Electronic Technique/Embedded System/Signal and System/Power System Analysis</p>
            </div>
        </div>
    )
}

export default EducationContents