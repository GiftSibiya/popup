import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Dimensions, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const TAB_WIDTH = width / 3;

const BottomTabNav = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: 'Home', icon: 'home', component: 'Home', iconSet: Feather },
    { name: 'Shop', icon: 'shopping-bag', component: 'Shop', iconSet: Feather },
    { name: 'Account', icon: 'user', component: 'Account', iconSet: Feather },
  ];

  const handleTabPress = (index: number, route: string) => {
    setActiveTab(index);
    navigation.navigate('Main', { screen: route });
  };

  return (
    <View style={styles.container}>
      <View style={[styles.indicator, { left: activeTab * TAB_WIDTH }]} />
      {tabs.map((tab, index) => {
        const Icon = tab.iconSet;
        return (
          <TouchableOpacity
            key={tab.name}
            style={styles.tab}
            onPress={() => handleTabPress(index, tab.component)}
          >
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