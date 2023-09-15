import { StyleSheet } from "react-native"

const generareStiluriBackup = () => {
    return StyleSheet.create( 
        {
            containerBackup:{
                flexGrow: 1, 
                backgroundColor: "#1e1e1e",
                width: "100%"
            },            

            containerElement: {
                width: "100%", 
                height: "25%", 
                alignItems: "center", 
                justifyContent: "space-around", 
                flexDirection: "row"
            },

            textElementTitlu: {
                color: "cyan",
                fontSize: 25,
                margin: 7,
                fontWeight: "bold"
            },

            textContainerElement: {
                color: "white",
                fontSize: 25,
                margin: 7
            }
        }
    )
}
export { generareStiluriBackup }