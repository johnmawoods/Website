import "./about.scss"
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
    return (

        <div className="about">
            
            <div className="about-title">About</div>

            <div className="about-description">
            I have a deep understanding of CS fundamentals taught through Arizona State University and strive to learn more by taking
            on new challenges and pushing my self to improve. I have highlighted some of my skills below.
            </div>

            <div className="card-wrapper">

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
