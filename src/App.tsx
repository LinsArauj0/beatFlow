import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RouteNavigate } from '@src/routes/RouteNavigate';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from '@src/services/AuthContext';

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <AuthProvider>
        <RouteNavigate />
      </AuthProvider>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
});
