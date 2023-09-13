import { TouchableOpacity, View } from "react-native"
import { generareStiluriAppBar } from "./Styles"
import DayPicker from "../apod/daypicker/DayPicker"
import { generareStiluriDayPicker } from "../apod/daypicker/Styles"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faBars, faHeart } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const AppBar = () => {

    const styles            = generareStiluriAppBar()
    const stylesDayPicker   = generareStiluriDayPicker()

    const [favorita,    setFavorita]    = useState(false)
    
    return(
        <View style={styles.containerPrincipal}>
            <View style={styles.containerMeniu}>
                <TouchableOpacity>
                    <FontAwesomeIcon icon={faBars} color="white" size={33}/>
                </TouchableOpacity>
            </View>

            <DayPicker styles={stylesDayPicker}/>

            <View style={styles.containerFavorite}>
                    <TouchableOpacity 
                        onPress={() => setFavorita(!favorita)}
                    >
                        <FontAwesomeIcon icon={faHeart} color={favorita ? "red" : "white"} size={33}/>
                    </TouchableOpacity>
            </View>
        </View>
    )
}
export default AppBar