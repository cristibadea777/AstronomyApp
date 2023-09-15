import { StyleSheet } from "react-native"

const generareStiluriBackup = () => {
    return StyleSheet.create( 
        {
            containerBackup:{
                flexGrow: 1, 
                backgroundColor: "#1e1e1e",
                width: "100%"
            },            
        }
    )
}
export { generareStiluriBackup }