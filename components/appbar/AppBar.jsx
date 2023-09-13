import { TouchableOpacity, View } from "react-native"
import { generareStiluriAppBar } from "./Styles"
import DayPicker from "./daypicker/DayPicker"
import { generareStiluriDayPicker } from "./daypicker/Styles"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faBars, faHeart } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const AppBar = ({dataAleasa, setDataAleasa}) => {

    const styles            = generareStiluriAppBar()
    const stylesDayPicker   = generareStiluriDayPicker()

    const [favorita,    setFavorita]    = useState(false)

    const handlePressButonFavorita = async () => {
        setFavorita(!favorita)
    }
    
    return(
        <View style={styles.containerPrincipal}>
            <View style={styles.containerMeniu}>
                <TouchableOpacity>
                    <FontAwesomeIcon icon={faBars} color="white" size={33}/>
                </TouchableOpacity>
            </View>

            <DayPicker 
                styles          =   {stylesDayPicker}
                dataAleasa      =   {dataAleasa}
                setDataAleasa   =   {setDataAleasa}
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