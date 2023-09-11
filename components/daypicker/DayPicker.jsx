import DateTimePicker from '@react-native-community/datetimepicker';
import { Button, View } from "react-native";
import { useEffect, useState } from 'react';

const DayPicker = () => {

    const [date,    setDate]    = useState(new Date('2023-9-11'))
    const [picker,  setPicker]  = useState(false)
  
    const onChangeDatePicker = (e, selectedDate) =>{
      console.log(selectedDate)
      setPicker(false)
    } 

    const dataMinim = new Date("1995-06-20") //prima poza APOD 
    const dataAzi   = new Date()             //data de azi

    return (
    <View>
        <Button
            title='Pick a date'
            onPress={() => {setPicker(true)}}
        />

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