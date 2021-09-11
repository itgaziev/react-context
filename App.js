import React from 'react';
import Navigation from './src/Navigation';
import { Provider as AppProvider } from './src/context';
const App = () => (
  <AppProvider>
    <Navigation />
  </AppProvider>
)

export default App
