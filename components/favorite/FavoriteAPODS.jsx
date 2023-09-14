import { ScrollView, Text, View } from "react-native"
import { generareStiluriFavoriteAPODS } from "./Styles"

const FavoriteAPODS = ({}) => {

    const styles = generareStiluriFavoriteAPODS()  

    return(
        <ScrollView style={styles.containerFavorite}>
            {
                //in use effect sa se faca si lista cu toate favoritele
                //aici in componenta sa se preia ca argument lista 
                //si mapez lista
            }
        </ScrollView>
    )
}
export default FavoriteAPODS