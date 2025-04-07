import HomeScreen from './src/pages/home/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import LoginScreen from '@/pages/auth/LoginScreen';
import { PopUpWrapper } from '@/components';
import ShopScreen from '@/pages/home/ShopScreen';
import AccountScreen from '@/pages/home/AccountScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='Login'
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  )
};

const MainTabs = () => {
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
        <Tab.Navigator
          tabBar={() => <PopUpWrapper />}
          initialRouteName='Auth'
          screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Auth" component={AuthStack} />
          <Tab.Screen name="Main" component={MainTabs} />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}