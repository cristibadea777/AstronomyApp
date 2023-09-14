import { TouchableOpacity, View } from "react-native"
import { generareStiluriAppBar } from "./Styles"
import DayPicker from "./daypicker/DayPicker"
import { generareStiluriDayPicker } from "./daypicker/Styles"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faArrowLeft, faBars, faHeart } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const AppBar = ({dataAleasa, setDataAleasa, visibilityModalImagine, setVisibilityModalImagine, setVisibilityModalMeniu}) => {

    const styles            = generareStiluriAppBar()
    const stylesDayPicker   = generareStiluriDayPicker()

    const [favorita,    setFavorita]    = useState(false)

    const handlePressButonFavorita = async () => {
        if(favorita){
            setFavorita(false)
            //scoatere din bd
        }else{
            setFavorita(true)
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

            <DayPicker 
                styles                  =   {stylesDayPicker}
                dataAleasa              =   {dataAleasa}
                setDataAleasa           =   {setDataAleasa}
                visibilityModalImagine  =   {visibilityModalImagine}
            />

            <View style={styles.containerFavorite}>
                    <TouchableOpacity 
                        onPress={handlePressButonFavorita}
                    >
                        <FontAwesomeIcon icon={faHeart} color={favorita ? "red" : "white"} size={33}/>
                    </TouchableOpacity>
            </View>
        </View>
    )
}
export default AppBar