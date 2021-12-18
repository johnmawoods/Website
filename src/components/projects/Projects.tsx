import "./projects.scss"
import cv from "../../assets/computer-vision.png"
import rt from "../../assets/runner.jpg"
import bt from "../../assets/construction.png"
import Project from "./Project"

const Projects:React.FC = () => {
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
