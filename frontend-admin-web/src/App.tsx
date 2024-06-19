import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { Suspense } from 'react';

const App = () => {

  return (
    <Suspense fallback={<>loading..</>}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
