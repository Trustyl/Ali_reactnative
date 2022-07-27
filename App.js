import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './src/Screens/Screen1';
import Screen2 from './src/Screens/Screen2';
import Screen3 from './src/Screens/Screen3'

import Unsolvable from './src/Screens/Screen4'
import Screen5 from './src/Screens/Screen5'
import Screen6 from './src/Screens/Screen6'


export default function Router() {
  //This function is used to connect a createNativestacknavigator
  const Stack = createNativeStackNavigator();


  //This code is used for Routing/navigation in the app
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Paragraph"}>
        <Stack.Screen name="Setup" component={Screen1} options={{ title: 'Overview', headerShown: false }} />
        <Stack.Screen name="Worries" component={Screen2} options={{ title: 'Overview', headerShown: false }} />
        <Stack.Screen name="form" component={Screen3} options={{ title: 'Overview', headerShown: false }} />
        <Stack.Screen name="Unsolvable" component={Unsolvable} options={{ title: 'Overview', headerShown: false }} />
        <Stack.Screen name="form2" component={Screen5} options={{ title: 'Overview', headerShown: false }} />
        <Stack.Screen name="Paragraph" component={Screen6} options={{ title: 'Overview', headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};
