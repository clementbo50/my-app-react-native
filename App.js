import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Platform } from 'react-native';
import HomeScreen from './screens/HomeScreen';  
import AboutScreen from './screens/AboutScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const Home = () => (
  <Stack.Navigator>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="settings" component={SettingsScreen} />
  </Stack.Navigator>
)

export default function App() {
  return (
  <NavigationContainer>
{/*  Affiche la barre de navigation en haut de l'écran 
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="about" component={AboutScreen} />
      </Stack.Navigator> */}

      <Tabs.Navigator>
        <Tabs.Screen name="root" component={Home} />
        <Tabs.Screen name="about" component={AboutScreen} />       
      </Tabs.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});