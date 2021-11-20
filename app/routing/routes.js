/**
 * @author Amusoftech <er.amudeep@gmail.com>
 * @description List of routes for Tabs Navigator and Stack navigator, Along addational  Option for Tabs
 */
 import React from 'react';
import Home from '../screens/Home';
import {appColors} from '../utils/appColors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { scale } from 'react-native-size-matters'; 
import Jobs from '../screens/Jobs';
import Profile from '../screens/Profile/Profile';
export const RoutesList = [
  {
    name: 'Home',
    component: Home,
    options: {  
      tabBarIcon: (props)=> <Icon name="home" size={scale(30)} {...props} /> 
    },
  },
  {
    name: 'Jobs',
    component: Jobs,
    options: {  
      tabBarIcon: (props)=> <Icon name="record-voice-over" {...props} size={scale(25)}  /> 
    },
  },
  {
    name: 'Profile',
    component: Profile,
    options: {  
      tabBarIcon: (props)=> <FontAwesome5 name="user-alt" {...props} size={scale(20)}  /> 
    },
  },
  
];
