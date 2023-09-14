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

        containerSecundare: {
          flex: 1, 
          backgroundColor: "#232B2B",
          justifyContent: "center",
          alignItems: "center",
        },

        titluSecundare: {
            color: "white", 
            fontSize: 24
        }


    }
  )

}
export{ generareStiluriAppBar }