import "./contact.scss"
import { Link } from 'react-router-dom';

import gh from "../../assets/github.png"
import li from "../../assets/linkedin.png"
import hs from "../../assets/handshake.png"

const Contact:React.FC = () => {

    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        window.open('mailto:johnmwoods99@gmail.com?subject=&body=')
      };

    return (
        <div className="contact">
            <div className="contact-title">Contact</div>
            <button className="c-btn" onClick={buttonHandler}>Let's Talk</button>

            <div className="footer-container">
                <div className="image-cropper">
                    <a href="https://github.com/johnmawoods"><img className="github" src={gh} alt=""></img></a>
                </div>
                <div className="image-cropper">
                    <a href="https://www.linkedin.com/in/john-woods-5782801b0/"><img className="linkedin" src={li} alt=""></img></a>
                </div>
                <div className="image-cropper">
                    <a href="https://asu.joinhandshake.com/users/10699730"><img className="handshake" src={hs} alt=""></img></a>
                </div>
            </div>
        </div>
    )
};

export default Contact
