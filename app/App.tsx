// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../app/index';
import LoginScreen from '../app/login';
import RegisterScreen from '../app/register';
import RecuperarScreen from '../app/recuperar';
import ProfileScreen from '../app/profile';

export type RootStackParamList = {
  index: undefined;
  login: undefined;
  register: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="index" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" component={WelcomeScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="register" component={RegisterScreen} />
        <Stack.Screen name="recuperar" component={RecuperarScreen} />
        <Stack.Screen name="profile" component={ProfileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
