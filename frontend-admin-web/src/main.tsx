import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './style';
import QueryClientContext from './context/queryClientProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientContext>
    <React.StrictMode>
      <App />
      <GlobalStyle />
    </React.StrictMode>
  </QueryClientContext>
);
