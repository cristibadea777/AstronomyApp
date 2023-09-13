import { StyleSheet } from 'react-native';

const generareStiluriDayPicker = () => {

  return StyleSheet.create(
    {
        containerDatePicker: {
            flex: 1,
            borderWidth: 7, 
            borderColor: "white",
        },

        butonPicker: {
            flex: 1, 
            alignItems: "center", 
            justifyContent: "center",
            backgroundColor: "black"
        },
    }
  )

}
export{ generareStiluriDayPicker }