import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Adverts from "./Adverts";
import NavBar from './Components/NavBar';
import HomeScreen from './Screens/HomeScreen';
import DetailsScreen from './Screens/DetailsScreen';
import Spiner from './Components/Spiner';
import SportsScreen from './Screens/SportsScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavBar />
      <Adverts />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="home" component={HomeScreen}/>
          <Stack.Screen name="sports" component={SportsScreen}/>
          <Stack.Screen name="details" component={DetailsScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
      <Spiner />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#7777',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
