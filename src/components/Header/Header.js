import './Header.css'
import {useEffect, useState} from "react";

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            // Set isScrolled based on scroll position
            setIsScrolled(scrollTop > 0);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <div className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className={"left"}>
                <h2 className={`logo ${isScrolled ? 'scrolled' : ''}`}>Tong</h2>
            </div>

            <div className={"center"}>
                <ul>
                    <li className={`nav-item ${isScrolled ? 'scrolled' : ''}`} onClick={() => scrollToSection('home')}>Home</li>
                    <li className={`nav-item ${isScrolled ? 'scrolled' : ''}`} onClick={() => scrollToSection('about')}>About</li>
                        {/*<li className={`nav-item ${isScrolled ? 'scrolled' : ''}`} onClick={() => scrollToSection('whatIDo')}>What I Do</li>*/}
                    <li className={`nav-item ${isScrolled ? 'scrolled' : ''}`} onClick={() => scrollToSection('resume')}>Resume</li>
                    <li className={`nav-item ${isScrolled ? 'scrolled' : ''}`} onClick={() => scrollToSection('contact')}>Contact</li>
                </ul>
            </div>

            <div className={"right"}>
                <ul>
                    <li className={"social-icon"}>
                        <a href={"https://www.linkedin.com/in/rookieeew/"}>
                            <svg t="1706522385969" className={`linkedin-icon ${isScrolled ? 'scrolled' : ''}`} viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" p-id="3859" width="37" height="37">
                                <path
                                    d="M385.024 706.368V406.72H285.376v299.68h99.616zM335.2 365.76c34.72 0 56.384-23.04 56.384-51.808-0.64-29.376-21.664-51.744-55.68-51.744-34.144 0-56.384 22.4-56.384 51.744 0 28.8 21.632 51.84 55.072 51.84z m409.024 340.608v-171.808c0-92.064-49.152-134.912-114.656-134.912-52.928 0-76.608 29.12-89.792 49.504v-42.496h-99.616c1.312 28.16 0 299.712 0 299.712h99.616v-167.36c0-8.96 0.64-17.92 3.264-24.256 7.168-17.92 23.584-36.448 51.072-36.448 36.064 0 50.56 27.456 50.56 67.744v160.352h99.584zM512 64c247.424 0 448 200.544 448 448 0 247.424-200.576 448-448 448-247.456 0-448-200.576-448-448C64 264.544 264.544 64 512 64z"
                                    fill="#132442" p-id="3860"></path>
                            </svg>
                        </a>
                    </li>

                    <li className={"social-icon"}>
                        <a href={"https://github.com/rookieeew"}>
                            <svg href={"https://github.com/rookieeew"}
                                 t="1706483751565" className={`git-icon ${isScrolled ? 'scrolled' : ''}`} viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" p-id="2915" id="mx_n_1706483751565" width="37"
                                 height="37">
                                <path
                                    d="M950.857143 512q0 143.428571-83.714286 258t-216.285714 158.571429q-15.428571 2.857143-22.571429-4t-7.142857-17.142857l0-120.571429q0-55.428571-29.714286-81.142857 32.571429-3.428571 58.571429-10.285714t53.714286-22.285714 46.285714-38 30.285714-60 11.714286-86q0-69.142857-45.142857-117.714286 21.142857-52-4.571429-116.571429-16-5.142857-46.285714 6.285714t-52.571429 25.142857l-21.714286 13.714286q-53.142857-14.857143-109.714286-14.857143t-109.714286 14.857143q-9.142857-6.285714-24.285714-15.428571t-47.714286-22-49.142857-7.714286q-25.142857 64.571429-4 116.571429-45.142857 48.571429-45.142857 117.714286 0 48.571429 11.714286 85.714286t30 60 46 38.285714 53.714286 22.285714 58.571429 10.285714q-22.857143 20.571429-28 58.857143-12 5.714286-25.714286 8.571429t-32.571429 2.857143-37.428571-12.285714-31.714286-35.714286q-10.857143-18.285714-27.714286-29.714286t-28.285714-13.714286l-11.428571-1.714286q-12 0-16.571429 2.571429t-2.857143 6.571429 5.142857 8 7.428571 6.857143l4 2.857143q12.571429 5.714286 24.857143 21.714286t18 29.142857l5.714286 13.142857q7.428571 21.714286 25.142857 35.142857t38.285714 17.142857 39.714286 4 31.714286-2l13.142857-2.285714q0 21.714286 2.857143 50.857143t2.857143 30.857143q0 10.285714-7.428571 17.142857t-22.857143 4q-132.571429-44-216.285714-158.571429t-83.714286-258q0-119.428571 58.857143-220.285714t159.714286-159.714286 220.285714-58.857143 220.285714 58.857143 159.714286 159.714286 58.857143 220.285714z"
                                    p-id="2916" fill="#132442"></path>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;