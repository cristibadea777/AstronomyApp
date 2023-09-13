import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { generareStiluriAPOD } from "./Styles"
import * as Sharing from "expo-sharing"

const APOD = ({imagine, titlu, explicatie, setVisibilityModalImagine}) => {

    const styles = generareStiluriAPOD()    

    return(
        <View style={styles.containerPrincipal}>
            <View style={styles.containerPoza}>
                {imagine && (
                    <TouchableOpacity 
                        style={{flexGrow: 1}}
                        onPress={() => {setVisibilityModalImagine(true)} }
                    >
                        <Image source={{ uri: imagine }} style={{ flex: 1 }} resizeMode='contain'/>
                    </TouchableOpacity>
                )}
            </View>
            
            <View style={styles.containerText}>
                <ScrollView> 
                    <View style={styles.containerTitlu}>
                        <Text style={styles.textTitlu}> {titlu} </Text>
                    </View>
                    <Text style={styles.textExplicatie}> {explicatie} </Text>
                </ScrollView>
            </View>
        </View>
    )
}
export default APOD