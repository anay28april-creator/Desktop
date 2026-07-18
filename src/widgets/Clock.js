import React, { useState, useEffect } from 'react';
import './Widget.css';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');
  const date = time.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="widget clock-widget">
      <h2>Clock</h2>
      <div className="clock-content">
        <div className="clock-time">
          {hours}:{minutes}:{seconds}
        </div>
        <div className="clock-date">{date}</div>
      </div>
    </div>
  );
}

export default Clock;
