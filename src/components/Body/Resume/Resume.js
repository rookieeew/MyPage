import ResumeTitle from "./ResumeTitle/ResumeTitle";
import Eduction from "./Education/Eduction";
import Experience from "./Experience/Experience";
import './Resume.css'
function Resume() {
    return (
        <div className={"resume"} id={"resume"}>
            <ResumeTitle/>
            <div className={"resume-content"}>
                <Experience/>
                <Eduction/>
            </div>
        </div>
    )
}

export default Resume