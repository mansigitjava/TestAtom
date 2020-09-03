import { StatusBar } from 'expo-status-bar';
import AppNavigator from './navigation/AppNavigator';
import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar backgroundColor="black" barStyle="light-content" />}
      <AppNavigator />
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
