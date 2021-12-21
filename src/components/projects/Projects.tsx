import "./projects.scss"

import React, { useRef, useLayoutEffect } from "react"
import { gsap, Power3 } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import cv from "../../assets/computer-vision.png"
import rt from "../../assets/runner.jpg"
import bt from "../../assets/construction.png"
import Project from "./Project"

const Projects:React.FC = () => {
    gsap.registerPlugin(ScrollTrigger);

    let title = useRef(null);
    let card1 = useRef(null);
    let card2 = useRef(null);
    let card3 = useRef(null);

    // title animation
    useLayoutEffect(() => {
        const ani1 = title.current
        gsap.fromTo(ani1,
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 1.5,
                ease: Power3.easeOut,
                scrollTrigger: {
                    trigger: title.current!,
                    start: "center 80%"
                },
            }
        )
    })


    return (
        
        <div className="projects">

            <div className="project-title">Projects</div>
            
            <div className="card-wrapper">

                <Project image={cv} title="Computer Vision" description="C++, OpenCV, Eigen, OpenGL" address="https://github.com/AatmikMallya/Facial-Tracking/tree/master" />
                <Project image={rt} title="Run Tracker" description="Swift 5, Storyboard" address="https://github.com/johnmawoods/Run-Tracker"/>
                <Project image={bt} title="Bug Tracker" description="Under Construction" address="https://github.com/johnmawoods"/>

            </div>

        </div>
    )
};

export default Projects
