import React, { useState } from 'react';
import {View,Text,TextInput,TouchableOpacity,Image,StyleSheet,Alert,ScrollView,Dimensions,Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './App';
import { register } from '../src/api/api';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Register() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmarContraseña, setConfirmarContraseña] = useState('');
  const { width, height } = Dimensions.get('window');
  const isWide = width >= 768; // pantalla web/tablet

  const handleRegister = async () => {
    if (!name || !email || !password || !confirmarContraseña) {
      Alert.alert('Error', 'Por favor completa todos los campos.');
      return;
    }

    if (password !== confirmarContraseña) {
      Alert.alert('Error', 'Las contraseñas no coinciden.');
      return;
    }

    try {
      const response = await register(name, email, password, confirmarContraseña);
      console.log('Registro exitoso:', response);
      Alert.alert('Éxito', 'Cuenta creada con éxito');
      navigation.navigate('login');
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Error al registrarse');
    }
  };

  return (
    <ScrollView contentContainerStyle={[styles.scrollContainer, { minHeight: height }]}>
      <View
        style={[
          styles.container,
          {
            paddingHorizontal: isWide ? 48 : 20,
            maxWidth: isWide ? 700 : 400,
            width: '100%',
          },
        ]}
      >
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={28} color="#0B7D03" />
        </TouchableOpacity>

        <Image source={require('../assets/images/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Registro</Text>
        <Text style={styles.subtitle}>Crea tu cuenta llenando los siguientes datos.</Text>

        <Text style={styles.label}>Nombre</Text>
        <TextInput
          placeholder="Nombre"
          style={styles.input}
          placeholderTextColor="black"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Correo"
          style={styles.input}
          placeholderTextColor="black"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          placeholder="Contraseña"
          style={styles.input}
          placeholderTextColor="black"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Text style={styles.label}>Confirmar contraseña</Text>
        <TextInput
          placeholder="Confirma tu contraseña"
          style={styles.input}
          placeholderTextColor="black"
          secureTextEntry
          value={confirmarContraseña}
          onChangeText={setConfirmarContraseña}
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Crear cuenta</Text>
        </TouchableOpacity>

        <Text style={styles.loginText}>
          ¿Ya tienes una cuenta?{' '}
          <Text style={styles.loginLink} onPress={() => navigation.navigate('login')}>
            Inicia sesión
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignSelf: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
    backgroundColor: 'transparent',
    padding: 5,
  },
  logo: {
    width:140,
    height: 90,
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  title: { fontSize: 24, fontWeight: 'bold', marginTop: 10, color: '#000' },
  subtitle: { fontSize: 14, color: '#444', marginBottom: 20, textAlign: 'center' },
  label: {
    fontSize: 20,
    alignSelf: 'flex-start',
    marginLeft: 10,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  input: {
    width: '100%',
    height: 60,
    backgroundColor: '#CCE8D0',
    borderRadius: 8,
    paddingHorizontal: 15,
    color: 'black',
    marginTop: 5,
    marginVertical: 8,
    borderColor: 'black',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#00712D',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    maxWidth: 350,
    alignSelf: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  loginText: { marginTop: 20, color: '#444', textAlign: 'center' },
  loginLink: { color: 'green', fontWeight: 'bold' },
});
