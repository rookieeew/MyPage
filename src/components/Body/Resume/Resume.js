import ResumeTitle from "./ResumeTitle/ResumeTitle";
import Eduction from "./Education/Eduction";
import Experience from "./Experience/Experience";
import './Resume.css'
import Section from "../../InViewSection/Section";
function Resume() {
    return (
        <Section>
            <div className={"resume"} id={"resume"}>
                <ResumeTitle/>
                <div className={"resume-content"}>
                    <Experience/>
                    <Eduction/>
                </div>
            </div>
        </Section>
    )
}

export default Resume