import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Intro from '../screens/splash/Intro';
import BottomRouter from './BottomRouter';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="IntroScreen">
      <Stack.Screen
        name="IntroScreen"
        component={Intro}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={BottomRouter}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
