import React from 'react';
import HomeScreen from './HomeScreen';
import RidingGear from './RidingGear';
import CameraScreen from './CameraScreen';
import TrekkingGear from './TrekkingGear';
import WinterWear from './WinterWear';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator>
     <Stack.Screen name="HomeScreen" component={HomeScreen}  options={{ headerShown: false }}/>
      <Stack.Screen name="CameraScreen" component={CameraScreen}  options={{ headerShown: false }}/>
      <Stack.Screen name="TrekkingGear" component={TrekkingGear}  options={{ headerShown: false }} />
        <Stack.Screen name="WinterWear" component={WinterWear}  options={{ headerShown: false }}/>
        <Stack.Screen name="RidingGear" component={RidingGear}  options={{ headerShown: false }}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
