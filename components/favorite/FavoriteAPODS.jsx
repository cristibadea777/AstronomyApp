import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { generareStiluriFavoriteAPODS } from "./Styles"

const FavoriteAPODS = ({listaFavorite}) => {

    const styles = generareStiluriFavoriteAPODS()  

    const handleOnPressElementFavorit = (data) => {
        //valorile le seteaza din baza de date - pt APOD-ul cu data de ... (nu se apeleaza api)
        //afiseaza sectiune APOD 
    }

    const randareListaFavorite = () => {
        return(
            listaFavorite.map((item, index) => (
                <TouchableOpacity key={index} style={styles.elementFavorit} onPress={handleOnPressElementFavorit(item.data.toString())}>
                    <View style={styles.containerImagine}>            
                        <Image source={{ uri: item.url }} style={{ flex: 1 }} resizeMode='contain'/>
                    </View>
                    <View style={styles.containerText}>
                        <View style={styles.containerDataSiTitlu}>
                            <Text style={{fontSize: 17, color: "cyan"}}>{item.data.toString()}</Text>
                            <Text style={{fontSize: 17, color: "cyan"}} numberOfLines={1}>{item.titlu.toString()}</Text>
                        </View>
                        <View style={styles.containerExplicatie}>
                            <Text style={{fontSize: 17, color: "white"}} numberOfLines={3}>{item.explicatie.toString()}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            ))
        )
    }

    return(
        <ScrollView style={styles.containerFavorite}>
            {randareListaFavorite()}
        </ScrollView>
    )
}
export default FavoriteAPODS