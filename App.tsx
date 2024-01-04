import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigator} from './src/apps/auth/navigation/AuthNavigator';
import {Provider} from 'react-redux';
import { store } from './src/store';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <AuthNavigator />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
