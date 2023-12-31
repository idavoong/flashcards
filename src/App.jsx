import "./App.css";
import { useState } from "react";

function App() {
  const [card, setCard] = useState(0);
  const [flip, setFlip] = useState(false);
  const data = [
    { q: "What has more energy ADP ot ATP?", a: "ATP" },
    { q: "How many chromosomes are in all human cells?", a: "46" },
    { q: "What is a family tree?", a: "Pedigree" },
    { q: "What is a constriction on a chromosome bound to a disk?", a: "Cenromere" },
    { q: "Are hydrogen bonds weak or strong?", a: "Weak" },
    { q: "How does the water get to the leaf?", a: "Xylem" },
    { q: "What is the process of cell division?", a: "Mitosis" },
    { q: "What is any alternate version of a gene?", a: "Allele" },
    { q: "Does chromosomes replication take place during interphase?", a: "No" },
    { q: "Is pH2 more acidic than pH8?", a: "No" },
    { q: "What is the product of the Calvin Cycle?", a: "Glucose" },
    { q: "Are the Centrioles outside of the nuclear membrane or the inside?", a: "Outside"},
  ];

  function handleNextCard() {
    if (card == data.length - 1) {
      setCard(0);
    } else {
      setCard(card + 1);
    }
    setFlip(false);
  }

  return (
    <div className="App">
      <h1>General Biology Flashcards</h1>
      <h3>Test your knowledge on general biology!</h3>
      <h3>Number of cards: {data.length}</h3>
      <div className={!flip ? "flashcard q" : "flashcard a"} onClick={() => setFlip(!flip)}>
        <div className={flip ? "hide" : "blur"}>{data[card].q}</div>
        <div className={!flip ? "hide" : "blur"}>{data[card].a}</div>
      </div>
      <div className="navigation">
        <button className="button right" onClick={handleNextCard}>➡</button>
      </div>
    </div>
  );
}

export default App;
