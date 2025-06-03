import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from './App'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler'

export default function recuperar() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    

  return (
    <View style={styles.maincontainer}>

        <Image source={require('../assets/images/logo.png')} style={styles.logo} resizeMode="contain" />
        <Text style={styles.title}>Recuperar contraseña</Text>
        <Text style={styles.text1}>Olvidaste la contraseña de </Text><Text style={styles.texteasy}>¡Easy Way!</Text><Text style={styles.text3}>Por favor introduce tu nombre de usuario o email</Text>
        <Text style={styles.title}>Nombre de usuario o email</Text>
        <TextInput placeholder="email@example.com" style={styles.input} placeholderTextColor="black" secureTextEntry />
        <Text>Te enviaremos un codigo para la recuperacion de tu contraseña</Text>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    logo: { width: 100, height: 100, resizeMode: 'contain', marginBottom: 10 },
    maincontainer:{ flex: 1, padding: 20, paddingTop: 50, backgroundColor: '#fff', alignItems: 'center'},
    title: { fontSize: 27, fontWeight: 'bold' },
    texteasy: { fontWeight: 'bold', color: '#F5A623' },
    input: { width: '100%', height: 60, backgroundColor: '#CCE8D0', borderRadius: 8, paddingHorizontal: 15, color: 'black', marginTop: 5, marginVertical:12, borderColor: 'black' },
    button: { marginTop: 30, backgroundColor: '#00712D', paddingVertical: 15, paddingHorizontal: 40, borderRadius: 25, width: '100%', alignItems: 'center' },
    buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
})
