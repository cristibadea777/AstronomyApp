import { Image, Modal, View } from "react-native"
import { generareStiluriModalImagine } from "./Styles";
import AppBar from "../appbar/AppBar";

const ModalImagine = ( {visibilityModalImagine, setVisibilityModalImagine, dataAleasa, url} ) => {
    
    const handleCloseModalImagine = () => {
        setVisibilityModalImagine(false)
    }

    const styles = generareStiluriModalImagine();

    return (
        <Modal 
            visible={visibilityModalImagine}
            onRequestClose={handleCloseModalImagine}
        >
            <AppBar 
                dataAleasa                = {dataAleasa}
                visibilityModalImagine    = {visibilityModalImagine}
                setVisibilityModalImagine = {setVisibilityModalImagine}
            />
            
            {url && (
            <View style={styles.containerModalImagine}>            
                <Image source={{ uri: url }} style={{ flex: 1 }} resizeMode='contain'/>
            </View>)}


            

        </Modal>
    )
}
export { ModalImagine }