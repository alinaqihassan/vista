import React, { useEffect, useState } from 'react';
import ProgressBar from '@/components/ProgressBar';
import Weather from '@/components/Weather';
import useBackgroundImage from '@/hooks/useBackgroundImage';

const App: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update time every second
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const photoLink = useBackgroundImage(time); // Get background image link
  const dayProgress = ((time.getHours() * 60 + time.getMinutes()) / 1440) * 100; // Calculate percentage of day passed;

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
          <a
            title="background"
            href={photoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            /background
          </a>
        </p>
        <p>
          <a
            title="github"
            href="https://github.com/shashiirk/vista"
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
