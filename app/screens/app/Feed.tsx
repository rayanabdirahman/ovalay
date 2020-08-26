import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScreenTitle } from '../../components/Text'

export default function Feed() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Jaime Greenwood</Text> */}
      <ScreenTitle>Jaime Greenwood</ScreenTitle>
      <StatusBar style="auto" />
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
  text: {
    fontWeight: "bold",
    fontSize: 16
  }
});
