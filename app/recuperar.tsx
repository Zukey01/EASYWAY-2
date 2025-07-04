import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './App';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Recuperar() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [reason, setReason] = useState('');
  const [email, setEmail] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={28} color="#0B7D03" />
        </TouchableOpacity>
        <Text style={styles.title}>Recuperar Contraseña</Text>
        <Text style={styles.label}>Correo electrónico</Text>
        <TextInput
          style={styles.input}
          placeholder="Introduce tu correo"
          placeholderTextColor="#666"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={styles.label}>¿Por qué deseas cambiar o recuperar tu contraseña?</Text>
        <TextInput
          style={[styles.input, { height: 80 }]}
          placeholder="Escribe tu razón aquí..."
          placeholderTextColor="#666"
          value={reason}
          onChangeText={setReason}
          multiline
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('nuevaContraseña')}
        >
          <Text style={styles.buttonText}>Nueva contraseña</Text>
        </TouchableOpacity>
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
    marginTop: 10,
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
});