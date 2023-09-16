import { Text, TouchableOpacity, View } from "react-native"
import { generareStiluriAppBar } from "./Styles"
import DayPicker from "./daypicker/DayPicker"
import { generareStiluriDayPicker } from "./daypicker/Styles"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faArrowLeft, faBars, faHeart } from "@fortawesome/free-solid-svg-icons"
import { addElementListaFavorite, removeElementListaFavorite } from "../favorite/Favorite"
import { addAPODtoFavorites, deleteAPODfromFavorites } from "../BazaDeDate"
import { formatDate } from "../apod/ApelareAPI"

const AppBar = ({   dataAleasa, setDataAleasa, titlu, url, explicatie,
                    visibilityModalImagine, setVisibilityModalImagine, 
                    setVisibilityModalMeniu, visibilityAPOD, visibilityFavorite, 
                    listaFavorite, setListaFavorite, favorita, setFavorita,
                    vizualizareFavorit, setVizualizareFavorit, setVisibilityFavorite, 
                    setVisibilityAPOD, dataAPOD, visibilityAbout, visibilityBackup
                }) => {

    const styles            = generareStiluriAppBar()
    const stylesDayPicker   = generareStiluriDayPicker()
    
    const handlePressButonFavorita = async () => {
        //dataAleasa este data aleasa din date picker, dataAPOD e data APOD-ului curent de la favorite
        let data = ''
        data = vizualizareFavorit ? dataAPOD : dataAleasa 
        if(favorita){
            setFavorita(false)
            setListaFavorite(removeElementListaFavorite(listaFavorite, data))
            await deleteAPODfromFavorites({data})
        }else{
            setFavorita(true)
            setListaFavorite(addElementListaFavorite(listaFavorite, titlu, explicatie, url, data))
            await addAPODtoFavorites({titlu, explicatie, data, url})
        }
    }
    
    const handleOnPressButonMeniu = () => {
        setVisibilityModalMeniu(true)
    }

    const handleOnPressButonInapoi = () => {
        setVisibilityModalImagine(false)
    }

    const handleOnPressButonInapoiFavorite = () => {
        setVizualizareFavorit(false)
        setVisibilityAPOD(false)
        setVisibilityFavorite(true)
    }

    return(
        <View style={styles.containerPrincipal}>
            <View style={styles.containerMeniu}>
                {(! visibilityModalImagine && ! vizualizareFavorit) ? 
                (
                <TouchableOpacity onPress={handleOnPressButonMeniu}>
                    <FontAwesomeIcon icon={faBars} color="white" size={33}/>
                </TouchableOpacity> 
                ) : vizualizareFavorit ? (
                <TouchableOpacity onPress={handleOnPressButonInapoiFavorite}>
                    <FontAwesomeIcon icon={faArrowLeft} color="white" size={33}/>
                </TouchableOpacity>
                ) :
                (
                <TouchableOpacity onPress={handleOnPressButonInapoi}>
                    <FontAwesomeIcon icon={faArrowLeft} color="white" size={33}/>
                </TouchableOpacity>
                )
                }
            </View>

            {visibilityAPOD &&(
            <>
            {!vizualizareFavorit ?(
            <DayPicker 
                styles                  =   {stylesDayPicker}
                dataAleasa              =   {dataAleasa}
                setDataAleasa           =   {setDataAleasa}
                visibilityModalImagine  =   {visibilityModalImagine}
            /> 
            ):(
                <View style={styles.containerSecundare}>
                    <Text style={styles.titluSecundare}>{dataAPOD.toString()}</Text>
                </View>
            )}

            <View style={styles.containerFavorite}>
                <TouchableOpacity onPress={handlePressButonFavorita}>
                    <FontAwesomeIcon icon={faHeart} color={favorita ? "red" : "white"} size={33}/>
                </TouchableOpacity>
            </View> 
            </>
            )}

            {(visibilityFavorite || visibilityModalImagine || visibilityAbout || visibilityBackup) &&(
            <View style={styles.containerSecundare}>
                <Text style={styles.titluSecundare}>
                    {   visibilityFavorite ? 'Favorites' : 
                        visibilityModalImagine ? 'Image' : 
                        visibilityAbout ? 'About' : 
                        visibilityBackup ? 'Backup' : ''
                    }
                </Text>
            </View>
            )}
        </View>
    )
}
export default AppBar