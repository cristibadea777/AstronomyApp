import { StyleSheet } from 'react-native';

const generareStiluriModalMeniu = () => {

  return StyleSheet.create(
    {
        containerModalMeniu: {
            width: "45%",
            height: "100%",
            backgroundColor: 'black',
            borderRightWidth: 0.7,
            borderColor: "cyan"
        },

        containerTop:{
          height: "25%",
          backgroundColor: "#232B2B",
          borderBottomWidth: 0.7,
          borderColor: "cyan",
          justifyContent: "center",
          alignItems: "center"
        },

        elementModalMeniu:{
          height: "12%", 
          padding: 3,
          borderBottomWidth: 0.3,
          justifyContent: "space-between", 
          alignItems: "center", 
          flexDirection: "row",
        },
    
        textElementModalMeniu:{
          margin: 7, 
          fontSize: 33, 
          color: "white",
        },
    }
  )

}
export{ generareStiluriModalMeniu }