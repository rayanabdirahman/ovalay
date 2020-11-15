import * as React from 'react'
import { StyleSheet, View, Text, SafeAreaView } from 'react-native'

export default function Layout(props: any) {
  return (
    <SafeAreaView style={{ backgroundColor: "white"}}>
      <View style={{ marginTop: 10, marginLeft: 10, marginRight: 10,  backgroundColor: "white", height: "100%"}}>
        { props.children}
      </View>
    </SafeAreaView>
  )
}
