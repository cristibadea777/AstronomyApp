import { StyleSheet } from 'react-native';

const generareStiluriFavoriteAPODS = () => {

  return StyleSheet.create(
    {
        containerFavorite: {
          flexGrow: 1, 
          backgroundColor: "#1e1e1e",
          width: "100%"
        },

        elementFavorit: {
          height: 130,
          width: "100%",
          backgroundColor: "black", 
          flexDirection: "row",
          padding: 7
        },

        containerImagine: {
          height: "100%",
          justifyContent: "flex-start",
          width:"30%",
        },

        containerText: {
          flexGrow: 1
        },

        containerDataSiTitlu: {
          height: "40%",
          flexGrow: 1,
          alignItems: "flex-start", 
          justifyContent: "flex-start",   
          overflow: "hidden",
          marginLeft: 1,
          padding: 3       
        },

        containerExplicatie: {
          height: "60%",
          flexGrow: 1,
          alignItems: "flex-start", 
          justifyContent: "center",   
          marginLeft: 4,
        }
    }
  )

}
export{ generareStiluriFavoriteAPODS }