import { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import APOD from './components/apod/APOD';
import AppBar from './components/appbar/AppBar';
import cheieApi from './components/apod/CheieAPI';
import { apeleazaApi, formatDate } from './components/apod/ApelareAPI';

export default function App() {

  //#232B2B #1e1e1e #11574a

  //to do
  //creare modal imagine
  //modal meniu - gallery, about
  //galerie 
  //creare folder galerie daca nu exista
  //creare baza de date in folder daca nu exista
  //creare tabel apod daca nu exista - data, url imagine, explicatie, titlu  

  const [visibilityAPOD, setVisibilityAPOD] = useState(true)
  const [dataAleasa,  setDataAleasa]  = useState(new Date())
  const [imagine,     setImagine]     = useState('')
  const [explicatie,  setExplicatie]  = useState('')
  const [titlu,       setTitlu]       = useState('')
  
  const [visibilityModalImagine, setVisibilityModalImagine] = useState(false)


  const apiKey = cheieApi

  useEffect(
    () => {
      try {
        apeleazaApi(formatDate(dataAleasa)).then(
          raspunsAPI => {
            console.log(JSON.stringify(raspunsAPI, null, 2))
            setImagine    (raspunsAPI.hdurl)
            setTitlu      (raspunsAPI.title)
            setExplicatie (raspunsAPI.explanation)
          }
        ).catch( error => {console.log(error)} )
      } catch (error) {
        alert("API calls limit for today exceeded. Try again tomorrow")
        console.log(error)
      }
    }, [dataAleasa]
  )

  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" backgroundColor={"black"} barStyle={"light-content"}> </StatusBar>

      <AppBar 
        setVisibilityAPOD = {setVisibilityAPOD}
        apiKey            = {apiKey}
        dataAleasa        = {dataAleasa}    
        setDataAleasa     = {setDataAleasa}
      />
      
      {visibilityAPOD && (
        <APOD 
          imagine     = {imagine}
          explicatie  = {explicatie}
          titlu       = {titlu}
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
