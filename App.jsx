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
import About from './components/about/About';
import Backup from './components/backup/Backup';

export default function App() {

  //#232B2B #1e1e1e #11574a
  
  //to do
  //unele nu au poze, au linkuri de ytb - exemplu 6 septembrie - de pus video in container (daca raspuns din API  media_type = video)

  const [visibilityAPOD,          setVisibilityAPOD]          = useState(true)
  const [visibilityFavorite,      setVisibilityFavorite]      = useState(false)
  const [visibilityAbout,         setVisibilityAbout]         = useState(false) 
  const [visibilityBackup,        setVisibilityBackup]        = useState(false)
  const [dataAleasa,              setDataAleasa]              = useState(new Date())
  const [url,                     setURL]                     = useState('')
  const [explicatie,              setExplicatie]              = useState('')
  const [titlu,                   setTitlu]                   = useState('')
  const [tempUrl,                 setTempURL]                 = useState('')
  const [tempExplicatie,          setTempExplicatie]          = useState('')
  const [tempTitlu,               setTempTitlu]               = useState('')
  const [visibilityModalImagine,  setVisibilityModalImagine]  = useState(false)
  const [visibilityModalMeniu,    setVisibilityModalMeniu]    = useState(false)
  const [listaFavorite,           setListaFavorite]           = useState([])
  const [favorita,                setFavorita]                = useState(false)
  const [vizualizareFavorit,      setVizualizareFavorit]      = useState(false)
  const [dataAPOD,                setDataAPOD]                = useState('')

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
          setURL            (raspunsAPI.url)
          setTitlu          (raspunsAPI.title)
          setExplicatie     (raspunsAPI.explanation)

          setTempURL        (raspunsAPI.url)
          setTempTitlu      (raspunsAPI.title)
          setTempExplicatie (raspunsAPI.explanation)
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
      //la startup dataAleasa se alege automat (data de azi)
      preiaDateAPOD()
      setFavorita       (findIndexFavorita(listaFavorite, dataAleasa) !== -1)
    }, [dataAleasa]
  )

  useEffect(
    () => {
      setFavorita       (findIndexFavorita(listaFavorite, dataAleasa) !== -1)
    }, [listaFavorite]
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
        vizualizareFavorit          = {vizualizareFavorit}
        setVizualizareFavorit       = {setVizualizareFavorit}
        setVisibilityAPOD           = {setVisibilityAPOD}
        setVisibilityFavorite       = {setVisibilityFavorite}
        dataAPOD                    = {dataAPOD}
        visibilityAbout             = {visibilityAbout}
        visibilityBackup            = {visibilityBackup}
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
        listaFavorite               = {listaFavorite}
        setTitlu                    = {setTitlu}
        setExplicatie               = {setExplicatie}
        setDataAleasa               = {setDataAleasa}
        setURL                      = {setURL}
        setVisibilityFavorite       = {setVisibilityFavorite}
        setVisibilityAPOD           = {setVisibilityAPOD}
        setVizualizareFavorit       = {setVizualizareFavorit}
        setDataAPOD                 = {setDataAPOD}
        setFavorita                 = {setFavorita}
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
        tempTitlu               = {tempTitlu}
        tempExplicatie          = {tempExplicatie}
        tempUrl                 = {tempUrl}
        setTitlu                = {setTitlu}
        setExplicatie           = {setExplicatie}
        setURL                  = {setURL}
        setFavorita             = {setFavorita}
        dataAleasa              = {dataAleasa}
        listaFavorite           = {listaFavorite}
        setVisibilityAbout      = {setVisibilityAbout}
        setVisibilityBackup     = {setVisibilityBackup}
      />
      )}

      {visibilityAbout && (
        <About />
      )}

      {visibilityBackup && (
        <Backup 
          preiaDateAPOD          = {preiaDateAPOD}
          populareListaFavorite  = {populareListaFavorite}
        />
      )}

    </View> 
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
