/**
 * @author Amusoftech <er.amudeep@gmail.com>
 * @description List of routes for Tabs Navigator and Stack navigator, Along addational  Option for Tabs
 */
 import React from 'react';
import Home from '../screens/Home';
import {appColors} from '../utils/appColors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { scale } from 'react-native-size-matters'; 
import Jobs from '../screens/Jobs';
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
      tabBarIcon: (props)=> <Icon name="record-voice-over" size={scale(30)} {...props} /> 
    },
  },
  
];
