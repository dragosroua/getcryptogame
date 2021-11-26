
import React, {useState} from 'react';
import  {AppRegistry, useWindowDimensions, StyleSheet, View, Defaults } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DashboardStack from './app/DashboardStack';
import 'react-native-gesture-handler';



const GetCryptoGame = createStackNavigator({
  dashboardStack: {screen: DashboardStack, navigationOptions: {headerShown: false} }
},
{
	initialRouteName: 'dashboardStack',

});

const AppContainer = createAppContainer(GetCryptoGame);

const App: () => React$Node = () => {

  const window = useWindowDimensions();
  
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
