import { useEffect, useState } from 'react';
import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';
import DayPicker from './components/daypicker/DayPicker';

export default function App() {
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" backgroundColor={"black"} barStyle={"light-content"}> </StatusBar>
      
      <DayPicker/>

      
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
