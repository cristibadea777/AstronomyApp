import DateTimePicker from '@react-native-community/datetimepicker';
import { Text, TouchableOpacity, View } from "react-native";
import { useState } from 'react';

const DayPicker = ({styles}) => {

    const [date,    setDate]    = useState(new Date())
    const [picker,  setPicker]  = useState(false)
  
    const onChangeDatePicker = (evt, selectedDate) =>{
      console.log(selectedDate)
      setPicker(false)
    } 

    const dataMinim = new Date("1995-06-20") //prima poza APOD 
    const dataAzi   = new Date()             //data de azi

    return (
        <View style={styles.containerDatePicker}>
            <TouchableOpacity
                style={styles.butonPicker}
                onPress={() => {setPicker(true)}}
            >
                <Text style={{color: "white", fontSize: 24}}> {dataAzi.toDateString()} </Text>
            </TouchableOpacity>

            {picker && (          
                <DateTimePicker 
                    value={date}
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