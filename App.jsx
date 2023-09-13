import { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import APOD from './components/apod/APOD';
import AppBar from './components/appbar/AppBar';

export default function App() {

  //#232B2B #1e1e1e #11574a

  const [visibilityAPOD, setVisibilityAPOD] = useState(true)


  const [imagine, setImagine] = useState('https://i.imgur.com/i3Jp5qE.png')

  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" backgroundColor={"black"} barStyle={"light-content"}> </StatusBar>

      <AppBar 
        setVisibilityAPOD = {setVisibilityAPOD}
      />
      
      {visibilityAPOD && (
        <APOD 
          imagine = {imagine}
        />
      )}

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
