import { Text, View } from "react-native"
import { generareStiluriAbout } from "./Styles"

const About = () => {
    
    const styles = generareStiluriAbout()

    return(
        <View style={styles.containerAbout}>
            <View style={styles.containerTitlu}>
                <Text style={styles.textTitlu}>APOD - Astronomy Picture Of The Day</Text>
            </View>

            <View style={styles.containerDescriere}>
                <Text style={styles.textDescriere}>Free app to visualize NASA's APOD. The API key is limited to 2000 calls per hour, so if the app doesn't work, it exceeded its limit. The API can be found on the official NASA website, where you can get a free API key too.</Text>
            </View>
        </View>
    )
}
export default About