// login.tsx
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './App';

export default function Login() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Inicio de Sesion</Text>
      <Text style={styles.subtitle}>Inicia sesion con tu cuenta de Easy Way.</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput placeholder="Introduce tu correo" style={styles.input} placeholderTextColor="black" keyboardType="email-address" />

      <Text style={styles.label}>Contraseña</Text>
      <TextInput placeholder="Introduce tu contraseña" style={styles.input} placeholderTextColor="black" secureTextEntry />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      <Text style={styles.loginText}>¿Olvidaste tu contraseña? <Text style={styles.loginLink} onPress={() => navigation.navigate('')}>
        Recuperar</Text></Text>
      <Text style={styles.linea}>____________________________________</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Iniciar sesión con Google</Text>
      </TouchableOpacity>

      <Text style={styles.loginText}>
        ¿No tienes cuenta?{' '}
        <Text style={styles.loginLink} onPress={() => navigation.navigate('register')}>
          Regístrate
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 50, backgroundColor: '#fff', alignItems: 'center' },
  logo: { width: 100, height: 100, resizeMode: 'contain', marginBottom: 10 },
  title: { fontSize: 24, fontWeight: 'bold', marginTop: 10, color: '#000' },
  subtitle: { fontSize: 14, color: '#444', marginBottom: 20, textAlign: 'center' },
  label: { fontSize: 20, alignSelf: 'flex-start', marginLeft: 10, fontWeight: 'bold', color: 'black', marginTop: 10 },
  input: { width: '100%', height: 60, backgroundColor: '#CCE8D0', borderRadius: 8, paddingHorizontal: 15, color: 'black', marginTop: 5, marginVertical:8, borderColor: 'black' },
  button: { marginTop: 30, backgroundColor: '#00712D', paddingVertical: 15, paddingHorizontal: 40, borderRadius: 25, width: '100%', alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  linea: { marginTop: 20, color: 'grey', fontSize: 20 },
  loginText: { marginTop: 20, color: '#444' },
  loginLink: { color: 'green', fontWeight: 'bold' },
});
