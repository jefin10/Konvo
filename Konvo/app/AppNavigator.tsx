import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login'; 
import Chat from './Chats'; 

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
