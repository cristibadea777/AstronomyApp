import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { generareStiluriFavoriteAPODS } from "./Styles"

const FavoriteAPODS = ({listaFavorite, setTitlu, setExplicatie, setURL, setVisibilityFavorite, setVisibilityAPOD, setVizualizareFavorit, setDataAPOD}) => {

    const styles = generareStiluriFavoriteAPODS()  

    const handleOnPressElementFavorit = (item) => {
        setTitlu        (item.titlu)
        setExplicatie   (item.explicatie)
        setURL          (item.url)
        setDataAPOD     (item.data)
        setVizualizareFavorit(true)
        setVisibilityFavorite(false)
        setVisibilityAPOD    (true)
    }

    const randareListaFavorite = () => {
        return(
            listaFavorite.map((item, index) => (
                <TouchableOpacity key={index} style={styles.elementFavorit} onPress={()=>{handleOnPressElementFavorit(item)}}>
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