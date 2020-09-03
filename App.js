import { StatusBar } from 'expo-status-bar';
import AppNavigator from './navigation/AppNavigator';
import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar backgroundColor="white" barStyle="light-content" />}
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ggg',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
