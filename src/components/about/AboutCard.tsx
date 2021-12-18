import "./aboutCard.scss"

interface Props {
    image: any;
    title: string;
}

const AboutCard:React.FC<Props> = (props) => {
    return (
        <div>
            <div className="about-card">
   
                <img src={props.image} alt="" className="card-banner"/>
                  
            </div>
            <div className="card-title">{props.title}</div>
        </div>
    )
}

export default AboutCard
