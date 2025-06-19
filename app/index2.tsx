import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  ScrollView,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function Index2() {
  const navigation = useNavigation();
  const { height } = Dimensions.get('window');

  return (
    <ScrollView contentContainerStyle={[styles.scrollContainer, { minHeight: height }]}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={28} color="#0B7D03" />
      </TouchableOpacity>

      <View style={styles.maincontainer}>
        <View style={styles.containerone}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.brand}>¡HOLA, VIAJERO!</Text>
          <TouchableOpacity
            style={styles.buttonperfil}
            onPress={() => navigation.navigate('profile')}>
            <Text style={styles.buttontext}>Ver perfil</Text>
          </TouchableOpacity>
          <Text style={styles.line}>
            ___________________________________________________
          </Text>
        </View>

        <View style={styles.containerdos}>
          <View style={styles.contenedor}>
            <Ionicons name="car-outline" size={40} color="#0B7D03" />
            <TouchableOpacity style={styles.botom} onPress={() => navigation.navigate('reportarIncidente')}>
              <Text style={styles.botomText}>Reportar incidente</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.contenedor}>
            <Ionicons name="notifications-outline" size={40} color="#0B7D03" />
            <TouchableOpacity style={styles.botom} onPress={() => navigation.navigate('notificaciones')}>
              <Text style={styles.botomText}>Bandeja de notificación</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.contenedor}>
            <Ionicons name="settings-outline" size={40} color="#0B7D03" />
            <TouchableOpacity style={styles.botom}>
              <Text style={styles.botomText}>Ajustes</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.contenedor}>
            <Ionicons name="help-circle-outline" size={40} color="#0B7D03" />
            <TouchableOpacity style={styles.botom} onPress={() => navigation.navigate('contacto')}>
              <Text style={styles.botomText}>Contacto</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.contenedor}>
            <Ionicons name="exit-outline" size={40} color="#0B7D03" />
            <TouchableOpacity style={styles.botom} onPress={() => navigation.navigate('login')}>
              <Text style={styles.botomText}>Log out</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  maincontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
    backgroundColor: 'transparent',
    padding: 5,
  },
  containerone: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },
  logo: {
    width: 150,
    height: 150,
  },
  brand: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonperfil: {
    marginTop: 16,
    backgroundColor: '#0B7D03',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 20,
    width: '70%',
    alignItems: 'center',
    maxWidth: 350,
  },
  buttontext: {
    color: '#fff',
    fontWeight: 'bold',
  },
  line: {
    fontWeight: 'bold',
    marginTop: 10,
    color: '#ccc',
  },
  containerdos: {
    marginTop: 40,
  },
  contenedor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    gap: 10, // Si esto da error, puedes usar marginRight en el ícono
  },
  botom: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  botomText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
