import { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import APOD from './components/apod/APOD';
import AppBar from './components/appbar/AppBar';
import cheieApi from './components/apod/CheieAPI';
import { apeleazaApi, formatDate } from './components/apod/ApelareAPI';
import { ModalImagine } from './components/modal-imagine/ModalImagine';
import ModalMeniu from './components/modal-meniu/ModalMeniu';
import { creareTabele, dropDatabaseAsync } from './components/BazaDeDate';

export default function App() {

  //#232B2B #1e1e1e #11574a

  //to do
  //unele nu au poze, au linkuri de ytb - exemplu 6 septembrie - de pus video in container (daca url incepe cu https://youtube...)
  //modal meniu - gallery, about
  //galerie 
  //creare folder galerie daca nu exista
  //creare baza de date in folder daca nu exista
  //creare tabel apod daca nu exista - data, url imagine, explicatie, titlu
  //creare functionalitate salvare/stergere in baza de date favorite/nefavorite   
  //cand data se schimba, daca DATA nu exista in DB, atunci inima sa fie colorata alb, altfel rosu (ca e favorita)
  //in galerie cand se selcteaza un apod pt vizualizare, data sa fie blocata (sa fie doar de afisaj nu sa se pota selecta alta), in loc debarele de meniu sa apara o sageata inapoi
  //functionalitate favorite - cand se incarca app, se face si o lista cu favoritele (lista de dăți), ca sa nu seacceseze baza de date la fiecare 
    //apod deschis, ci sa se vrifice daca exista in lista - atunci inima se face rosie - altfel se face alba (se verifica cand se schimba DATA)
    //cand se apasa pe inima
      //DATA nu exista in lista - atuni se introduce si in lista, si in bd 
      //DATA exista in lista - se scoate si din lista si din bd

  const [visibilityAPOD,  setVisibilityAPOD]  = useState(true)
  const [dataAleasa,      setDataAleasa]      = useState(new Date())
  const [imagine,         setImagine]         = useState('')
  const [explicatie,      setExplicatie]      = useState('')
  const [titlu,           setTitlu]           = useState('')
  
  const [visibilityModalImagine,  setVisibilityModalImagine]  = useState(false)
  const [visibilityModalMeniu,    setVisibilityModalMeniu]    = useState(false)
  const apiKey = cheieApi

  useEffect(
    () => {
      //drop database
      //dropDatabaseAsync()
      //creare bd si tabele daca nu exista (aplicatia se acceseaza pt prima oara)     
      creareTabele()
    }, []
  )

  const preiaDateAPOD = () => {
    try {
      apeleazaApi(formatDate(dataAleasa)).then(
        raspunsAPI => {
          console.log(JSON.stringify(raspunsAPI, null, 2))
          setImagine    (raspunsAPI.url)
          setTitlu      (raspunsAPI.title)
          setExplicatie (raspunsAPI.explanation)
        }
      ).catch( error => {console.log(error)} )
    } 
    catch (error) {
      alert("API calls limit for today exceeded. Try again tomorrow")
      console.log(error)
    }
  }

  useEffect(
    () => {
      //preiaDateAPOD()
    }, [dataAleasa]
  )

  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" backgroundColor={"black"} barStyle={"light-content"}> </StatusBar>

      <AppBar 
        setVisibilityAPOD           = {setVisibilityAPOD}
        apiKey                      = {apiKey}
        dataAleasa                  = {dataAleasa}    
        setDataAleasa               = {setDataAleasa}
        setVisibilityModalMeniu     = {setVisibilityModalMeniu}
      />
      
      {visibilityAPOD && (
      <APOD 
          imagine                   = {imagine}
          explicatie                = {explicatie}
          titlu                     = {titlu}
          setVisibilityModalImagine = {setVisibilityModalImagine}
      />)}

      {visibilityModalImagine && (
      <ModalImagine 
        visibilityModalImagine      = {visibilityModalImagine}
        setVisibilityModalImagine   = {setVisibilityModalImagine}
        dataAleasa                  = {dataAleasa}
        imagine                     = {imagine}
      />)}

      {visibilityModalMeniu && (
      <ModalMeniu
        visibilityModalMeniu    = {visibilityModalMeniu}
        setVisibilityModalMeniu = {setVisibilityModalMeniu}
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
