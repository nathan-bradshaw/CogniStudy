import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import '../styles/MotivationalQuote.css';

const MotivationalQuote = () => {
  const motivationalQuotes = [
    "I won't do my best, I will do what is required. -Alex Hormozi",
    "The only way to do great work is to love what you do. -Steve Jobs",
    "Don't watch the clock; do what it does. Keep going. -Sam Levenson",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. -Winston Churchill",
    "The only limit to our realization of tomorrow will be our doubts of today. -Franklin D. Roosevelt",
    "Believe you can and you're halfway there. -Theodore Roosevelt",
    "Your time is limited, don't waste it living someone else's life. -Steve Jobs",
    "The only person you are destined to become is the person you decide to be. -Ralph Waldo Emerson",
    "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. -Roy T. Bennett",
    "Your attitude, not your aptitude, will determine your altitude. -Zig Ziglar",
    "Do not wait to strike till the iron is hot, but make it hot by striking. -William Butler Yeats",
    "It always seems impossible until it's done. -Nelson Mandela",
    "The only way to achieve the impossible is to believe it is possible. -Charles Kingsleigh",
    "The best way to predict the future is to create it. -Peter Drucker"
  ];

  const [quote, setQuote] = useState('');

  const getRandomIndex = () => Math.floor(Math.random() * motivationalQuotes.length);

  const changeQuote = () => {
    const randomIndex = getRandomIndex();
    setQuote(motivationalQuotes[randomIndex]);
  };

  useEffect(() => {
    // Change the quote on component mount
    changeQuote();

    // Change the quote when visibility changes
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        changeQuote();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <Draggable handle=".handle" bounds="body">
      <div className="motivational-quote-container">
        <h2 className="handle">Motivational Quote</h2>
        <p>{quote}</p>
      </div>
    </Draggable>
  );
};

export default MotivationalQuote;
