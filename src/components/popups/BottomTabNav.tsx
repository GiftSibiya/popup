import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Dimensions, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import Animated, {
  useAnimatedStyle,
  withSpring,
  interpolateColor,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const TAB_WIDTH = width / 3;

const BottomTabNav = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState(0);

  // Shared values for animations
  const indicatorPosition = useSharedValue(0);
  const scaleValues = [
    useSharedValue(1),
    useSharedValue(1),
    useSharedValue(1)
  ];

  const tabs = [
    { name: 'Home', icon: 'home' as const, component: 'Home', iconSet: Feather },
    { name: 'Shop', icon: 'shopping-bag' as const, component: 'Shop', iconSet: Feather },
    { name: 'Account', icon: 'user' as const, component: 'Account', iconSet: Feather },
  ];

  const handleTabPress = (index: number, route: string) => {
    // Animate the indicator position
    indicatorPosition.value = withSpring(index * TAB_WIDTH, {
      damping: 20,
      stiffness: 90
    });

    // Animate the scale of the pressed tab
    scaleValues[index].value = withTiming(0.9, { duration: 100 }, () => {
      scaleValues[index].value = withTiming(1, { duration: 100 });
    });

    setActiveTab(index);
    navigation.navigate('Main', { screen: route });
  };

  // Animated styles for the indicator
  const indicatorStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: indicatorPosition.value }]
    };
  });

  // Create animated styles for each tab
  const getAnimatedStyle = (index: number) => {
    return useAnimatedStyle(() => {
      return {
        transform: [{ scale: scaleValues[index].value }]
      };
    });
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.indicator, indicatorStyle]} />
      {tabs.map((tab, index) => {
        const Icon = tab.iconSet;
        const animatedStyle = getAnimatedStyle(index);

        return (
          <TouchableOpacity
            key={tab.name}
            style={styles.tab}
            onPress={() => handleTabPress(index, tab.component)}
          >
            <Animated.View style={animatedStyle}>
              <Icon
                name={tab.icon}
                size={24}
                color={activeTab === index ? '#007AFF' : '#8E8E93'}
              />
              <View style={styles.labelContainer}>
                <Text
                  style={[
                    styles.label,
                    { color: activeTab === index ? '#007AFF' : '#8E8E93' }
                  ]}
                >
                  {tab.name}
                </Text>
              </View>
            </Animated.View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomTabNav;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    flexDirection: 'row',
    height: 80,
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelContainer: {
    marginTop: 4,
  },
  label: {
    fontSize: 12,
  },
  indicator: {
    position: 'absolute',
    width: TAB_WIDTH,
    height: 3,
    backgroundColor: '#007AFF',
    bottom: 0,
  },
});