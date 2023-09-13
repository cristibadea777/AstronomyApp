import { StyleSheet } from 'react-native';

const generareStiluriAppBar = () => {

  return StyleSheet.create(
    {
        containerPrincipal: {
            width: "100%", 
            height: "10%", 
            backgroundColor: "#1e1e1e",
            borderWidth: 7, 
            borderColor: "green",
            flexDirection: "row"
        },

        containerMeniu: {
            width: "17%", 
            backgroundColor: "black",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 7, 
            borderColor: "white",
        },

        containerFavorite: {
            width: "20%",
            backgroundColor: "black",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 7, 
            borderColor: "white",
        },

    }
  )

}
export{ generareStiluriAppBar }