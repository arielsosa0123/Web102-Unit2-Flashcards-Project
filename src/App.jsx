import { useState, useRef } from "react";
import Card from "../components/Card"
import "./App.css";


// Lowercase, strip punctuation, and collapse whitespace so comparisons ignore those differences
const normalize = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "") // drop punctuation/symbols
    .replace(/\s+/g, " ")        // collapse runs of spaces
    .trim();

// A guess counts as correct if it matches the whole answer OR any single word of it
const isCorrectGuess = (guessText, answer) => {
  const g = normalize(guessText);
  if (!g) return false; // empty guess is never correct
  const a = normalize(answer);
  return g === a || a.split(" ").includes(g);
};

function App() {
  // The full set of flashcards — one object per fish (image, title, description)
  const fishCards = [
  {
    image: "./images/begin.jpg",
    title: "Begin!",
    description: "Press the right arrow to start the flashcard set."
  },
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

  // The deck of cards, kept in order (Begin! always first) until the user shuffles.
  const [deck, setDeck] = useState(fishCards);

  // Index of the card currently on screen
  const [index, setIndex] = useState(0);

  // The guess text, and the result of the last submission: "" | "correct" | "incorrect"
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");

  // Streak counters
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  // Holds the 3-second timer for the "incorrect" flash so we can cancel it
  const timerRef = useRef(null);

  // Wipe the input + any feedback (used when leaving the current card)
  const clearGuess = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setGuess("");
    setFeedback("");
  };

  // Check the guess against the card's name (case-insensitive, trimmed)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (timerRef.current) clearTimeout(timerRef.current);

    const correct = isCorrectGuess(guess, current.title);
    if (correct) {
      const next = currentStreak + 1;
      setCurrentStreak(next);
      setLongestStreak(Math.max(longestStreak, next));
      setFeedback("correct"); // stays until the next card or another submission
    } else {
      setCurrentStreak(0);
      setFeedback("incorrect");
      timerRef.current = setTimeout(() => setFeedback(""), 3000); // clears after 3s
    }
  };

  // Shuffle every card except Begin!, which stays pinned at the front, then return to it
  const shuffleDeck = () => {
    const [begin, ...rest] = deck;
    // Fisher-Yates shuffle on the rest of the cards
    for (let i = rest.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [rest[i], rest[j]] = [rest[j], rest[i]];
    }
    setDeck([begin, ...rest]);
    setIndex(0);
    clearGuess();
  };

  // Are we at an edge of the deck? Used to disable + fade the nav buttons (no wrap-around)
  const atStart = index === 0;
  const atEnd = index === deck.length - 1;

  // Next walks forward one card, stopping at the last card
  const nextCard = () => {
    if (atEnd) return;
    setIndex(index + 1);
    clearGuess();
  };

  // Back walks backward one card, stopping at the first card (Begin!)
  const prevCard = () => {
    if (atStart) return;
    setIndex(index - 1);
    clearGuess();
  };

  // The card object we're displaying right now
  const current = deck[index];

  return (
    <div className="App">

      <h1 className="text">Fishermans Guide to being a Pro</h1>
      <h2 className="text">How many Fish 🐟 can you point out?</h2>
      <br></br>
      <h3 className="text">Amount of Cards: {CardCount}</h3>
      <br></br>
      <h3 className="text">Current Streak: {currentStreak}, Longest Streak: {longestStreak}</h3>

      <div className="cardBox">
        {/* key={index} remounts the Card on change so the flip resets each time */}
        <Card
          key={index}
          title={current.title}
          description={current.description}
          image={current.image}
        />
      </div>

      {/* Guess input — sits under the card, above the navigation buttons */}
      <form className="guess" onSubmit={handleSubmit}>
        <label htmlFor="guessInput" className="text">Guess the Answer:</label>
        <div className="guessRow">
          <input
            id="guessInput"
            type="text"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            placeholder="Type the fish name..."
            className={
              feedback === "correct"
                ? "input-correct"
                : feedback === "incorrect"
                ? "input-incorrect"
                : ""
            }
          />
          <button type="submit">Submit</button>
        </div>
      </form>

      {/* Navigation buttons */}
      <div className="nav">
        <button onClick={prevCard} disabled={atStart}>⬅ Back</button>
        <button onClick={nextCard} disabled={atEnd}>Next ➡</button>
      </div>

      {/* Shuffle reorders the deck (Begin! stays first) and sends the user back to the start */}
      <div className="nav">
        <button onClick={shuffleDeck}>🔀 Shuffle</button>
      </div>

    </div>
  );
}

export default App
