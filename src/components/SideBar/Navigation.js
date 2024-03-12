import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './Navigation.css'
const YourComponent = () => {
    useEffect(() => {
        const swiper = new Swiper(".swiper", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 3,
                slideShadows: true
            },
            keyboard: {
                enabled: true
            },
            mousewheel: {
                thresholdDelta: 70
            },
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            breakpoints: {
                640: {
                    slidesPerView: 2
                },
                768: {
                    slidesPerView: 1
                },
                1024: {
                    slidesPerView: 2
                },
                1560: {
                    slidesPerView: 3
                }
            }
        });
        return () => {
            swiper.destroy();
        };
    }, []);

    return (
        <main>
            <div>
                <span>discover</span>
                <h1>aquatic animals</h1>
                <hr />
                <p>Beauty and mystery are hidden under the sea. Explore with our application to know about Aquatic Animals.</p>
                <a href="#">download app</a>
            </div>
            <div className="swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide swiper-slide--one">
                        <div>
                            <h2>Jellyfish</h2>
                            <p>Jellyfish and sea jellies are the informal common names given to the medusa-phase of
                                certain gelatinous members of the subphylum Medusozoa, a major part of the phylum
                                Cnidaria.</p>
                            <a href="https://en.wikipedia.org/wiki/Jellyfish" target="_blank"
                               rel="noopener noreferrer">explore</a>
                        </div>
                    </div>

                    <div className="swiper-slide swiper-slide--two">
                        <div>
                            <h2>Seahorse</h2>
                            <p>
                                Seahorses are mainly found in shallow tropical and temperate salt water throughout the
                                world. They live in sheltered areas such as seagrass beds, estuaries, coral reefs, and
                                mangroves. Four species are found in Pacific waters from North America to South America.
                            </p>
                            <a href="https://en.wikipedia.org/wiki/Seahorse" target="_blank"
                               rel="noreferrer">explore</a>
                        </div>
                    </div>
                    <div className="swiper-slide swiper-slide--three">

                        <div>
                            <h2>octopus</h2>
                            <p>
                                Octopuses inhabit various regions of the ocean, including coral reefs, pelagic waters,
                                and the seabed; some live in the intertidal zone and others at abyssal depths. Most
                                species grow quickly, mature early, and are short-lived.
                            </p>
                            <a href="https://en.wikipedia.org/wiki/Octopus" target="_blank" rel="noreferrer">explore</a>
                        </div>
                    </div>

                    <div className="swiper-slide swiper-slide--four">

                        <div>
                            <h2>Shark</h2>
                            <p>
                                Sharks are a group of elasmobranch fish characterized by a cartilaginous skeleton, five
                                to seven gill slits on the sides of the head, and pectoral fins that are not fused to
                                the head.
                            </p>
                            <a href="https://en.wikipedia.org/wiki/Shark" target="_blank" rel="noreferrer">explore</a>
                        </div>
                    </div>

                    <div className="swiper-slide swiper-slide--five">

                        <div>
                            <h2>Dolphin</h2>
                            <p>
                                Dolphins are widespread. Most species prefer the warm waters of the tropic zones, but
                                some, such as the right whale dolphin, prefer colder climates. Dolphins feed largely on
                                fish and squid, but a few, such as the orca, feed on large mammals such as seals.
                            </p>
                            <a href="https://en.wikipedia.org/wiki/Dolphin" target="_blank" rel="noreferrer">explore</a>
                        </div>
                    </div>
                </div>
                {/* Add Pagination */}
                <div className="swiper-pagination"></div>
            </div>
            <img src="https://cdn.pixabay.com/photo/2021/11/04/19/39/jellyfish-6769173_960_720.png" alt=""
                 className="bg"/>
            <img src="https://cdn.pixabay.com/photo/2012/04/13/13/57/scallop-32506_960_720.png" alt="" className="bg2"/>
        </main>
    );
};

export default YourComponent;
