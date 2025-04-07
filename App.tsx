import React, { useEffect } from 'react';
import HomeScreen from './src/pages/home/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import LoginScreen from '@/pages/auth/LoginScreen';
import ShopScreen from '@/pages/home/ShopScreen';
import AccountScreen from '@/pages/home/AccountScreen';
import BottomTabNav from '@/components/popups/BottomTabNav';
import PopTab1 from '@/components/popups/PopTab1';
import { useBottomTabState } from '@/stores/state/BottomTabState';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AuthStack = () => {
  const { setBottomTabInactive } = useBottomTabState();

  useEffect(() => {
    setBottomTabInactive();
  }, []);

  return (
    <Stack.Navigator initialRouteName='Login'
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  )
};

const MainTabs = () => {
  const { setBottomTabActive } = useBottomTabState();

  useEffect(() => {
    setBottomTabActive();
  }, []);

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={() => { return null }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Shop" component={ShopScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  )
};

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Auth" component={AuthStack} />
          <Stack.Screen name="Main" component={MainTabs} />
        </Stack.Navigator>
        <BottomTabNav />
        <PopTab1 />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}