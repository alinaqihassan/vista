import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/global.css';
import App from './App';

// Fun console message for devs inspecting the console
console.log(
  '%cACCESS GRANTED: Welcome to Vista-fork',
  'color: #00ff00; font-size: 16px; font-weight: bold; font-family: monospace; text-shadow: 0px 0px 5px #00ff00; background: black; padding: 8px;'
);
console.log(
  '%c 👨‍💻 alinaqihassan | GitHub: https://github.com/alinaqihassan',
  'color: lime; font-size: 12px; font-family: monospace;'
);

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error('Failed to find the root element');
}
