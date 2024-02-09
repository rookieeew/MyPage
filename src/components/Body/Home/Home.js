import './Home.css'
import TypedAnimation from "./TypedAnimation/TypedAnimation";
import DownButton from "./DownButton/DownButton";

function Home() {
    return (
        <div className={"home"} id={"home"}>
            <TypedAnimation/>
            <DownButton/>
        </div>
    );
}

export default Home