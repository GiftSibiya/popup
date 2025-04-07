import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useBottomTabState } from '@/stores/state/BottomTabState';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { setBottomTabInactive } = useBottomTabState();

  const handleLogout = () => {
    // Set bottom tab to inactive (will slide down)
    setBottomTabInactive();

    // Navigate back to Auth screen
    navigation.navigate('Auth');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}
      >
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  logoutButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
})