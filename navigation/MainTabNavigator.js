import React from 'react';
import { Platform ,Image,View,TouchableOpacity} from 'react-native';
import { FontAwesome ,Ionicons,MaterialCommunityIcons,MaterialIcons,SimpleLineIcons,Entypo} from '@expo/vector-icons';

import { createAppContainer,createSwitchNavigator,withNavigation} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator,DrawerItems } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreenV2 from '../screens/HomeScreen';

const HomeStack = createStackNavigator(
  {
    HomeScreen:{
      screen: HomeScreenV2
    }
 },
 {
   initialRouteName: 'HomeScreen',
 }
)




const initialNavigator = createStackNavigator({
  navigate:HomeScreenV2,
})
export default initialNavigator
