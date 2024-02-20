import {ReactTyped} from "react-typed";
import './TypedAnimation.css'
import HireButton from "../HireButton/HireButton";

function TypedAnimation() {
    return (
        <div className={"typedAnimationContainer"}>
            <h1 className={"typedAnimationContent"}>
                <a style={{fontSize: '40px'}}>Welcome</a>
                <br/>
                <ReactTyped
                    style={{fontSize: '70px'}}
                    strings={["I am AWESOME Tong", "I am a FULLSTACK Engineer", "I love CODING"]}
                    typeSpeed={120}
                    loop
                    backSpeed={90}
                    cursorChar="|"
                    showCursor={true}
                />
                <br/>
                <a style={{fontSize: '25px', color: '#403d39'}}>based in Dublin, Ireland.</a>
                <br/>
                <HireButton/>
            </h1>
        </div>
    );
}

export default TypedAnimation;