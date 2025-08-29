import React, { useEffect, useState } from 'react';
import ProgressBar from '@/components/ProgressBar';
import Weather from '@/components/Weather';
import useBackgroundImage from '@/hooks/useBackgroundImage';

const App: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const { imageUrl, photoLink } = useBackgroundImage(); // Fetch dynamic background

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const dayProgress = ((time.getHours() * 60 + time.getMinutes()) / 1440) * 100; // Calculate day progress %

  return (
    <div className="app" style={{ backgroundImage: `url(${imageUrl})` }}>
      <Weather />

      <div className="hero">
        <div className="date-container">
          <strong><h3>
            {time.toLocaleDateString('en-GB', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </h3></strong>
          <h1>
            {time.toLocaleTimeString('en-GB', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </h1>
        </div>

        <ProgressBar progress={dayProgress} />
      </div>

      <footer className="footer">
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
            href="https://github.com/alinaqihassan/vista-fork"
            target="_blank"
            rel="noopener noreferrer"
          >
            /github
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
