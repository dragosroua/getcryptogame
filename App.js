
import React, {useState} from 'react';
import  {AppRegistry, useWindowDimensions, StyleSheet, View, Defaults } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';
import DashboardStack from './app/DashboardStack';
//import store from './app/store/store.js'
import 'react-native-gesture-handler';
import KeepAwake from 'react-native-keep-awake';



const GetCryptoGame = createStackNavigator({
  dashboardStack: {screen: DashboardStack, navigationOptions: {headerShown: false} }
},
{
	initialRouteName: 'dashboardStack',

});

const AppContainer = createAppContainer(GetCryptoGame);

const App: () => React$Node = () => {

  const window = useWindowDimensions();
  
  KeepAwake.activate()
  
  return(
    
      
        <View style={styles.container}>
          <AppContainer/>
        </View>
      
    
    
  );	
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;

AppRegistry.registerComponent('GetCryptoGame', () => App)
