import { StyleSheet } from 'react-native';

const generareStiluriDayPicker = () => {

  return StyleSheet.create(
    {
        containerDatePicker: {
            flex: 1,
            backgroundColor: "#232B2B"
        },

        butonPicker: {
            flex: 1, 
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