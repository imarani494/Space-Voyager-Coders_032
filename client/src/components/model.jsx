import { useState } from "react";
import "./model.css";

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        {question}
        <span className={isOpen ? "arrow rotate" : "arrow"}>▼</span>
      </button>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
};

function Model() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="model-container">
      <header className="model-header">
        <h1 className="headingofall">
          Play your favorite Ludo Games on PC & Mobile
        </h1>

        <div className="line-container">
          <div className="line"></div>
        </div>

        <div className="ludo-description">
          The traditional strategy board game Ludo can be played by two to four
          players solo or in teams. The Indian game Pachisi, which was popular
          in the sixth century, is where Ludo got its start. The game has gone
          viral and is played all over the world. Playing the board game with
          your family and friends is a great idea.
        </div>

        <div className="ludo-description">
          Ludo is also easier to play thanks to technological advancements; all
          you need is a computer or a mobile device. The ludo game’s rules are
          fairly straightforward and uncomplicated. Each of the four quadrants
          on the Ludo board is a different color: Red, Blue, Yellow, and Green.
          Each participant selects the color quadrant they want to use.
        </div>

        <div className="ludo-description">
          The chosen player then receives tokens of the same color as the
          selected quadrant, rolls the die, and takes turns completing the
          game’s objective. Each player in the Ludo game has four tokens, which
          they race from beginning to end with. Depending on the result of the
          die roll, the players move their tokens on the board.
        </div>

        <div className="ludo-description">
          The game is won by the first person to get all four tokens to the
          finish line. When moving their tokens in Ludo, players must use a lot
          of strategy and observation in addition to depending on the number
          they receive when rolling the dice.
        </div>

        <div className="center">
          <h2 className="htwoh">FAQs</h2>
          <div className="line-two"></div>
        </div>

        <div className="faq-section">
          <FAQ
            question="What are some most popular online Ludo games?"
            answer="Out of 1000+ online games available on now.gg, the most popular Ludo games in no particular order are: All these games can be played online for free, without any downloads or installs. You can also explore many more games from a variety of other genres."
          />
          <FAQ
            question="What kind of Ludo games can you play online?"
            answer="You can explore single and Ludo games from 25+ categories on now.gg. From Ludo, Arcade, PvP, to Strategy and Simulation, just pick your favorite title and start playing instantly without any download or install."
          />
          <FAQ
            question="How to play free online Ludo games?"
            answer="Playing free online Ludo games on now.gg is possible with a single click. Just pick your favorite game from any category on the website and start playing instantly."
          />
          <FAQ
            question="Are there any specific device requirements to play Ludo games online?"
            answer="You can play online Ludo games on any device with an internet connection and enjoy the best performance anywhere, anytime on now.gg."
          />
        </div>

        <div className="content-container">
          <div className="text-content">
            <p>{isExpanded && <span></span>}</p>
          </div>
          <div className="button-container">
            <button className="styled-button" onClick={toggleContent}>
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Model;
