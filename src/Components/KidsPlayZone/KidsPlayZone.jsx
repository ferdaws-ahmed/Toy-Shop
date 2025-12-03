import React, { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router";
import { ThemeContext } from '../../Components/ThemeContext/ThemeContext';

const KidsPlayZone = () => {
  const { theme } = useContext(ThemeContext); 
  const [score, setScore] = useState(0);
  const [position, setPosition] = useState({ top: "50%", left: "50%" });
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameOver, setGameOver] = useState(false);
  const location = useLocation();

  // Timer logic
  useEffect(() => {
    if (gameOver) return;
    if (timeLeft <= 0) {
      setGameOver(true);
      return;
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, gameOver]);

  // Move ball randomly
  const moveBall = () => {
    const randomTop = Math.random() * 80 + 10;
    const randomLeft = Math.random() * 80 + 10;
    setPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
  };

  // On click
  const handleClick = () => {
    setScore((prev) => prev + 1);
    moveBall();
  };

  // Restart game
  const restartGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameOver(false);
    moveBall();
  };

  // Update document title
  useEffect(() => {
    document.title = " ⚽ | Play Zone";
  }, [location.pathname]);

  // Background gradient based on theme
  const bgGradient =
    theme === "dark"
      ? "bg-gradient-to-r from-gray-800 via-gray-900 to-black"
      : "bg-gradient-to-r from-sky-200 to-pink-200";

  const textColor = theme === "dark" ? "text-white" : "text-gray-700";

  return (
    <>
      <Helmet key={location.pathname}>
        <title> ⚽ | Play Zone</title>
      </Helmet>

      <div className={`min-h-screen flex flex-col justify-center items-center relative overflow-hidden ${bgGradient}`}>
        <h1 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-yellow-400' : 'text-blue-700'}`}>Kids Play Zone</h1>

        {!gameOver ? (
          <>
            <p className={`text-lg font-semibold mb-2 ${textColor}`}>
              Time Left: <span className="text-red-500">{timeLeft}s</span>
            </p>
            <p className={`text-lg font-semibold mb-6 ${textColor}`}>
              Score: <span className="text-green-400">{score}</span>
            </p>

            <div
              onClick={handleClick}
              className="absolute w-16 h-16 bg-yellow-400 rounded-full shadow-lg cursor-pointer transition-all duration-300 hover:scale-110"
              style={{
                top: position.top,
                left: position.left,
                transform: "translate(-50%, -50%)",
              }}
            ></div>
          </>
        ) : (
          <div className={`text-center ${textColor}`}>
            <h2 className="text-2xl font-bold text-red-500 mb-4">Time's Up!</h2>
            <p className="text-xl mb-4">Your Final Score: {score}</p>
            <button
              onClick={restartGame}
              className={`btn btn-primary font-bold px-5 ${theme === 'dark' ? 'btn-outline text-yellow-400 border-yellow-400' : ''}`}
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default KidsPlayZone;
