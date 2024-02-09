import './Footer.css'

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div className={"footer"}>
            <div className={"copyright"}>
                <p>Copyright © 2022 <span style={{color: "#0A66C2"}}>Tong</span>. All Rights Reserved </p>
            </div>

            <ul className={"others"}>
                <li className={"policy"}>Terms & Policy&nbsp;&nbsp;</li>
                <li className={"disclaimer"}>&nbsp;&nbsp;Disclaimer</li>
            </ul>

            <div className={"back-to-top"}>
                <a onClick={scrollToTop} className={"back-to-top-button"}>
                    <svg t="1707411424677" className="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="8575" id="mx_n_1707411424678" width="30" height="30">
                        <path
                            d="M721.12 529.28C708.64 541.76 688.384 541.76 675.872 529.28L544 397.12 544 736C544 753.6 529.696 768 512 768 494.304 768 480 753.6 480 736L480 397.12 348.128 529.28C335.616 541.76 315.328 541.76 302.88 529.28 290.368 516.48 290.368 496.32 302.88 483.84L483.872 302.72C491.552 295.04 502.048 292.8 512 294.72 521.952 292.8 532.448 295.04 540.128 302.72L721.12 483.84C733.632 496.32 733.632 516.48 721.12 529.28L721.12 529.28ZM512 0C229.216 0 0 229.12 0 512 0 794.88 229.216 1024 512 1024 794.784 1024 1024 794.88 1024 512 1024 229.12 794.784 0 512 0L512 0Z"
                            fill="#0A66C2" p-id="8576"></path>
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default Footer