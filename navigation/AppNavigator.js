import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import initialNavigator from './MainTabNavigator';
import HomeScreenV2 from '../screens/HomeScreen';
export default createAppContainer(createSwitchNavigator({
  Main: HomeScreenV2,
},{
  initialRouteName:'Main'
}
));
