import { useState, useEffect } from 'react';

const TypewriterText = ({ text, speed = 70, delay = 0, className = "" }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setStartTyping(true);
    }, delay);
    
    return () => clearTimeout(delayTimer);
  }, [delay]);

  useEffect(() => {
    if (!startTyping) return;
    
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, speed);
      
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed, startTyping]);

  return (
    <span className={`font-mono ${className}`}>
      {displayedText}
      {currentIndex < text.length && <span className="inline-block w-2 h-4 bg-[#00F0FF] ml-1 animate-pulse"></span>}
    </span>
  );
};

export default TypewriterText;