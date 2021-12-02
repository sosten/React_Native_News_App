import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './Index';
import News from './News';
import Adverts from "./Adverts";
import Details from './Details';
import NavBar from './NavBar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavBar />
      <Adverts />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home" options={{ headerShown: false }}>
          <Stack.Screen name="home" component={Index}/>
          <Stack.Screen name="news" component={News}/>
          <Stack.Screen name="details" component={Details}/>
        </Stack.Navigator>
      </NavigationContainer>
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
