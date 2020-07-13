import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = true;
  const isUserAuthenticated = false;

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation isUserAuthenticated={isUserAuthenticated}  />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}