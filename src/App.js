import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import LandingScreen from './screens/Landing';

const RootStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Landing"
          component={LandingScreen}
        ></RootStack.Screen>
        <RootStack.Screen name="Home" component={HomeScreen}></RootStack.Screen>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
