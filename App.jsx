import { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import APOD from './components/apod/APOD';
import AppBar from './components/appbar/AppBar';
import cheieApi from './components/apod/CheieAPI';
import { apeleazaApi, formatDate } from './components/apod/ApelareAPI';
import { ModalImagine } from './components/modal-imagine/ModalImagine';
import ModalMeniu from './components/modal-meniu/ModalMeniu';
import { creareTabele, dropDatabaseAsync, getFavoriteAPODS } from './components/BazaDeDate';
import FavoriteAPODS from './components/favorite/FavoriteAPODS';
import { findIndexFavorita } from './components/favorite/Favorite';

export default function App() {

  //#232B2B #1e1e1e #11574a

  //to do
  //unele nu au poze, au linkuri de ytb - exemplu 6 septembrie - de pus video in container (daca url incepe cu https://youtube...)
  //galerie 
  //in galerie cand se selcteaza un apod (apodu sa fie pus intr-un modal) pt vizualizare, data sa fie blocata 
    //(sa fie doar de afisaj nu sa se pota selecta alta), si in loc de barele de meniu sa apara o sageata inapoi 
    //- buton favorita sa fie si el vizibil - se da si listaFavorite ca arg

  const [visibilityAPOD,      setVisibilityAPOD]      = useState(true)
  const [visibilityFavorite, setVisibilityFavorite] = useState(false)

  const [dataAleasa,      setDataAleasa]      = useState(new Date())
  const [url,             setURL]             = useState('')
  const [explicatie,      setExplicatie]      = useState('')
  const [titlu,           setTitlu]           = useState('')
  
  const [visibilityModalImagine,  setVisibilityModalImagine]  = useState(false)
  const [visibilityModalMeniu,    setVisibilityModalMeniu]    = useState(false)

  const [listaFavorite, setListaFavorite] = useState([])

  const [favorita, setFavorita] = useState(false)

  const apiKey = cheieApi

  const populareListaFavorite = async () => {
    getFavoriteAPODS()
    .then( lista => { setListaFavorite(lista) } )
    .catch(error => { console.log("Error geting favorites list" + JSON.stringify(error)) } )
  }

  useEffect(
    () => {
      //dropDatabaseAsync()
      creareTabele()
      populareListaFavorite()
    }, []
  )

  const preiaDateAPOD = () => {
    try {
      apeleazaApi(formatDate(dataAleasa)).then(
        raspunsAPI => {
          setURL        (raspunsAPI.url)
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
      //setare favorita
      if(findIndexFavorita(listaFavorite, dataAleasa) === -1)
        setFavorita(false)
      else
        setFavorita(true)
      //la startup dataAleasa se alege automat (data de azi)
      //aici se seteaza titlu, explicatie, url
      preiaDateAPOD()
    }, [dataAleasa]
  )

  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" backgroundColor={"black"} barStyle={"light-content"}> </StatusBar>

      <AppBar 
        apiKey                      = {apiKey}
        dataAleasa                  = {dataAleasa}
        url                         = {url}
        explicatie                  = {explicatie}
        titlu                       = {titlu}    
        setDataAleasa               = {setDataAleasa}
        setVisibilityModalMeniu     = {setVisibilityModalMeniu}
        visibilityAPOD              = {visibilityAPOD}
        visibilityFavorite          = {visibilityFavorite}
        listaFavorite               = {listaFavorite}
        setListaFavorite            = {setListaFavorite}
        favorita                    = {favorita}
        setFavorita                 = {setFavorita}
      />
      
      {visibilityAPOD && (
      <APOD 
          url                       = {url}
          explicatie                = {explicatie}
          titlu                     = {titlu}
          setVisibilityModalImagine = {setVisibilityModalImagine}
      />)}

      {visibilityFavorite && (
      <FavoriteAPODS 
      />)}

      {visibilityModalImagine && (
      <ModalImagine 
        visibilityModalImagine      = {visibilityModalImagine}
        setVisibilityModalImagine   = {setVisibilityModalImagine}
        dataAleasa                  = {dataAleasa}
        url                         = {url}
      />)}

      {visibilityModalMeniu && (
      <ModalMeniu
        visibilityModalMeniu    = {visibilityModalMeniu}
        setVisibilityModalMeniu = {setVisibilityModalMeniu}
        setVisibilityAPOD       = {setVisibilityAPOD}
        setVisibilityFavorite   = {setVisibilityFavorite}
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
