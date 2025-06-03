import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './App';

export default function Profule() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.maincontainer}>
      <Text>Acerca de ti</Text>
      <View style={styles.acerca}>
        <Text style={styles.label}>Nombre</Text>
         <TextInput placeholder="Nombre" style={styles.input} placeholderTextColor="black" />
         <Text>Otros usuarios podran ver tu nombre de usuario y avatar</Text>
      </View>
      <View>
        <Text style={styles.label}>Datos de acceso</Text>
        <Text>Correo </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    input: { width: '100%', height: 60, backgroundColor: '#CCE8D0', borderRadius: 8, paddingHorizontal: 15, color: 'black', marginTop: 5, marginVertical:12, borderColor: 'black' },
    label:{ fontSize: 20, alignSelf: 'flex-start', marginLeft: 10, fontWeight: 'bold', color: 'black', marginTop: 10 },
    acerca:{alignItems:'row', justifyContent: 'space-between', marginTop: 20, width: '100%', paddingHorizontal: 20},
})