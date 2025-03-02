import React, { useState, useEffect } from 'react';

const Timer = ({ onTimeEnd }) => {
  const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 минут в секундах

  useEffect(() => {
    if (!timeLeft) {
      onTimeEnd && onTimeEnd();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeEnd]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
      <p className="text-orange-800">
        ⏰ Ваши результаты будут готовы через:{' '}
        <span className="font-bold">
          {minutes}:{seconds.toString().padStart(2, '0')}
        </span>
      </p>
    </div>
  );
};

export default Timer; 