import DateTimePicker from '@react-native-community/datetimepicker';
import { Text, TouchableOpacity, View } from "react-native";
import { useState } from 'react';
import { formatDate } from '../../apod/ApelareAPI';

const DayPicker = ({styles, dataAleasa, setDataAleasa, visibilityModalImagine}) => {

    const [picker,  setPicker]  = useState(false)
    
    const onChangeDatePicker = (evt, selectedDate) =>{
      console.log(selectedDate)
      setDataAleasa(selectedDate)
      setPicker(false)
    } 

    const dataMinim = new Date("1995-06-20") //prima poza APOD 
    const dataAzi   = new Date() //maxim data de azi 

    return (
        <View style={styles.containerDatePicker}>
            <TouchableOpacity
                style    = {styles.butonPicker}
                onPress  = {() => {setPicker(true)}}
                disabled = {visibilityModalImagine}
            >
                <Text style={styles.textData}> {formatDate(dataAleasa)} </Text>
            </TouchableOpacity>

            {picker && (          
                <DateTimePicker 
                    value={dataAleasa}
                    mode={"date"}
                    onChange={onChangeDatePicker}
                    maximumDate={dataAzi}
                    minimumDate={dataMinim}
                />
            )}
        </View>
    )

}
export default DayPicker;