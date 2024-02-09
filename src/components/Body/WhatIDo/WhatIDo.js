import './WhatIDo.css'
import WhatIDoTitle from "./WhatIDoTitle/WhatIDoTitle";
import WhatIDoContent from "./WhatIDoContent/WhatIDoContent";

function WhatIDo() {
    return (
        <div className={"what-i-do"} id={"what-i-do"}>
            <WhatIDoTitle/>
            <WhatIDoContent/>
        </div>
    )
}

export default WhatIDo