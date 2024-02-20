import './Home.css'
import DownButton from "./DownButton/DownButton";
import TypedAnimation from "./TypedAnimation/TypedAnimation";
import Section from "../../InViewSection/Section";

function Home() {
    return (
        <Section>
            <div className={"home"} id={"home"}>
                <TypedAnimation/>
                <DownButton/>
            </div>
        </Section>

    );
}

export default Home