import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { usePopupState } from '@/stores/state/PopupState';
import { useToastState } from '@/stores/state/ToastState';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { setPopTab1Active } = usePopupState();
  const { showToast } = useToastState();

  const handleOpenPopTab1 = () => {
    setPopTab1Active();
  };

  const handleShowToast = () => {
    console.log('showToast has been clicked');
    showToast({
      message: 'This is a sample toast message!',
      type: 'success',
      duration: 3000
    });
  };

  const handleLogout = () => {
    // Logout logic here
    navigation.navigate('Auth');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handleOpenPopTab1}
      >
        <Text style={styles.buttonText}>Open PopTab1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.toastButton]}
        onPress={handleShowToast}
      >
        <Text style={styles.buttonText}>Show Toast</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.logoutButton]}
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

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
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  toastButton: {
    backgroundColor: '#34C759',
  },
  logoutButton: {
    backgroundColor: '#FF3B30',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;