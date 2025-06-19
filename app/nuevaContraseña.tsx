import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './App';
import Icon from 'react-native-vector-icons/Ionicons';

export default function NuevaContraseña() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [oldPassword, setOldPassword] = useState('');
  const [noOldPassword, setNoOldPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChangePassword = () => {
    if (!noOldPassword && oldPassword.trim() === '') {
      Alert.alert('Error', 'Por favor ingresa tu antigua contraseña o selecciona "No la tengo".');
      return;
    }
    if (newPassword.trim() === '' || confirmPassword.trim() === '') {
      Alert.alert('Error', 'Por favor ingresa y confirma tu nueva contraseña.');
      return;
    }
    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden.');
      return;
    }
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      navigation.navigate('login');
    }, 2000);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={28} color="#0B7D03" />
        </TouchableOpacity>
        <Text style={styles.title}>Nueva Contraseña</Text>
        {!noOldPassword && (
          <>
            <Text style={styles.label}>Antigua contraseña</Text>
            <TextInput
              style={styles.input}
              placeholder="Introduce tu antigua contraseña"
              placeholderTextColor="#666"
              secureTextEntry
              value={oldPassword}
              onChangeText={setOldPassword}
            />
            <TouchableOpacity onPress={() => setNoOldPassword(true)}>
              <Text style={styles.link}>No la tengo</Text>
            </TouchableOpacity>
          </>
        )}
        {noOldPassword && (
          <TouchableOpacity onPress={() => setNoOldPassword(false)}>
            <Text style={styles.link}>Sí la recuerdo</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.label}>Nueva contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Introduce tu nueva contraseña"
          placeholderTextColor="#666"
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
        />
        <Text style={styles.label}>Confirmar nueva contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirma tu nueva contraseña"
          placeholderTextColor="#666"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
          <Text style={styles.buttonText}>Cambiar contraseña</Text>
        </TouchableOpacity>
        {success && (
          <Text style={styles.successText}>¡Contraseña cambiada con éxito! Redirigiendo al inicio de sesión...</Text>
        )}
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
    padding: 24,
    alignItems: 'center',
    maxWidth: 400,
    alignSelf: 'center',
    width: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 0,
    zIndex: 10,
    backgroundColor: 'transparent',
    padding: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#0B7D03',
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: 10,
    marginBottom: 4,
    color: '#222',
  },
  input: {
    width: '100%',
    backgroundColor: '#e6f4ea',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 10,
    color: '#222',
  },
  button: {
    backgroundColor: '#0B7D03',
    paddingVertical: 14,
    borderRadius: 25,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    maxWidth: 350,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  link: {
    color: '#0B7D03',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 10,
    marginTop: 5,
    textAlign: 'center',
  },
  successText: {
    color: '#0B7D03',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
  },
});