import { useState } from "react";
import Card from "../components/Card"
import "./App.css";


function App() {
  // The full set of flashcards — one object per fish (image, title, description)
  const fishCards = [
  {
    image: "./images/Striped.jpg",
    title: "Striped Bass",
    description: "A powerful game fish known for its distinctive dark stripes and coastal migrations.",
  },
  {
    image: "/images/Fluke.png",
    title: "Summer Flounder",
    description: "A popular flatfish that camouflages itself on sandy ocean bottoms.",
  },
  {
    image: "./images/Robin.jpg",
    title: "Sea Robin",
    description: "A colorful bottom-dwelling fish that uses its wing-like fins to walk along the seafloor.",
  },
  {
    image: "./images/Blue.png",
    title: "Bluefish",
    description: "An aggressive predator famous for its speed, sharp teeth, and voracious appetite.",
  },
  {
    image: "./images/Sheep.jpg",
    title: "Sheepshead",
    description: "A hard-fighting fish recognized by its human-like teeth and bold vertical stripes.",
  },
  {
    image: "./images/Tautog.jpg",
    title: "Tautog",
    description: "A strong reef fish that thrives around rocky structures and feeds on shellfish.",
  },
  {
    image: "./images/Weak.png",
    title: "Weakfish",
    description: "A sleek coastal fish prized by anglers for its delicate flavor and shimmering appearance.",
  },
  {
    image: "./images/Skate.jpg",
    title: "Common Skate",
    description: "A large ray-like fish that glides gracefully across the ocean floor.",
  },
  {
    image: "./images/Dog.jpg",
    title: "Smooth Nosed Dog Fish",
    description: "A small shark species known for its smooth skin and bottom-feeding habits.",
  },
  {
    image: "./images/Monk.png",
    title: "Monk Fish",
    description: "An ambush predator with a large mouth that uses camouflage to catch its prey.",
  },
];
  // Number of cards shown in the header count
  const CardCount = 10;

  // Position in the deck of the card currently on screen
  const [index, setIndex] = useState(0);

  // Shuffle a copy of the cards once on load so the order is random but fixed
  const [deck] = useState(() =>
    [...fishCards].sort(() => Math.random() - 0.5)
  );

  // Step forward / backward through the deck; % wraps around the ends
  const nextCard = () => setIndex((index + 1) % deck.length);
  const prevCard = () =>
    setIndex((index - 1 + deck.length) % deck.length);

  // The card object we're displaying right now
  const current = deck[index];

  return (
    <div className="App">

      <h1 className="text">Fishermans Guide to being a Pro</h1>
      <h2 className="text">How many Fish 🐟 can you point out?</h2>
      <h3 className="text">Amount of Cards: {CardCount}</h3>

      <div className="cardBox">
        {/* key={index} remounts the Card on change so the flip resets each time */}
        <Card
          key={index}
          title={current.title}
          description={current.description}
          image={current.image}
        />
      </div>

      {/* Navigation buttons */}
      <div className="nav">
        <button onClick={prevCard}>⬅ Back</button>
        <button onClick={nextCard}>Next ➡</button>
      </div>

    </div>
  );
}

export default App
