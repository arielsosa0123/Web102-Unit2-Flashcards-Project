import { useState } from "react"

function Card({title, description, image}) {
  // false = show the fish image, true = show its name + description
  const [flipped, toFlipped] = useState(false);

  return (
    // Clicking anywhere on the card toggles the flipped state
    <div className="card"
    onClick={() => toFlipped(!flipped)}>
        {flipped ? (
            // Back: the fish's name and description
            <div className="BackOfCard">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        ) : (
            // Front: the fish image
            <div className="cardFront">
                <img src={image} alt={title} className="cardImage" />
                <p>Click to flip!</p>
            </div>
        )}
    </div>
  )

}

export default Card
