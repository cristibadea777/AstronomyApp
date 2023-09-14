import { Modal, Text, TouchableOpacity, View } from "react-native"
import { generareStiluriModalMeniu } from "./Styles"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faBars, faFileArchive, faHeart, faInfo, faMoon, faQuestion, faStarAndCrescent, faX } from "@fortawesome/free-solid-svg-icons"

const ModalMeniu = ({visibilityModalMeniu, setVisibilityModalMeniu}) => {

    const handleCloseModalMeniu = () => {
        setVisibilityModalMeniu(false)
    }

    const styles = generareStiluriModalMeniu()

    return(
        <Modal
            visible={visibilityModalMeniu}
            onRequestClose={handleCloseModalMeniu}
            transparent={true}
        >
            <View style={{flexDirection: "row", flex: 1}}>
                <View style={styles.containerModalMeniu}>
                    <View style={styles.containerTop}>
                        <TouchableOpacity onPress={handleCloseModalMeniu}><FontAwesomeIcon icon={faBars} size={70} color={"white"}/></TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.elementModalMeniu} onPress={{}}>
                        <FontAwesomeIcon icon={faHeart} color={"red"} size={33}/>
                        <Text style={styles.textElementModalMeniu}>Favorites</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.elementModalMeniu} onPress={{}}>
                        <FontAwesomeIcon icon={faFileArchive} color={"yellow"} size={33}/>
                        <Text style={styles.textElementModalMeniu}>Backup</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.elementModalMeniu} onPress={{}}>
                        <FontAwesomeIcon icon={faInfo} color={"blue"} size={33}/>
                        <Text style={styles.textElementModalMeniu}>About</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{flexGrow: 1}} onPress={handleCloseModalMeniu}/> 
            </View>
        </Modal>

    )
}
export default ModalMeniu