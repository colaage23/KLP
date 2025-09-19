import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import RootStacks from './src/Router/RootStacks';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <RootStacks />
    </NavigationContainer>
  );
}

export default App;
