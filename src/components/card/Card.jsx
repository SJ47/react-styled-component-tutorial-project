import { StyledCard } from "./Card.styles";

const Card = ({ card }) => {
    return (
        // The && below is a shortcut for ternary where you only have the true value set by
        // using the && as the word then.  So if id is even number then set row-reverse.
        <StyledCard layout={card.id % 2 === 0 && "row-reverse"}>
            <div>
                <h2>{card.title}</h2>
                <p>{card.body}</p>
            </div>

            <div>
                <img src={`../images/${card.image}`} alt="" />
            </div>
        </StyledCard>
    );
};

export default Card;
