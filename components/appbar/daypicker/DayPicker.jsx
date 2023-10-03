import DateTimePicker from '@react-native-community/datetimepicker';
import { Text, TouchableOpacity, View } from "react-native";
import { useState } from 'react';
import { formatDate } from '../../apod/ApelareAPI';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const DayPicker = ({styles, dataAleasa, setDataAleasa}) => {

    const [picker,  setPicker]  = useState(false)
    
    const onChangeDatePicker = (evt, selectedDate) => {
      setDataAleasa(selectedDate)
      setPicker(false)
    } 

    const dataMinim = new Date("1995-06-20") //prima poza APOD 
    const dataAzi   = new Date() //maxim data de azi 

    const handleIncrementDate = () => {
        dataNoua = new Date(dataAleasa)
        dataNoua.setDate(dataNoua.getDate() + 1)
        if(dataNoua < dataAzi)
            try { setDataAleasa(dataNoua) } 
            catch (error) { console.log(error) }
    }

    const handleDecrementDate = () => {
        dataNoua = new Date(dataAleasa)
        dataNoua.setDate(dataNoua.getDate() - 1)
        if(dataNoua > dataMinim)
            try { setDataAleasa(dataNoua) } 
            catch (error) { console.log(error) }
    }

    return (
        <View style={styles.containerDatePicker}>
            <TouchableOpacity 
                style    = {styles.butonSageata}
                onPress  = {handleDecrementDate}
            >
                <FontAwesomeIcon icon={faArrowLeft} color='white' size={33}/>
            </TouchableOpacity>
            
            <TouchableOpacity
                style    = {styles.butonPicker}
                onPress  = {() => {setPicker(true)}}
            >
                <Text style={styles.textData}> {formatDate(dataAleasa)} </Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style    = {styles.butonSageata}
                onPress  = {handleIncrementDate}
            >
                <FontAwesomeIcon icon={faArrowRight} color='white' size={33}/>
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