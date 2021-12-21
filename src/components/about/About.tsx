import "./about.scss"

import React, { useRef, useLayoutEffect } from "react"
import { gsap, Power3 } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import AboutCard from "./AboutCard"
import mvc from "../../assets/mvc.png"
import oop from "../../assets/oop-banner.png"
import rt from "../../assets/react.png"
import rest from "../../assets/restapi.png"
import c from "../../assets/C++.png"
import rwd from "../../assets/responsive.jpeg"
import ag from "../../assets/agile.svg"
import sw from "../../assets/swift.png"

const About:React.FC = () => {
    gsap.registerPlugin(ScrollTrigger);

    let title = useRef(null);
    let description = useRef(null);

    let cards = useRef(null);


    useLayoutEffect(() => {
        const ani = [
            title.current,
            description.current
        ];

        gsap.fromTo(ani,
            {
                opacity: 0,
                //y: 40,
            },
            {
                opacity: 1,
                //y: 0,
                duration: 1.5,
                ease: Power3.easeOut,
                scrollTrigger: {
                    trigger: title.current!,
                    start: "center 80%"
                },
            }
        )
                
    })


    useLayoutEffect(() => {
        const ani2 = cards.current
        gsap.fromTo(ani2,
            {
                opacity: 0,
                y: 40,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                delay: 0.5,
                ease: Power3.easeOut,
                scrollTrigger: {
                    trigger: title.current!,
                    start: "center 80%"
                },
            }
        )



    })


    return (

        <div className="about">
          
            <div id="first" className="about-title" ref={title}>About</div>

            <div className="about-description" ref={description}>
            I have a deep understanding of CS fundamentals taught through Arizona State University and strive to learn more by taking
            on new challenges and pushing my self to improve. I have highlighted some of my skills below.
            </div>

            <div className="card-wrapper" ref={cards}>

                <AboutCard image={mvc} title="Model View Controller"/>
                <AboutCard image={oop} title="Object Orientated Programming"/>
                <AboutCard image={rt} title="React JS"/>
                <AboutCard image={rest} title="Rest API"/>
                <AboutCard image={rwd} title="Responsive Web Design"/>
                <AboutCard image={ag} title="AGILE"/>
                <AboutCard image={sw} title="Swift"/>
                <AboutCard image={c} title="C++"/>

            </div>

        </div>
    )
};

export default About
