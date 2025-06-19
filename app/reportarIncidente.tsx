import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './App';

export default function reportarIncidente() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { height, width } = Dimensions.get('window');

  return (
    <ScrollView contentContainerStyle={[styles.scrollContainer, { minHeight: height }]}>
      
      {/* Encabezado */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={28} color="#0B7D03" />
        </TouchableOpacity>
        <Text style={styles.title}>Reportar Incidentes</Text>
      </View>

      {/* Contenido principal */}
      <View style={styles.container}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        {/* Aquí empiezas a diseñar el perfil */}

        <Text>SIN</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  header: {
    position: 'relative',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    marginBottom: 20,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 30,
    padding: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
});
