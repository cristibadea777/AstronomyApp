import { StyleSheet } from 'react-native';

const generareStiluriAPOD = () => {

  return StyleSheet.create(
    {
        containerPrincipal: {
            flex: 1,
            width: "100%",
            backgroundColor: '#1e1e1e'
        },
        
        textTitlu: {
            fontSize: 22,
            color: "white",
            padding: 12,
            paddingBottom: 7
        },

        textExplicatie: {
            fontSize: 17,
            color: "white",
            padding: 12,
            paddingTop: 7,
        },

        containerPoza: {
            height: "40%",
        },

        containerText: {
            flex: 1,
            height: "20%",
        },

        containerTitlu: {
            width: "100%", 
            alignItems: "flex-start", 
            justifyContent: "center",
        },
    }
  )

}
export{ generareStiluriAPOD }