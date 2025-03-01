import React, { useEffect, useState } from 'react';
import ProgressBar from '@/components/ProgressBar';
import Weather from '@/components/Weather';
import useBackgroundImage from '@/hooks/useBackgroundImage';

const App: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const photoLink = useBackgroundImage(time);
  const dayProgress = ((time.getHours() * 60 + time.getMinutes()) / 1440) * 100;

  return (
    <div className="app">
      <Weather />

      <div className="hero">
        <div className="date-container">
          <p>
            {time.toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'short',
              day: 'numeric',
            })}
          </p>
          <h1>
            {time.toLocaleTimeString('en-GB', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </h1>
        </div>

        <ProgressBar progress={dayProgress} />
      </div>

      <div className="footer">
        <p>
          <a href={photoLink} target="_blank" rel="noopener noreferrer">
            /photo
          </a>
        </p>
        <p>
          <a
            href="https://github.com/shashiirk/rhythm"
            target="_blank"
            rel="noopener noreferrer"
          >
            /github
          </a>
        </p>
      </div>
    </div>
  );
};

export default App;
