import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './routers/Router';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='#fff'
      />
      <Router />
    </NavigationContainer>
  );
};

export default App;
