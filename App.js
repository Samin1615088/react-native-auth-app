import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreateAccountScreen from './screens/CreateAccountScreen/CreateAccountScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import SignUpScreen from './screens/SignUpScreen/SignUpScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>All dependency is added. Home </Text>
      <StatusBar style="auto" />
      <CreateAccountScreen />
      <SignUpScreen />
      <HomeScreen />
    </View>
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
