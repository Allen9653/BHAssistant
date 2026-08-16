import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { injectSpeedInsights } from '@vercel/speed-insights';

// Inject Vercel Speed Insights for performance monitoring
injectSpeedInsights();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
