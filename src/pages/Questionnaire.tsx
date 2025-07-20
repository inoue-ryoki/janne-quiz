import { useState } from "react";
import { questions } from "../data/questions";
import { getRecommendedSongs } from "../utils/getRecommendedSongs";
import { Song } from "../data/songs";

const Questionnaire = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<Song[] | null>(null);

  const currentQuestion = questions[step];

  const handleAnswer = (value: string) => {
    const updated = { ...answers, [currentQuestion.id]: value };
    setAnswers(updated);

    if (step + 1 >= questions.length) {
      setResult(getRecommendedSongs(updated));
    } else {
      setStep(step + 1);
    }
  };

  if (result) {
    return (
      <div>
        <h2>あなたにおすすめのJanne Da Arcの曲</h2>
        <ul>
          {result.map((song) => (
            <li key={song.id}>
              <h3>{song.title}</h3>
              <p>{song.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <h2>{currentQuestion.question}</h2>
      {currentQuestion.options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => handleAnswer(opt.value)}
          style={{ display: "block", margin: "8px 0" }}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
};

export default Questionnaire;
