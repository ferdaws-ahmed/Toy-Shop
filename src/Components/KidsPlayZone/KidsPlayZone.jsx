import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router";


const KidsPlayZone = () => {
  const [score, setScore] = useState(0);
  const [position, setPosition] = useState({ top: "50%", left: "50%" });
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameOver, setGameOver] = useState(false);

  const location = useLocation(); 

  
  useEffect(() => {
    if (timeLeft <= 0) {
      setGameOver(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

 
  const moveBall = () => {
    const randomTop = Math.random() * 80 + 10;
    const randomLeft = Math.random() * 80 + 10;
    setPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
  };

  const handleClick = () => {
    setScore(score + 1);
    moveBall();
  };

  const restartGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameOver(false);
    moveBall();
  };

 
  useEffect(() => {
    document.title = " ⚽ | Play Zone"; 
  }, [location.pathname]);

  return (
    <>
      <Helmet key={location.pathname}>
        <title> ⚽ | Play Zone</title>
      </Helmet>

      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-sky-200 to-pink-200 relative overflow-hidden">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">Kids Play Zone</h1>

        {!gameOver ? (
          <>
            <p className="text-lg font-semibold text-gray-700 mb-2">
              Time Left: <span className="text-red-500">{timeLeft}s</span>
            </p>
            <p className="text-lg font-semibold text-gray-700 mb-6">
              Score: <span className="text-green-600">{score}</span>
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
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Time's Up!</h2>
            <p className="text-xl mb-4">Your Final Score: {score}</p>
            <button
              onClick={restartGame}
              className="btn btn-primary font-bold px-5"
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
