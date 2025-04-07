import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import Animated, {
  useAnimatedStyle,
  withSpring,
  useSharedValue,
  withTiming,
  runOnJS
} from 'react-native-reanimated';
import { useBottomTabState } from '@/stores/state/BottomTabState';

const { height } = Dimensions.get('window');

const PopTab1 = () => {
  const { popTab1Active, setPopTab1Inactive } = useBottomTabState();

  // Shared value for the popup position
  const popupPosition = useSharedValue(popTab1Active ? 0 : height);

  // Update popup position when active state changes
  useEffect(() => {
    popupPosition.value = withSpring(
      popTab1Active ? 0 : height,
      { damping: 20, stiffness: 90 }
    );
  }, [popTab1Active]);

  // Animated style for the popup position
  const popupStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: popupPosition.value }]
    };
  });

  const handleClose = () => {
    setPopTab1Inactive();
  };

  return (
    <Animated.View style={[styles.container, popupStyle]}>
      <View style={styles.header}>
        <Text style={styles.title}>Pop Tab 1</Text>
        <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>✕</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.contentText}>
          This is a popup tab that slides up from the bottom of the screen.
          It can contain any content you want to display.
        </Text>
      </View>
    </Animated.View>
  )
}

export default PopTab1

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: height / 2,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 2000,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 5,
  },
  closeButtonText: {
    fontSize: 18,
    color: '#666',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
})