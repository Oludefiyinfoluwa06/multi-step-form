import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StepProvider } from './contexts/StepContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StepProvider totalSteps={5}>
      <App />
    </StepProvider>
  </React.StrictMode>
);
