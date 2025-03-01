import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/global.css';
import App from './App';

console.log(
  '%cACCESS GRANTED: Welcome to Rhythm',
  'color: #00ff00; font-size: 16px; font-weight: bold; font-family: monospace; text-shadow: 0px 0px 5px #00ff00; background: black; padding: 8px;'
);
console.log(
  '%c 👨‍💻 Shashikanth | Portfolio: https://shashikanth.dev',
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
