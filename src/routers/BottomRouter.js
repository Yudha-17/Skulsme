import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import {colorLabel} from '../styles/Colors';

const Bottom = createBottomTabNavigator();

const BottomRouter = () => {
  return (
    <Bottom.Navigator
      initialRouteName='Home'
      tabBarOption={{activeTintColor: colorLabel}}
    >
      <Bottom.Screen
        name='Home'
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Beranda',
          tabBarIcon: ({color}) =>
            <FAIcon name='home' color={color} size={22} />,
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomRouter;
