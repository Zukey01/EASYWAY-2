import React from 'react';
import {
  View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Dimensions
} from 'react-native';
import { Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons';
import BottomSheet from '@gorhom/bottom-sheet'; 
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function Dashboard() {
  const snapPoints = ['25%', '60%', '95%'];
    const navigation = useNavigation();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('index2')}>
            <Entypo name="menu" size={24} color="#000" />
          </TouchableOpacity>
          <View style={styles.profileCircle}>
            <Text style={styles.profileInitial}>J</Text>
          </View>
        </View>

        {/* Mapa */}
        <View style={styles.mapPlaceholder}>
          <Text style={styles.mapText}>Mapa API</Text>
        </View>

        {/* Panel deslizable */}
        <BottomSheet
          snapPoints={snapPoints}
          index={1}
          enablePanDownToClose={false}
          backgroundStyle={styles.bottomContainer}
          handleIndicatorStyle={styles.dragHandle}
        >
          <ScrollView contentContainerStyle={styles.scrollContent}>
            {/* Buscador */}
            <View style={styles.searchBar}>
              <Ionicons name="search" size={20} color="#555" style={styles.searchIcon} />
              <TextInput placeholder="¿A dónde quieres ir?" placeholderTextColor="#555" style={styles.input} />
              <Ionicons name="mic" size={20} color="#555" style={styles.micIcon} />
            </View>

            {/* Botones rápidos */}
            <View style={styles.quickButtons}>
              {['Casa', 'Escuela', 'Trabajo', 'Añadir otro'].map((label, index) => (
                <TouchableOpacity key={index} style={styles.tagButton}>
                  <MaterialIcons name="place" size={14} color="#000" />
                  <Text style={styles.tagText}>{label}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Últimas rutas */}
            <Text style={styles.sectionTitle}>Tus últimas rutas</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.routeList}>
              {[1, 2, 3].map((item) => (
                <View key={item} style={styles.routePlaceholder}>
                  <Text style={styles.routeText}>Mapa API</Text>
                </View>
              ))}
            </ScrollView>

            {/* Notificaciones */}
            {[1, 2, 3, 4].map((i) => (
              <View style={styles.notifications} key={i}>
                <Text style={styles.notificationsTitle}>NOTIFICACIONES DE SEGURIDAD</Text>
                <Text style={styles.notificationItem}>⚠️ ¡Atención! Incidentes reportados en tu ruta frecuente.</Text>
              </View>
            ))}
          </ScrollView>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  header: {
    position: 'absolute',
    top: 40,
    left: 20,
    right: 20,
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuButton: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  profileCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInitial: { color: '#fff', fontWeight: 'bold', fontSize: 16 },

  mapPlaceholder: {
    flex: 1,
    backgroundColor: '#d0e6d7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapText: { color: '#777', fontSize: 16, fontStyle: 'italic' },

  bottomContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
  },
  dragHandle: {
    backgroundColor: '#444',
    width: 40,
    height: 5,
    borderRadius: 3,
    alignSelf: 'center',
    marginVertical: 8,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 30,
  },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EAF5EC',
    borderRadius: 20,
    paddingHorizontal: 12,
    marginBottom: 12,
    height: 40,
  },
  searchIcon: { marginRight: 8 },
  micIcon: { marginLeft: 8 },
  input: {
    flex: 1,
    height: 40,
    color: '#000',
  },

  quickButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginVertical: 10,
  },
  tagButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EAF5EC',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: { marginLeft: 4, color: '#000' },

  sectionTitle: { fontWeight: 'bold', fontSize: 16, marginTop: 10, marginBottom: 5 },

  routeList: { flexDirection: 'row' },
  routePlaceholder: {
    width: 120,
    height: 90,
    backgroundColor: '#d0e6d7',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  routeText: { color: '#777', fontSize: 14, fontStyle: 'italic' },

  notifications: {
    marginTop: 20,
    backgroundColor: '#EAF5EC',
    borderRadius: 10,
    padding: 10,
  },
  notificationsTitle: { fontWeight: 'bold', color: '#2C6B34', marginBottom: 4 },
  notificationItem: { fontSize: 14, color: '#333' },
});