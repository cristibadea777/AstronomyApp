import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { generareStiluriAPOD } from "./Styles"

const APOD = ({url, titlu, explicatie, setVisibilityModalImagine}) => {

    const styles = generareStiluriAPOD()    

    return(
        <View style={styles.containerPrincipal}>
            <View style={styles.containerPoza}>
                {url && (
                    <TouchableOpacity 
                        style={{flexGrow: 1}}
                        onPress={() => {setVisibilityModalImagine(true)} }
                    >
                        <Image source={{ uri: url }} style={{ flex: 1 }} resizeMode='contain'/>
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