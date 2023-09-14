import { Text, TouchableOpacity, View } from "react-native"
import { generareStiluriAppBar } from "./Styles"
import DayPicker from "./daypicker/DayPicker"
import { generareStiluriDayPicker } from "./daypicker/Styles"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faArrowLeft, faBars, faHeart } from "@fortawesome/free-solid-svg-icons"
import { addElementListaFavorite, findIndexFavorita, removeElementListaFavorite } from "../favorite/Favorite"
import { useEffect, useState } from "react"

const AppBar = ({   dataAleasa, setDataAleasa, titlu, url, explicatie,
                    visibilityModalImagine, setVisibilityModalImagine, 
                    setVisibilityModalMeniu, visibilityAPOD, visibilityFavorite, 
                    listaFavorite, setListaFavorite, favorita, setFavorita,
                }) => {

    const styles            = generareStiluriAppBar()
    const stylesDayPicker   = generareStiluriDayPicker()
    
    const handlePressButonFavorita = async () => {
        if(favorita){
            setFavorita(false)
            setListaFavorite(removeElementListaFavorite(listaFavorite, dataAleasa))
            //scoatere din bd
        }else{
            setFavorita(true)
            console.log("favorita data " + dataAleasa)
            setListaFavorite(addElementListaFavorite(listaFavorite, titlu, explicatie, url, dataAleasa))
            //punere in bd
        }
    }
    
    const handleOnPressButonMeniu = () => {
        setVisibilityModalMeniu(true)
    }

    const handleOnPressButonInapoi = () => {
        setVisibilityModalImagine(false)
    }

    return(
        <View style={styles.containerPrincipal}>
            <View style={styles.containerMeniu}>
                {! visibilityModalImagine ? 
                (
                <TouchableOpacity
                    onPress={handleOnPressButonMeniu}
                >
                    <FontAwesomeIcon icon={faBars} color="white" size={33}/>
                </TouchableOpacity> ) : 
                (
                <TouchableOpacity
                    onPress={handleOnPressButonInapoi}
                >
                    <FontAwesomeIcon icon={faArrowLeft} color="white" size={33}/>
                </TouchableOpacity>
                )
                }

            </View>

            {visibilityAPOD &&(
            <>
            <DayPicker 
                styles                  =   {stylesDayPicker}
                dataAleasa              =   {dataAleasa}
                setDataAleasa           =   {setDataAleasa}
                visibilityModalImagine  =   {visibilityModalImagine}
            /> 
            <View style={styles.containerFavorite}>
                <TouchableOpacity onPress={handlePressButonFavorita}>
                    <FontAwesomeIcon icon={faHeart} color={favorita ? "red" : "white"} size={33}/>
                </TouchableOpacity>
            </View> 
            </>
            )}

            {visibilityFavorite &&(
            <View style={styles.containerSecundare}>
                <Text style={styles.titluSecundare}>Favorites</Text>
            </View>
            )}
        </View>
    )
}
export default AppBar