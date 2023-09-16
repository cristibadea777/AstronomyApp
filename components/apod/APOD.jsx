import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { generareStiluriAPOD } from "./Styles"
import { WebView } from 'react-native-webview';

const APOD = ({url, titlu, explicatie, esteVideo, setVisibilityModalImagine}) => {

    const styles = generareStiluriAPOD()    

    return(
        <View style={styles.containerPrincipal}>
            <View style={styles.containerPoza}>
                {(url && !esteVideo) && (
                <TouchableOpacity style={{flexGrow: 1}} onPress={() => {setVisibilityModalImagine(true)} }>
                    <Image source={{ uri: url }} style={{ flex: 1 }} resizeMode='contain'/>
                </TouchableOpacity>
                )}
                {(url && esteVideo) && (
                <View style={{flexGrow: 1}}>
                    <WebView
                        style={{ flex: 1 }}
                        source={{ uri: url }}
                    />
                </View>
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