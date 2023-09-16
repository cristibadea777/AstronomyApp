import { Text, TouchableOpacity, View } from "react-native"
import { generareStiluriBackup } from "./Styles"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faFileExport, faFileImport } from "@fortawesome/free-solid-svg-icons"

import * as FileSystem from 'expo-file-system'
import * as Sharing from "expo-sharing"
import * as DocumentPicker from "expo-document-picker"
import { deschidereBd, inchidereBd } from "../BazaDeDate"

const Backup = ({preiaDateAPOD, populareListaFavorite}) => {
    
    const styles = generareStiluriBackup()

    const handlePressExportData = async () => {
        //export baza de date
        await Sharing.shareAsync(`${FileSystem.documentDirectory}SQLite/FavoriteAPODS.db`) 
    }
    const handlePressImportData = async () => {
        //import baza de date
        try {
            result = await DocumentPicker.getDocumentAsync({ copyToCacheDirectory: false  });
            console.log("Document picker result: " + JSON.stringify(result));
            if (result.type !== 'cancel') {
              await FileSystem.copyAsync({
                from: result.assets[0].uri, 
                to:   `${FileSystem.documentDirectory}SQLite/FavoriteAPODS.db`,
              })
              await inchidereBd()
              await deschidereBd()
              populareListaFavorite()
              preiaDateAPOD()
            }
          } catch (e) {
            console.log(e);
        }
    }


    return(
        <View style={styles.containerBackup}>

            <View style={styles.containerElement}>
                <Text style={styles.textElementTitlu}>Backup your data</Text>
            </View>
            <View style={styles.containerElement}>
                <Text style={styles.textContainerElement}>Export favorites database</Text>
                <TouchableOpacity onPress={handlePressExportData}>
                    <FontAwesomeIcon icon={faFileExport} size={57} color="white"/>
                </TouchableOpacity>
            </View> 
            <View style={styles.containerElement}>
                <Text style={styles.textContainerElement}>Import favorites database</Text>
                <TouchableOpacity onPress={handlePressImportData}>
                    <FontAwesomeIcon icon={faFileImport} size={57} color="white"/>
                </TouchableOpacity>
            </View> 

        </View>
    )
}
export default Backup