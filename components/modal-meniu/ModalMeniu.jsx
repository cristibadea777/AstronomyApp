import { Modal, Text, TouchableOpacity, View } from "react-native"
import { generareStiluriModalMeniu } from "./Styles"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faBars, faFileArchive, faHeart, faInfo, faPhotoFilm } from "@fortawesome/free-solid-svg-icons"

const ModalMeniu = ({ visibilityModalMeniu, setVisibilityModalMeniu, setVisibilityAPOD, setVisibilityFavorite, tempFavorita, setFavorita,
                      tempTitlu, tempExplicatie, tempUrl, setTitlu, setExplicatie, setURL, setVisibilityAbout, setVisibilityBackup}) => {

    const handleCloseModalMeniu = () => {
        setVisibilityModalMeniu(false)
    }

    const handleOnPressAPOD = () => {
        //resetare valori originale APOD = ultimul APOD vizualizat inainte de accesarea unui APOD din sectiunea favorite
        //ca sa nu se mai faca alt api call cu data aleasa
        setTitlu     (tempTitlu)
        setExplicatie(tempExplicatie)
        setURL       (tempUrl)
        setFavorita  (tempFavorita)
        setVisibilityAPOD(true)
        //inchide restu
        setVisibilityFavorite(false)
        setVisibilityAbout(false)
        setVisibilityBackup(false)
        handleCloseModalMeniu()
    }
    const handleOnPressFavorite = () => {
        setVisibilityFavorite(true)
        //inchide restu
        setVisibilityAPOD(false)
        setVisibilityAbout(false)
        setVisibilityBackup(false)
        handleCloseModalMeniu()
    }
    const handleOnPressBackup = () => {
        //deschide backup
        setVisibilityBackup(true)
        //inchide restu
        setVisibilityAbout(false)
        setVisibilityAPOD(false)
        setVisibilityFavorite(false)
        handleCloseModalMeniu()
    }
    const handleOnPressAbout = () => {
        //deschide about
        setVisibilityAbout(true)
        //inchide restu
        setVisibilityAPOD(false)
        setVisibilityFavorite(false)
        handleCloseModalMeniu()
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
                    <TouchableOpacity style={styles.elementModalMeniu} onPress={handleOnPressAPOD}>
                        <FontAwesomeIcon icon={faPhotoFilm} color={"white"} size={33}/>
                        <Text style={styles.textElementModalMeniu}>APOD</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.elementModalMeniu} onPress={handleOnPressFavorite}>
                        <FontAwesomeIcon icon={faHeart} color={"red"} size={33}/>
                        <Text style={styles.textElementModalMeniu}>Favorites</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.elementModalMeniu} onPress={handleOnPressBackup}>
                        <FontAwesomeIcon icon={faFileArchive} color={"yellow"} size={33}/>
                        <Text style={styles.textElementModalMeniu}>Backup</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.elementModalMeniu} onPress={handleOnPressAbout}>
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