import { StyleSheet } from 'react-native';

const generareStiluriDayPicker = () => {

  return StyleSheet.create(
    {
        containerDatePicker: {
            flex: 1,
            flexDirection: "row",
            backgroundColor: "#232B2B"
        },

        butonPicker: {
            flex: 1, 
            alignItems: "center", 
            justifyContent: "center",
        },

        butonSageata: {
          width: "25%",
          alignItems: "center",
          justifyContent: "center",
        },

        textData: {
          color: "white", 
          fontSize: 24
        }
    }
  )

}
export{ generareStiluriDayPicker }