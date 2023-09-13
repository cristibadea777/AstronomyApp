import { StyleSheet } from 'react-native';

const generareStiluriAppBar = () => {

  return StyleSheet.create(
    {
        containerPrincipal: {
            width: "100%", 
            height: "10%", 
            flexDirection: "row"
        },

        containerMeniu: {
            width: "17%", 
            backgroundColor: "#232B2B",
            alignItems: "center",
            justifyContent: "center",
        },

        containerFavorite: {
            width: "20%",
            backgroundColor: "#232B2B",
            alignItems: "center",
            justifyContent: "center",
        },

    }
  )

}
export{ generareStiluriAppBar }