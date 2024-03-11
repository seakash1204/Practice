import "./card.css";

function Card(props){
    return (
        <div className="cardContainer">
            <img src={props.image} alt={`${props.name} image`}/>
            <h2>{props.name}</h2>
            <h3>{props.gender}</h3>
            <button>Profile</button>
        </div>
    )
}

export default Card;