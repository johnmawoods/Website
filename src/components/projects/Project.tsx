import "./project.scss"

interface Props {
    image: any;
    title: string;
    description: string;
    address: any;
}

const Project: React.FC<Props> = (Props) => {

    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        window.location.href=Props.address;
      };

    return (
        <div>
            <div className="project-card">
                    <div className="img-box">
                        <img src={Props.image} alt="" className="card-banner"/>
                    </div>

                    <div className="card-content">
                        <h3 className="card-title">{Props.title}</h3>
                        <div className="card-text">{Props.description}</div>
                        <button type="button" className="p-btn"
                            onClick={buttonHandler}>View Project</button>
                    </div>
            </div>
        </div>
    )
}

export default Project
