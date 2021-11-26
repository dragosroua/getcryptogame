import React, { Component, Animated } from 'react';
import {AppRegistry} from 'react-native';
import {
  StyleSheet,
  Text,
  Image,
  Alert,
  View, Modal, TouchableOpacity
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import DashboardScreen from './DashboardScreen';
import StartGameScreen from './StartGameScreen';
import HistoryScreen from './HistoryScreen';

const DashboardStack = createStackNavigator(
    {
	  dashboard: { screen: DashboardScreen, navigationOptions: { headerTintColor: '#C50300'} },
	  startNewGame: { screen: StartGameScreen, navigationOptions: { headerTintColor: '#C50300'} },
	  history: { screen: HistoryScreen, navigationOptions: { headerTintColor: '#C50300'} },
	},
	{initialRouteName: 'dashboard',
	defaultNavigationOptions: {
		headerTintColor: '#C50300',
		headerTitle: () => <Text style={{color: '#FFFFFF'}}>Get Crypto Game</Text>
	},
	}
    );

export default DashboardStack;

