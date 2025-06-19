import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './index';
import LoginScreen from './login';
import RegisterScreen from './register';
import RecuperarScreen from './recuperar';
import DashboardScreen from './dashboard'; 
import Index2Screen from './index2';
import NuevaContraseñaScreen from './nuevaContraseña';
import ProfileScreen from './profile';
import ContactoScreen from './contacto';
import NotificacionesScreen from './notificaciones';
import ReportarIncidenteScreen from './reportarIncidente';


export type RootStackParamList = {
  index: undefined;
  login: undefined;
  register: undefined;
  recuperar: undefined; 
  nuevaContra: undefined;
  dashboard: undefined;
  profile: undefined;   
  index2: undefined;
  nuevaContraseña: undefined;
  contacto: undefined;
  notificaciones: undefined;
  reportarIncidente: undefined;
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
        <Stack.Screen name="nuevaContraseña" component={NuevaContraseñaScreen} />
        <Stack.Screen name="dashboard" component={DashboardScreen} />
        <Stack.Screen name="index2" component={Index2Screen}/>
        <Stack.Screen name="profile" component={ProfileScreen}/>
        <Stack.Screen name="contacto" component={ContactoScreen}/>
        <Stack.Screen name="notificaciones" component={NotificacionesScreen}/>
        <Stack.Screen name="reportarIncidente" component={ReportarIncidenteScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}