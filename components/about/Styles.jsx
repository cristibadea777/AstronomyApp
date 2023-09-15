import { StyleSheet } from 'react-native';

const generareStiluriAbout = () => {

  return StyleSheet.create(
    {
        containerAbout: {
            flexGrow: 1, 
            backgroundColor: "#1e1e1e",
            width: "100%"
        },

        containerTitlu: {
            width: "100%",
            height: "33%",
            alignItems: "center",
            justifyContent: "center"
        },

        textTitlu: {
            fontSize: 24,
            color: "cyan"
        },

        containerDescriere: {
            flex: 1,
            padding: 7,
            alignItems: "center",
            justifyContent: "flex-start"
        }, 

        textDescriere: {
            fontSize: 24,
            color: "white"
        }
    }
  )

}
export{ generareStiluriAbout }