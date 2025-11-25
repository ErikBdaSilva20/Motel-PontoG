import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Switch } from 'wouter';
import { theme } from './theme';
import { GlobalStyles } from './GlobalStyles';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Switch>
        <Route path="/" component={Home} />
        <Route component={Home} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
